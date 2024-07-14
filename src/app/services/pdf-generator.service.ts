import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  generatePDF(bookingData: Booking) {
    const doc = new jsPDF();
    const margin = 10;
    let yPosition = margin;

    // Cores
    const darkBackground = '#2A2A2A';
    const magentaAccent = '#FF00FF';
    const whiteText = '#FFFFFF';

    // Definir fundo escuro
    doc.setFillColor(darkBackground);
    doc.rect(
      0,
      0,
      doc.internal.pageSize.width,
      doc.internal.pageSize.height,
      'F'
    );

    // Adicionar cabeçalho
    doc.setFontSize(18);
    doc.setTextColor(whiteText);
    doc.text('Detalhes da Marcação', margin, yPosition);
    yPosition += 10;

    // Linha divisória
    doc.setDrawColor(magentaAccent);
    doc.line(margin, yPosition, 200, yPosition);
    yPosition += 10;

    // Adicionar dados do usuário
    doc.setFontSize(14);
    doc.setTextColor(whiteText);
    doc.text(
      `Nome Completo: ${bookingData.User?.FirstName ?? ''} ${
        bookingData.User?.LastName ?? ''
      }`,
      margin,
      yPosition
    );
    yPosition += 10;
    doc.text(`ID do Usuário: ${bookingData.UserId}`, margin, yPosition);
    yPosition += 10;

    // Linha divisória
    doc.setDrawColor(magentaAccent);
    doc.line(margin, yPosition, 200, yPosition);
    yPosition += 10;

    // Adicionar dados da marcação
    doc.text(
      `Preço Total: kz ${bookingData.Price.toFixed(2)}`,
      margin,
      yPosition
    );
    yPosition += 10;

    // Linha divisória
    doc.setDrawColor(magentaAccent);
    doc.line(margin, yPosition, 200, yPosition);
    yPosition += 10;

    // Adicionar serviços
    doc.setFontSize(16);
    doc.setTextColor(magentaAccent);
    doc.text('Serviços:', margin, yPosition);
    yPosition += 10;

    bookingData.Services.forEach((bookingService, index) => {
      doc.setFontSize(14);
      doc.setTextColor(whiteText);
      doc.text(`Serviço ${index + 1}:`, margin, yPosition);
      yPosition += 10;

      doc.setFontSize(12);
      doc.text(`Nome: ${bookingService.Service.Name}`, margin + 10, yPosition);
      yPosition += 8;
      doc.text(
        `Descrição: ${bookingService.Service.Description}`,
        margin + 10,
        yPosition
      );
      yPosition += 8;
      doc.text(
        `Preço: KZ ${bookingService.Service.Price.toFixed(2)}`,
        margin + 10,
        yPosition
      );
      yPosition += 8;
      doc.text(
        `Categoria: ${bookingService.Service.Category.Name}`,
        margin + 10,
        yPosition
      );
      yPosition += 8;

      if (bookingService.Professional) {
        doc.text(
          `Profissional: ${bookingService.Professional.FirstName} ${bookingService.Professional.LastName}`,
          margin + 10,
          yPosition
        );
        yPosition += 8;
      }

      if (bookingService.Date) {
        doc.text(`Data: ${bookingService.Date}`, margin + 10, yPosition);
        yPosition += 8;
      }

      if (bookingService.Time) {
        doc.text(
          `Hora: ${bookingService.Time.Hour}:${bookingService.Time.Minute}`,
          margin + 10,
          yPosition
        );
        yPosition += 8;
      }

      yPosition += 5; // Adicionar espaço entre os serviços

      // Linha divisória entre serviços
      doc.setDrawColor(magentaAccent);
      doc.line(margin, yPosition, 200, yPosition);
      yPosition += 10;
    });

    // Salvar o PDF com um nome de arquivo
    doc.save(`booking-details-${Date.now()}.pdf`);
  }
}
