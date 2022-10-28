import {Categories} from "./categories";

export interface Products {
  id : number
  title: string
  price: number
  description: string
  category: Categories
  images: string[]
}
