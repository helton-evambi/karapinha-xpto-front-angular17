import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matDeleteOutline,
  matLockOutline,
  matVerifiedOutline,
} from '@ng-icons/material-icons/outline';
type ActionType = 'blocking' | 'confirm' | 'delete' | 'desible';

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      matDeleteOutline,
      matLockOutline,
      matVerifiedOutline,
    }),
  ],
  templateUrl: './action-card.component.html',
  styleUrl: './action-card.component.scss',
})
export class ActionCardComponent {
  @Input({ required: true }) action!: ActionType;
  @Input({ required: true }) entity!: string;
}
