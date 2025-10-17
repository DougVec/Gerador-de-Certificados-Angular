import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateData } from '../certificate-form/certificate-form';

@Component({
  selector: 'app-certificate-preview',
  imports: [CommonModule],
  templateUrl: './certificate-preview.html',
  styleUrl: './certificate-preview.css'
})
export class CertificatePreviewComponent {
  // Dados do certificado vindos do formulário
  certificateData = input<CertificateData>();

  // Formatar data
  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  // Gerar PDF
  generatePDF() {
    window.print();
  }

  // Baixar como imagem
  downloadAsImage() {
    // Implementar captura de tela do certificado
    console.log('Download como imagem');
  }

  // Compartilhar
  shareCertificate() {
    if (navigator.share) {
      navigator.share({
        title: 'Certificado de Conclusão',
        text: `Certificado de ${this.certificateData()?.courseName}`,
        url: window.location.href
      });
    }
  }
}
