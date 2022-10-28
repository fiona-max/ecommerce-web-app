import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from "../../services/category-service.service";
import {Products} from "../../models/products";

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {
  all_products : Products[] = []

  constructor(private categoryServiceService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getProducts()
  }
 getProducts(){
    const sub = this.categoryServiceService.getProducts().subscribe( res => {
      this.all_products = res
      console.log(res)
    })
 }
}
