import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Categories} from "../models/categories";
import {Products} from "../models/products";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
baseUrl = environment.baseUrl
  constructor(private http: HttpClient,) { }
  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(
      `${this.baseUrl}`
    );
  }
  getProducts(): Observable<Products[]>{
  return this.http.get<Products[]>(`
    https://api.escuelajs.co/api/v1/products?offset=0&limit=8
    `)
  }
}
