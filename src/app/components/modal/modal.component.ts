import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCloseOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      ionCloseOutline,
    }),
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() visibility: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  close() {
    this.closeModal.emit();
  }
}
