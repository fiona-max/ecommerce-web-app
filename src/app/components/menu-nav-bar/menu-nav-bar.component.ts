import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from "../../services/category-service.service";
import {Categories} from "../../models/categories";

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent implements OnInit {
  categories : Categories[] = []
  constructor(private categoryServiceService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getCategory()
  }
  getCategory(){
    const sub = this.categoryServiceService.getCategories().subscribe( res => {
      this.categories = res
      console.log(this.categories)
    })
  }

}
