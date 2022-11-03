import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from "../../services/category-service.service";
import {ActivatedRoute} from "@angular/router";
import {Products} from "../../models/products";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string = '';
  product?: Products;

  constructor(private categoryServiceService: CategoryServiceService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['productId'];
      this.getProductDetail()
    });
  }
  getProductDetail(){
     const sub = this.categoryServiceService.getProduct(this.productId).subscribe(
       res => {
         this.product = res
         console.log(res)
       }
     )
  }
}
