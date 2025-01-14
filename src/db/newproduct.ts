import book from '../assets/shop/book.png'
import caculator from '../assets/shop/caculator.png'
import pen from '../assets/shop/pen.png'
import pencil from '../assets/shop/pencil.png'
import pencialCase from '../assets/photo/pencialCase.png'
import chairk4 from '../assets/photo/chairk4.jpg'
import penk2 from '../assets/photo/penk2.jpg'
import chairk2 from '../assets/photo/chairk2.jpg'
import book9 from '../assets/photo/book9.jpg'
import book8 from '../assets/photo/book8.jpg'


export interface NewProduct {
    id: number;
    name: string;
    image: string;
    currentPrice: string;
    originalPrice: number;
    rating: number;
    label: string;
}

export const newproduct: NewProduct[] = [
    
         {
            id: 1,
            name: 'Cappibara Pencial Case',
            image: pencialCase, 
            currentPrice: "2.5",
            originalPrice: 5,
            rating: 4,
            label: '-50%',
          },
          {
            id: 2,
            name: 'Pink bunny Chair',
            image: chairk4, 
            currentPrice: "10",
            originalPrice: 15,
            rating: 4,
            label: null,
          },
          {
            id: 3,
            name: 'Glitter Pink Pen',
            image: penk2, // Replace with your local image path
            currentPrice: "2",
            originalPrice: 3,
            rating: 4,
            label: 'New',
          },
          {
            id:4 ,
            name: 'Fluffy Chair',
            image: chairk2, // Replace with your local image path
            currentPrice: "7.5",
            originalPrice: 15,
            rating: 5,
            label: '-50%',
          },
          {
            id:5 ,
            name: 'I want to die but I want to eat...',
            image: book9, // Replace with your local image path
            currentPrice: "7.5",
            originalPrice: 15,
            rating: 5,
            label: '-50%',
          },
          {
            id:6 ,
            name: 'Before the coffee get cold',
            image: book8, // Replace with your local image path
            currentPrice: "7.5",
            originalPrice: 15,
            rating: 5,
            label: '-50%',
          }
    
]