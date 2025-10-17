import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface CertificateData {
  studentName: string;
  courseName: string;
  institution: string;
  completionDate: string;
  instructor: string;
  courseHours: number;
  certificateNumber: string;
}

@Component({
  selector: 'app-certificate-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateFormComponent {
  // Dados do formulário
  formData = signal<CertificateData>({
    studentName: '',
    courseName: '',
    institution: 'Instituto de Tecnologia',
    completionDate: new Date().toISOString().split('T')[0],
    instructor: '',
    courseHours: 40,
    certificateNumber: this.generateCertificateNumber()
  });

  // Output para enviar dados para o preview
  onDataChange = output<CertificateData>();

  // Opções pré-definidas
  institutions = [
    'Instituto de Tecnologia',
    'Universidade Federal',
    'Centro de Treinamento Profissional',
    'Academia Online',
    'Escola Técnica'
  ];

  courses = [
    'Desenvolvimento Web Completo',
    'Angular Avançado',
    'React e Node.js',
    'Python para Data Science',
    'DevOps e Cloud Computing',
    'Segurança da Informação',
    'UI/UX Design',
    'Gestão de Projetos'
  ];

  private generateCertificateNumber(): string {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `CERT-${timestamp}-${random}`;
  }

  onInputChange() {
    this.onDataChange.emit(this.formData());
  }

  regenerateCertificateNumber() {
    this.formData.update(data => ({
      ...data,
      certificateNumber: this.generateCertificateNumber()
    }));
    this.onInputChange();
  }

  clearForm() {
    this.formData.set({
      studentName: '',
      courseName: '',
      institution: 'Instituto de Tecnologia',
      completionDate: new Date().toISOString().split('T')[0],
      instructor: '',
      courseHours: 40,
      certificateNumber: this.generateCertificateNumber()
    });
    this.onInputChange();
  }
}
