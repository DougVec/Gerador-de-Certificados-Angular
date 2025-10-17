import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar";
import { CertificateFormComponent, CertificateData } from "./_components/certificate-form/certificate-form";
import { CertificatePreviewComponent } from "./_components/certificate-preview/certificate-preview";
import { CertificateListComponent } from "./_components/certificate-list/certificate-list";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CertificateFormComponent, CertificatePreviewComponent, CertificateListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'gerador-certificado';
  exibirNavbar: boolean = true;

  // Dados do certificado compartilhados entre form e preview
  certificateData = signal<CertificateData | undefined>(undefined);

  // Receber dados do formulário
  onCertificateDataChange(data: CertificateData) {
    this.certificateData.set(data);
  }
}
