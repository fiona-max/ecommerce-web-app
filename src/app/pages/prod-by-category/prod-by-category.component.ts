import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from "../../services/category-service.service";
import {ActivatedRoute} from "@angular/router";
import {Products} from "../../models/products";

@Component({
  selector: 'app-prod-by-category',
  templateUrl: './prod-by-category.component.html',
  styleUrls: ['./prod-by-category.component.css']
})
export class ProdByCategoryComponent implements OnInit {
  categoryId: string = ''
  productsOfCategory: Products[] = []
  constructor(private categoryServiceService: CategoryServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryId = params['categoryId'];
      this.getProductsByCategory(this.categoryId)
    });
  }

  getProductsByCategory(categorID: string){
    const sub = this.categoryServiceService.getProductsByCategory(categorID).subscribe(res => {
      this.productsOfCategory = res
      console.log(res)
    })
  }

}
