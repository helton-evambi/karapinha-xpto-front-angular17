import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { ionTimeOutline, ionChevronDown } from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-choose-time',
  standalone: true,
  imports: [BookingComponent, NgIconComponent, ModalComponent],
  viewProviders: [
    provideIcons({
      ionTimeOutline,
      ionChevronDown,
    }),
  ],
  templateUrl: './choose-time.component.html',
  styleUrl: './choose-time.component.scss',
})
export class ChooseTimeComponent {
  modalVisibility: boolean = false;
  openModal() {
    this.modalVisibility = true;
  }
  closeModal() {
    this.modalVisibility = false;
  }
}
