import { Component, OnInit } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionPersonAdd, ionChevronDown } from '@ng-icons/ionicons';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-choose-professional',
  standalone: true,
  imports: [BookingComponent, NgIconComponent, ModalComponent],
  viewProviders: [
    provideIcons({
      ionPersonAdd,
      ionChevronDown,
    }),
  ],
  templateUrl: './choose-professional.component.html',
  styleUrl: './choose-professional.component.scss',
})
export class ChooseProfessionalComponent {
  modalVisibility: boolean = false;
  openModal() {
    this.modalVisibility = true;
  }
  closeModal() {
    this.modalVisibility = false;
  }
}
