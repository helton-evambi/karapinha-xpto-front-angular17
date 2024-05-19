import { Component, Input } from '@angular/core';

type CarouselType = 'testimonials' | 'image';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() images: string[] = [];
  @Input() type: CarouselType = 'image';
  @Input() testimonials: { text: string; author: string }[] = [];
  currentSlide = 1;

  nextSlide() {
    if (this.type === 'image')
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    else this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide() {
    if (this.type === 'image')
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    else
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.testimonials.length;
  }
}
