import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardCategoryComponent } from '../../components/card-category/card-category.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { CardPackageComponent } from '../../components/card-package/card-package.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    CardCategoryComponent,
    CarouselComponent,
    GalleryComponent,
    CardPackageComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
