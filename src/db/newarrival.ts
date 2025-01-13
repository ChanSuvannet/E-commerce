// productData.ts

import book from '../assets/shop/book.png'; // Import your image
import caculator from '../assets/shop/caculator.png'
import pen from '../assets/shop/pen.png'
import pencil from '../assets/shop/pencil.png'

export interface NewArrival {
    id: number;
    name: string;
    imageUrl: string;
    originalPrice: number;
    salePrice: number;
    isLiked: boolean;
}

export const newarrival : NewArrival[] = [
  { id: 1, name: 'Text book ', imageUrl: book, originalPrice: 85.50, salePrice: 70.30, isLiked: false },
  {id:2, name: 'calculator', imageUrl: caculator, originalPrice: 150.20, salePrice: 120.50, isLiked: false },
  {id:3, name: 'Long Chain With Locket', imageUrl: pen, originalPrice: 85.50, salePrice: 70.30, isLiked: false },
  {id:4, name: 'Winter Jacket', imageUrl: pencil, originalPrice: 100.50, salePrice: 80.30, isLiked: false }
];
