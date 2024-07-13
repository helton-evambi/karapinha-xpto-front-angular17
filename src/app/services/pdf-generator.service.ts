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

    // Adicionar cabeçalho
    doc.setFontSize(18);
    doc.text('Detalhes da Marcação', 10, 10);

    // Adicionar dados do usuário
    doc.setFontSize(14);
    doc.text(
      `Nome Completo: ${bookingData.User?.FirstName ?? ''} ${
        bookingData.User?.LastName ?? ''
      }`,
      10,
      20
    );
    doc.text(`ID do Usuário: ${bookingData.UserId}`, 10, 30);

    // Adicionar dados da marcação
    doc.text(`Preço Total: kz ${bookingData.Price.toFixed(2)}`, 10, 50);

    // Adicionar serviços
    let yPosition = 60;
    bookingData.Services.forEach((bookingService, index) => {
      doc.text(`Serviço ${index + 1}:`, 10, yPosition);
      yPosition += 10;
      doc.text(`Nome: ${bookingService.Service.Name}`, 10, yPosition);
      yPosition += 10;
      doc.text(
        `Descrição: ${bookingService.Service.Description}`,
        10,
        yPosition
      );
      yPosition += 10;
      doc.text(
        `Preço: KZ ${bookingService.Service.Price.toFixed(2)}`,
        10,
        yPosition
      );
      yPosition += 10;
      doc.text(
        `Categoria: ${bookingService.Service.Category.Name}`,
        10,
        yPosition
      );
      yPosition += 10;

      if (bookingService.Professional) {
        doc.text(
          `Profissional: ${bookingService.Professional.FirstName} ${bookingService.Professional.LastName}`,
          10,
          yPosition
        );
        yPosition += 10;
      }

      if (bookingService.Date) {
        doc.text(`Data: ${bookingService.Date}`, 10, yPosition);
        yPosition += 10;
      }

      if (bookingService.Time) {
        doc.text(
          `Hora: ${bookingService.Time.Hour}:${bookingService.Time.Minute}`,
          10,
          yPosition
        );
        yPosition += 10;
      }

      yPosition += 10; // Adicionar espaço entre os serviços
    });

    // Salvar o PDF com um nome de arquivo
    doc.save('booking-details.pdf');
  }
}
