import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { DetailsComponent } from './pages/details/details.component';
import { CategoryComponent } from './pages/category/category.component';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    DetailsComponent,
    CategoryComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
