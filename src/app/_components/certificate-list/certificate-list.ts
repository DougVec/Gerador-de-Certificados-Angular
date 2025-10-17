import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateData } from '../certificate-form/certificate-form';

interface SavedCertificate extends CertificateData {
  id: string;
  createdAt: string;
  lastModified: string;
}

@Component({
  selector: 'app-certificate-list',
  imports: [CommonModule],
  templateUrl: './certificate-list.html',
  styleUrl: './certificate-list.css'
})
export class CertificateListComponent {
  // Lista de certificados salvos
  certificates = signal<SavedCertificate[]>([
    // Dados de exemplo
    {
      id: 'cert-001',
      studentName: 'João Silva Santos',
      courseName: 'Desenvolvimento Web Completo',
      institution: 'Instituto de Tecnologia',
      completionDate: '2025-10-15',
      instructor: 'Prof. Maria Costa',
      courseHours: 120,
      certificateNumber: 'CERT-152745-ABC',
      createdAt: '2025-10-15T10:30:00Z',
      lastModified: '2025-10-15T10:30:00Z'
    },
    {
      id: 'cert-002',
      studentName: 'Ana Paula Oliveira',
      courseName: 'Angular Avançado',
      institution: 'Centro de Treinamento Profissional',
      completionDate: '2025-10-10',
      instructor: 'Prof. Carlos Lima',
      courseHours: 80,
      certificateNumber: 'CERT-148392-XYZ',
      createdAt: '2025-10-10T14:20:00Z',
      lastModified: '2025-10-10T14:20:00Z'
    },
    {
      id: 'cert-003',
      studentName: 'Pedro Henrique Costa',
      courseName: 'Python para Data Science',
      institution: 'Academia Online',
      completionDate: '2025-10-05',
      instructor: 'Prof. Laura Mendes',
      courseHours: 100,
      certificateNumber: 'CERT-143857-PQR',
      createdAt: '2025-10-05T09:15:00Z',
      lastModified: '2025-10-05T09:15:00Z'
    }
  ]);

  // Filtros e ordenação
  searchTerm = signal('');
  sortBy = signal<'date' | 'name' | 'course'>('date');
  sortOrder = signal<'asc' | 'desc'>('desc');

  // Certificados filtrados
  get filteredCertificates() {
    let filtered = this.certificates();

    // Filtro por termo de busca
    if (this.searchTerm()) {
      const term = this.searchTerm().toLowerCase();
      filtered = filtered.filter(cert =>
        cert.studentName.toLowerCase().includes(term) ||
        cert.courseName.toLowerCase().includes(term) ||
        cert.institution.toLowerCase().includes(term)
      );
    }

    // Ordenação
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (this.sortBy()) {
        case 'date':
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case 'name':
          comparison = a.studentName.localeCompare(b.studentName);
          break;
        case 'course':
          comparison = a.courseName.localeCompare(b.courseName);
          break;
      }
      return this.sortOrder() === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }

  // Formatar data
  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Ações
  viewCertificate(certificate: SavedCertificate) {
    console.log('Visualizar certificado:', certificate);
  }

  editCertificate(certificate: SavedCertificate) {
    console.log('Editar certificado:', certificate);
  }

  duplicateCertificate(certificate: SavedCertificate) {
    const newCert: SavedCertificate = {
      ...certificate,
      id: 'cert-' + Date.now(),
      certificateNumber: this.generateCertificateNumber(),
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      studentName: certificate.studentName + ' (Cópia)'
    };

    this.certificates.update(certs => [newCert, ...certs]);
  }

  deleteCertificate(certificate: SavedCertificate) {
    if (confirm(`Tem certeza que deseja excluir o certificado de ${certificate.studentName}?`)) {
      this.certificates.update(certs =>
        certs.filter(c => c.id !== certificate.id)
      );
    }
  }

  downloadCertificate(certificate: SavedCertificate) {
    console.log('Download certificado:', certificate);
  }

  private generateCertificateNumber(): string {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `CERT-${timestamp}-${random}`;
  }

  // Filtros
  onSearchChange(event: any) {
    this.searchTerm.set(event.target.value);
  }

  onSortChange(sortBy: 'date' | 'name' | 'course') {
    if (this.sortBy() === sortBy) {
      this.sortOrder.set(this.sortOrder() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortBy.set(sortBy);
      this.sortOrder.set('asc');
    }
  }
}
