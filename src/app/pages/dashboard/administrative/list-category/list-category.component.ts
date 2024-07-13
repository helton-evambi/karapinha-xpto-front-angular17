import { Component, inject } from '@angular/core';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { ActionCardComponent } from '../../../../components/dashboard/action-card/action-card.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../models/category.model';
import { Observable } from 'rxjs';
import { statusName } from '../../../../../utils/status';
import {
  ionBarChart,
  ionPerson,
  ionPeople,
  ionTrendingUpSharp,
  ionTrendingDownSharp,
  ionCashOutline,
  ionArrowUp,
  ionArrowDown,
  ionDocumentAttach,
  ionDuplicateOutline,
} from '@ng-icons/ionicons';
import { matBookmarks } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [
    DashboardContainerComponent,
    MenuItensComponent,
    NgIconComponent,
    TableComponent,
    ModalComponent,
    ActionCardComponent,
    RouterLink,
    AsyncPipe,
    NgIf,
  ],
  viewProviders: [
    provideIcons({
      ionBarChart,
      ionPerson,
      ionPeople,
      ionTrendingUpSharp,
      ionTrendingDownSharp,
      ionCashOutline,
      ionArrowUp,
      ionArrowDown,
      ionDocumentAttach,
      ionDuplicateOutline,
      matBookmarks,
    }),
  ],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.scss',
})
export class ListCategoryComponent {
  private categoryService = inject(CategoryService);
  categories$!: Observable<Category[]>;
  categoryId: number = 0;
  modalVisibility: boolean = false;

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
  }

  getStatus(status: string): string {
    return statusName(status);
  }

  openModal(bookingId: number) {
    this.modalVisibility = true;
    this.categoryId = bookingId;
  }
  closeModal() {
    this.modalVisibility = false;
  }
}
