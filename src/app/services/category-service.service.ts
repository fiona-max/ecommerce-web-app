import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Categories} from "../models/categories";

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
}
