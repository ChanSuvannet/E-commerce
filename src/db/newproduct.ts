import book from '../assets/shop/book.png'
import caculator from '../assets/shop/caculator.png'
import pen from '../assets/shop/pen.png'
import pencil from '../assets/shop/pencil.png'
import pencialCase from '../assets/photo/pencialCase.png'

export interface NewProduct {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    rating: number;
    label: string;
}

export const newproduct: NewProduct[] = [
    
         {
            id: 1,
            name: 'Cappibara Pencial Case',
            image: pencialCase, 
            price: 2.5,
            originalPrice: 5,
            rating: 4,
            label: '-50%',
          },
          {
            id: 2,
            name: 'Polo T-shirt For Man',
            image: caculator, 
            price: 25,
            originalPrice: 150,
            rating: 4,
            label: null,
          },
          {
            id: 3,
            name: 'Luxury Wallet For Male',
            image: pen, // Replace with your local image path
            price: 95,
            originalPrice: 100,
            rating: 4,
            label: 'New',
          },
          {
            id:4 ,
            name: 'Stylish Watch For Man',
            image: pencil, // Replace with your local image path
            price: 75,
            originalPrice: 150,
            rating: 5,
            label: '-50%',
          },
          {
            id:5 ,
            name: 'Stylish Watch For Man',
            image: book, // Replace with your local image path
            price: 75,
            originalPrice: 250,
            rating: 5,
            label: '-50%',
          },
          {
            id:6 ,
            name: 'Stylish Watch For Man',
            image: caculator, // Replace with your local image path
            price: 75,
            originalPrice: 250,
            rating: 5,
            label: '-50%',
          }
    
]