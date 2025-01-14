// productData.ts

import book from '../assets/shop/book.png'; // Import your image
import caculator from '../assets/shop/caculator.png'
import pen from '../assets/shop/pen.png'
import pencil from '../assets/shop/pencil.png'
import penk1 from '../assets/photo/penk1.jpg'
import chairk3 from '../assets/photo/chairk3.jpg'
import bookk1 from '../assets/photo/bookk1.jpg'
import PEN from '../assets/photo/PEN.jpg'

export interface NewArrival {
    id: number;
    name: string;
    imageUrl: string;
    originalPrice: number;
    salePrice: number;
    isLiked: boolean;
}

export const newarrival : NewArrival[] = [
  { id: 1, name: 'Pink Diamond Pen', imageUrl: penk1, originalPrice: 5.00, salePrice: 2.50, isLiked: false },
  {id:2, name: 'Stainless Steel Chair', imageUrl: chairk3, originalPrice: 30.00, salePrice: 25.00, isLiked: false },
  {id:3, name: 'Rainbow Notebook', imageUrl: bookk1, originalPrice: 2.5, salePrice: 1.5, isLiked: false },
  {id:4, name: 'Pink Pen Set', imageUrl: PEN, originalPrice: 6.00, salePrice: 3.00, isLiked: false }
];
