import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-PDF',

  templateUrl: './PDF.component.html',
  styleUrls: ['./PDF.component.css']
})
export class PDFComponent  {
  pdfUrls: string[] = [
    'https://example.com/pdf1.pdf',
  'https://example.com/pdf2.pdf',
  'https://example.com/pdf3.pdf',
  'https://example.com/pdf1.pdf',
  'https://example.com/pdf2.pdf',
  'https://example.com/pdf3.pdf',
  'https://example.com/pdf1.pdf',
  'https://example.com/pdf2.pdf',
  'https://example.com/pdf3.pdf']; // Tableau contenant les URL des PDF
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  showButtons = false; // Variable pour afficher/cacher les boutons
  ngOnInit() {
   /*  this.loadPdfUrls(); */
  }

 /*  loadPdfUrls() {
    // Ici, tu effectues ton appel API pour obtenir les URL des PDF
    // Supposons que tu reçoives un tableau d'URL de l'API
    const apiUrl = 'URL_DE_TON_API';

    this.http.get<string[]>(apiUrl).subscribe(urls => {
      this.pdfUrls = urls;
    });
  } */

  getSafeUrl(url: string) {
    // Utilise DomSanitizer pour sécuriser l'URL des PDF
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  downloadPdf(pdfUrl: string) {
    // Implémente la logique pour télécharger le PDF ici
    console.log("Télécharger le PDF :", pdfUrl);
  }

  openPdf(pdfUrl: string) {
    // Implémente la logique pour ouvrir le PDF ici
    console.log("Ouvrir le PDF :", pdfUrl);
  }

}
