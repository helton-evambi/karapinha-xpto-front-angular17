import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-content',
  standalone: true,
  imports: [],
  templateUrl: './services-content.component.html',
  styleUrls: ['./services-content.component.scss'],
})
export class ServicesContentComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() text: string = '';

  static reverseState: boolean = false;
  reverse: boolean = false;

  ngOnInit(): void {
    this.reverse = ServicesContentComponent.reverseState;
    ServicesContentComponent.reverseState =
      !ServicesContentComponent.reverseState;
  }
}
