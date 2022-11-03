import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from "../../services/category-service.service";
import {Products} from "../../models/products";
import {Categories} from "../../models/categories";

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {
  all_products : Products[] = []
  categories: Categories[] = []
  catProducts: Products[] = []
  arrayOfProductsAndCategory: any[] = []
  prodByCategory = new Map();

  constructor(private categoryServiceService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategory()


  }
  getProducts(){
    const sub = this.categoryServiceService.getProductsPaginated().subscribe( res => {
      this.all_products = res
    })
  }
  getCategory(){
    const sub = this.categoryServiceService.getCategories().subscribe( res => {
      this.categories = res
      const sub = this.categoryServiceService.getProducts().subscribe( result => {
        this.generateArrayOfProductsAndCategory(res,result)
      })
    })
  }
  // getProductsByCategory(categoryId: number){
  //   const sub = this.categoryServiceService.getProductsByCategory(categoryId).subscribe( res => {
  //        this.prodByCategory = res
  //     console.log(res)
  //   })
  // }
  generateArrayOfProductsAndCategory(categories: Categories[],products: Products[]){
     categories.forEach( category=> {
       let catProducts: any[] = [];
       products.forEach( product => {
         if (product.category.id === category.id){
           catProducts.push(product)
         }
       });
       this.prodByCategory.set(category.name, catProducts);
     })
    console.log(this.prodByCategory);
  }
}
