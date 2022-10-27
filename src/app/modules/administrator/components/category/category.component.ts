import { Component, OnInit } from '@angular/core';

import { CategoryModel } from './../../models/category.model';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: CategoryModel[];
  constructor(private categoryService: CategoryService) {
    this.categories = []
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.categoryService.get().subscribe(result => {
      this.categories = result.data.length > 0 ? result.data : [];
    })
  }
  delete(id: any) {
    this.categoryService.remove(id).subscribe(result => {
      this.getData()
    })
  }
}
