import { defineStore } from 'pinia';
import book from '../assets/shop/book.png'; // import your image

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
    // Array of products with diverse information
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
        reviews: '3,200',
        currentPrice: '1.50',
        originalPrice: '2.00',
        discount: '25% Off',
      },
      {
        id: 3,
        image: book,
        title: 'Blue Notebook',
        rating: 5,
        reviews: '1,500',
        currentPrice: '2.00',
        originalPrice: '2.50',
        discount: '20% Off',
      },
      {
        id: 4,
        image: book,
        title: 'Red Notebook',
        rating: 3,
        reviews: '800',
        currentPrice: '1.80',
        originalPrice: '2.50',
        discount: '10% Off',
      },
      {
        id: 5,
        image: book,
        title: 'Green Notebook',
        rating: 5,
        reviews: '2,500',
        currentPrice: '1.90',
        originalPrice: '2.00',
        discount: '5% Off',
      },
      {
        id: 6,
        image: book,
        title: 'Yellow Notebook',
        rating: 4,
        reviews: '2,000',
        currentPrice: '1.70',
        originalPrice: '2.00',
        discount: '15% Off',
      },
      {
        id: 7,
        image: book,
        title: 'Pink Notebook',
        rating: 3,
        reviews: '1,000',
        currentPrice: '1.60',
        originalPrice: '2.00',
        discount: '10% Off',
      },
      {
        id: 8,
        image: book,
        title: 'Orange Notebook',
        rating: 4,
        reviews: '3,000',
        currentPrice: '1.80',
        originalPrice: '2.50',
        discount: '30% Off',
      },
      {
        id: 9,
        image: book,
        title: 'Purple Notebook',
        rating: 5,
        reviews: '4,500',
        currentPrice: '2.10',
        originalPrice: '2.50',
        discount: '5% Off',
      },
      {
        id: 10,
        image: book,
        title: 'White Notebook',
        rating: 3,
        reviews: '1,200',
        currentPrice: '1.50',
        originalPrice: '1.80',
        discount: '15% Off',
      },
    ] as Product[],
  }),

  // Getters to filter and retrieve product data
  getters: {
    getAllProducts: (state) => state.products,
    // Filter products by discount
    getProductsByDiscount: (state) => (discount: string) => {
      return state.products.filter((product) => product.discount === discount);
    },
    // Get the total number of products
    totalProducts: (state) => state.products.length,
    // Get products with a rating of 4 or above
    getTopRatedProducts: (state) => {
      return state.products.filter((product) => product.rating >= 4);
    },
  },

  // Actions for managing the product data
  actions: {
    // Add a new product to the products list
    addProduct(product: Product) {
      this.products.push(product);
    },

    // Remove a product by its ID
    removeProduct(id: number) {
      this.products = this.products.filter((product) => product.id !== id);
    },

    // Update an existing product by its ID
    updateProduct(id: number, updatedProduct: Partial<Product>) {
      const productIndex = this.products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        this.products[productIndex] = {
          ...this.products[productIndex],
          ...updatedProduct,
        };
      }
    },
  },
});
