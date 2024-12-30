import { defineStore } from 'pinia';
import book from '../assets/shop/book.png'

interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 1,
        image: book,  
        title: 'Black Notebook is the most popular',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 2,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 3,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 4,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 5,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 6,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 7,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 8,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 9,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
      {
        id: 10,
        image: book,  
        title: 'Black Notebook',
        rating: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '20% Off',
      },
    ] as Product[],
  }),
  getters: {
    getAllProducts: (state) => state.products,
  },
  actions: {
    addProduct(product: Product) {
      this.products.push(product);
    },
  },
});
