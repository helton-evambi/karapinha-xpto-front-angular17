import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = 'primary' | 'secundary' | 'login';
type BtnColors = 'normal' | 'pink';
type BtnSize = 'normal' | 'full';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input('btn-text') btnText: string = '';
  @Input() disabled: boolean = false;
  @Input() variant: BtnVariants = 'primary';
  @Input() color: BtnColors = 'normal';
  @Input() size: BtnSize = 'normal';

  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
