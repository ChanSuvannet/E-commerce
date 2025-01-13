import book from '../assets/shop/book.png'
import caculator from '../assets/shop/caculator.png'
import higglightor from '../assets/shop/higglightor.png'
import pen from '../assets/shop/pen.png'
import pencil from '../assets/shop/pencil.png'
import ruler from '../assets/shop/ruler.png'


import ruller1 from '../assets/shop/ruller/ruller1.png'
import ruller2 from '../assets/shop/ruller/ruller2.png'
import ruller3 from '../assets/shop/ruller/ruller3.png'
import ruller4 from '../assets/shop/ruller/ruller4.png'
import ruller5 from '../assets/shop/ruller/ruller5.png'

// Product of Office material 
import { default as board1, default as board2 } from '../assets/shop/office_material/board1.jpg'
import chair from '../assets/shop/office_material/chair.jpg'
import chair2 from '../assets/shop/office_material/chair2.jpg'
import printer1 from '../assets/shop/office_material/printer1.jpg'
import printer2 from '../assets/shop/office_material/printer2.jpg'
import printer3 from '../assets/shop/office_material/printer3.jpg'
import table1 from '../assets/shop/office_material/table1.jpg'
import table2 from '../assets/shop/office_material/table2.jpg'

// products of Pencil
import pencil1 from '../assets/shop/pencil/pencil1.png'
import pencil2 from '../assets/shop/pencil/pencil2.png'
import pencil3 from '../assets/shop/pencil/pencil3.png'
import pencil4 from '../assets/shop/pencil/pencil4.png'
import pencil5 from '../assets/shop/pencil/pencil5.png'
import pencil6 from '../assets/shop/pencil/pencil6.png'
import pencil7 from '../assets/shop/pencil/pencil7.png'

// products of Pen
import pen1 from '../assets/shop/pen/pen1.png'
import pen2 from '../assets/shop/pen/pen2.png'
import pen3 from '../assets/shop/pen/pen3.png'
import pen4 from '../assets/shop/pen/pen4.png'
import pen5 from '../assets/shop/pen/pen5.png'
import pen6 from '../assets/shop/pen/pen6.png'
import pen7 from '../assets/shop/pen/pen7.png'

//products of Sticker
import sticker1 from '../assets/shop/sticker/sticker1.jpg'
import sticker2 from '../assets/shop/sticker/sticker2.jpg'
import sticker3 from '../assets/shop/sticker/sticker3.jpg'
import sticker4 from '../assets/shop/sticker/sticker4.jpg'
import sticker5 from '../assets/shop/sticker/sticker5.jpg'
import sticker6 from '../assets/shop/sticker/sticker6.jpg'
import sticker7 from '../assets/shop/sticker/sticker7.jpg'


export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    image: string;
    title: string;
    rating: number;
    description: string;
    category: string;
    reviews: string;
    currentPrice: string;
    no_default: number;
    originalPrice: string;
    discount: string;
    categoryId: number;
    qty: number;
}

// Sample data for categories
export const categories: Category[] = [
    { id: 1, name: "Book" },
    { id: 2, name: "Pen" },
    { id: 3, name: "Pencil" },
    { id: 4, name: "Ruler" },
    { id: 5, name: "Sticker" },
    { id: 6, name: "Office Material" },
];

// Sample data for products
export const products: Product[] = [
    // Products Book
    {
        id: 1,
        image: book,
        title: 'Black Notebook is the most popular',
        rating: 4,
        description: 'This is a black notebook',
        category: 'Book',
        categoryId: 1,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 100,
        originalPrice: '2.00',
        discount: '20% Off',
        qty: 1
    },
    {
        id: 2,
        image: caculator,
        title: 'Black Notebook',
        rating: 4,
        description: 'A compact black notebook for daily use',
        category: 'Office Material',
        categoryId: 1,
        reviews: '3,200',
        currentPrice: '1.50',
        no_default: 90,
        originalPrice: '2.00',
        discount: '25% Off',
        qty: 1
    },
    {
        id: 3,
        image: higglightor,
        title: 'Black Notebook',
        rating: 4,
        description: 'High-quality notebook with a sleek design',
        category: 'Official Material',
        categoryId: 1,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 80,
        originalPrice: '2.00',
        discount: '20% Off',
        qty: 1
    },
    {
        id: 4,
        image: pen,
        title: 'Black Notebook',
        rating: 4,
        description: 'Durable black notebook with lined pages',
        category: 'Pen',
        categoryId: 1,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 70,
        originalPrice: '2.00',
        discount: '20% Off',
        qty: 1
    },
    {
        id: 5,
        image: pencil,
        title: 'Black Notebook',
        rating: 4,
        description: 'Notebook with a matte black cover',
        category: 'Pencil',
        categoryId: 3,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 95,
        originalPrice: '2.00',
        discount: '5% Off',
        qty: 1
    },
    {
        id: 6,
        image: ruler,
        title: 'Black Notebook',
        rating: 4,
        description: 'Minimalist notebook for everyday tasks',
        category: 'Ruler',
        categoryId: 4,
        reviews: '2,000',
        currentPrice: '1.70',
        no_default: 85,
        originalPrice: '2.00',
        discount: '15% Off',
        qty: 1
    },
    {
        id: 7,
        image: book,
        title: 'Pink Notebook',
        rating: 3,
        description: 'Bright pink notebook with glossy cover',
        category: 'Book',
        categoryId: 1,
        reviews: '1,000',
        currentPrice: '1.60',
        no_default: 120,
        originalPrice: '2.00',
        discount: '10% Off',
        qty: 1
    },
    {
        id: 8,
        image: book,
        title: 'Orange Notebook',
        rating: 4,
        description: 'Vibrant orange notebook for creative work',
        category: 'Book',
        categoryId: 1,
        reviews: '3,000',
        currentPrice: '1.80',
        no_default: 110,
        originalPrice: '2.50',
        discount: '30% Off',
        qty: 1
    },
    {
        id: 9,
        image: book,
        title: 'Purple Notebook',
        rating: 5,
        description: 'Elegant purple notebook with hardcover',
        category: 'Book',
        categoryId: 1,
        reviews: '4,500',
        currentPrice: '2.10',
        no_default: 75,
        originalPrice: '2.50',
        discount: '5% Off',
        qty: 1
    },
    {
        id: 10,
        image: book,
        title: 'White Notebook',
        rating: 3,
        description: 'Clean white notebook with minimal design',
        category: 'Book',
        categoryId: 1,
        reviews: '1,200',
        currentPrice: '1.50',
        no_default: 130,
        originalPrice: '1.80',
        discount: '15% Off',
        qty: 1
    },
    {
        id: 11,
        image: ruller1,
        title: 'Ruler line',
        rating: 4,
        description: 'Standard ruler with measurement markings',
        category: 'Ruler',
        categoryId: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 65,
        originalPrice: '2.00',
        discount: '20% Off',
        qty: 1
    },
    {
        id: 12,
        image: ruller2,
        title: 'Ruler line',
        rating: 4,
        description: 'Durable ruler for school and office use',
        category: 'Ruler',
        categoryId: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 60,
        originalPrice: '2.00',
        discount: '20% Off',
        qty: 1
    },
    {
        id: 13,
        image: ruller3,
        title: 'Ruler line',
        rating: 4,
        description: 'High-precision ruler with clear markings',
        category: 'Ruler',
        categoryId: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 70,
        originalPrice: '2.00',
        discount: '20% Off',
        qty: 1
    },
    {
        id: 14,
        image: ruller4,
        title: 'Ruler line',
        rating: 4,
        description: 'Flexible ruler for various measurements',
        category: 'Ruler',
        categoryId: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 90,
        originalPrice: '2.00',
        discount: '20% Off',
        qty: 1
    },
    {
        id: 15,
        image: ruller5,
        title: 'Ruler line',
        rating: 4,
        description: 'Classic ruler with anti-slip grip',
        category: 'Ruler',
        categoryId: 4,
        reviews: '4,778',
        currentPrice: '1.60',
        no_default: 50,
        originalPrice: '2.00',
        discount: '20% Off',
        qty: 1
    },
    {
        id: 16,
        image: board1,
        title: 'Board 1',
        rating: 2,
        description: 'Lightweight board for presentations',
        category: 'Office Material',
        categoryId: 6,
        reviews: '0',
        currentPrice: '0.00',
        no_default: 40,
        originalPrice: '0.00',
        discount: '0%',
        qty: 1
    },
    {
        id: 17,
        image: board2,
        title: 'Board 2',
        rating: 2,
        description: 'Sturdy board for office and classroom use',
        category: 'Office Material',
        categoryId: 6,
        reviews: '0',
        currentPrice: '0.00',
        no_default: 30,
        originalPrice: '0.00',
        discount: '0%',
        qty: 1
    },
    {
        id: 18,
        image: chair,
        title: 'Chair',
        rating: 2,
        description: 'Ergonomic chair with cushioned seating',
        category: 'Office Material',
        categoryId: 6,
        reviews: '0',
        currentPrice: '0.00',
        no_default: 20,
        originalPrice: '0.00',
        discount: '0%',
        qty: 1
    },
    {
        id: 19,
        image: chair2,
        title: 'Chair 2',
        rating: 2,
        description: 'Durable chair with adjustable height',
        category: 'Office Material',
        categoryId: 6,
        reviews: '0',
        currentPrice: '0.00',
        no_default: 25,
        originalPrice: '0.00',
        discount: '0%',
        qty: 1
    },
    {
        id: 20,
        image: printer1,
        title: 'Printer 1',
        rating: 2,
        description: 'Compact printer with wireless connectivity',
        category: 'Office Material',
        categoryId: 6,
        reviews: '0',
        currentPrice: '0.00',
        no_default: 10,
        originalPrice: '0.00',
        discount: '0%',
        qty: 1
    },
    {
        id: 21,
        image: printer2,
        title: "Printer 2",
        rating: 2,
        categoryId: 6,
        reviews: "0",
        currentPrice: "0.00",
        originalPrice: "0.00",
        discount: "0%",
        qty: 1,
        description: "Compact and efficient printer for office use.",
        category: "Office Material",
        no_default: 100
    },
    {
        id: 22,
        image: printer3,
        title: "Printer 3",
        rating: 2,
        categoryId: 6,
        reviews: "0",
        currentPrice: "0.00",
        originalPrice: "0.00",
        discount: "0%",
        qty: 1,
        description: "High-speed printer with wireless connectivity.",
        category: "Office Material",
        no_default: 100
    },
    {
        id: 23,
        image: table1,
        title: "Table 1",
        rating: 2,
        categoryId: 6,
        reviews: "0",
        currentPrice: "0.00",
        originalPrice: "0.00",
        discount: "0%",
        qty: 1,
        description: "Sturdy wooden table ideal for study or work.",
        category: "Office Material",
        no_default: 100
    },
    {
        id: 24,
        image: table2,
        title: "Table 2",
        rating: 2,
        categoryId: 6,
        reviews: "0",
        currentPrice: "0.00",
        originalPrice: "0.00",
        discount: "0%",
        qty: 1,
        description: "Durable steel table with a sleek design.",
        category: "Office Material",
        no_default: 100
    },
    
    // Products of Pencil
    {
        id: 25,
        image: pencil1,
        title: "Pencil 1",
        rating: 2,
        categoryId: 3,
        reviews: "0",
        currentPrice: "1.50",
        originalPrice: "2.00",
        discount: "25%",
        qty: 1,
        description: "HB pencil suitable for sketching and writing.",
        category: "Pencil",
        no_default:100  },
    {
        id: 26,
        image: pencil2,
        title: "Pencil 2",
        rating: 2,
        categoryId: 3,
        reviews: "0",
        currentPrice: "1.30",
        originalPrice: "1.80",
        discount: "28%",
        qty: 1,
        description: "Premium pencil for smooth writing experience.",
        category: "Pencil",
        no_default:100  },
    {
        id: 27,
        image: pencil3,
        title: "Pencil 3",
        rating: 2,
        categoryId: 3,
        reviews: "0",
        currentPrice: "1.75",
        originalPrice: "2.20",
        discount: "20%",
        qty: 1,
        description: "Durable pencil with a comfortable grip.",
        category: "Pencil",
        no_default:100  },
    {
        id: 28,
        image: pencil4,
        title: "Pencil 4",
        rating: 2,
        categoryId: 3,
        reviews: "0",
        currentPrice: "1.40",
        originalPrice: "1.90",
        discount: "26%",
        qty: 1,
        description: "Eco-friendly pencil made from recycled materials.",
        category: "Pencil",
        no_default:100  },
    {
        id: 29,
        image: pencil5,
        title: "Pencil 5",
        rating: 2,
        categoryId: 3,
        reviews: "0",
        currentPrice: "1.60",
        originalPrice: "2.10",
        discount: "24%",
        qty: 1,
        description: "Pencil with break-resistant lead.",
        category: "Pencil",
        no_default:100  },
    {
        id: 30,
        image: pencil6,
        title: "Pencil 6",
        rating: 2,
        categoryId: 3,
        reviews: "0",
        currentPrice: "1.20",
        originalPrice: "1.50",
        discount: "20%",
        qty: 1,
        description: "Lightweight pencil perfect for school use.",
        category: "Pencil",
        no_default:100  },
    {
        id: 31,
        image: pencil7,
        title: "Pencil 7",
        rating: 2,
        categoryId: 3,
        reviews: "0",
        currentPrice: "1.00",
        originalPrice: "1.30",
        discount: "23%",
        qty: 1,
        description: "Stylish pencil with a soft eraser.",
        category: "Pencil",
        no_default:100  },
    
    // Products of Pen
    {
        id: 32,
        image: pen1,
        title: "Pen 1",
        rating: 2,
        categoryId: 2,
        reviews: "0",
        currentPrice: "2.00",
        originalPrice: "2.50",
        discount: "20%",
        qty: 1,
        description: "Blue ink ballpoint pen with smooth flow.",
        category: "Pen",
        no_default:100  },
    {
        id: 33,
        image: pen2,
        title: "Pen 2",
        rating: 2,
        categoryId: 2,
        reviews: "0",
        currentPrice: "1.80",
        originalPrice: "2.20",
        discount: "18%",
        qty: 1,
        description: "Black ink gel pen with comfortable grip.",
        category: "Pen",
        no_default:100  },
    {
        id: 34,
        image: pen3,
        title: "Pen 3",
        rating: 2,
        categoryId: 2,
        reviews: "0",
        currentPrice: "1.90",
        originalPrice: "2.30",
        discount: "17%",
        qty: 1,
        description: "Durable pen with waterproof ink.",
        category: "Pen",
        no_default:100  },
    {
        id: 35,
        image: pen4,
        title: "Pen 4",
        rating: 2,
        categoryId: 2,
        reviews: "0",
        currentPrice: "2.10",
        originalPrice: "2.50",
        discount: "16%",
        qty: 1,
        description: "Fine tip pen for precision writing.",
        category: "Pen",
        no_default:100  },
    {
        id: 36,
        image: pen5,
        title: "Pen 5",
        rating: 2,
        categoryId: 2,
        reviews: "0",
        currentPrice: "2.30",
        originalPrice: "2.80",
        discount: "18%",
        qty: 1,
        description: "Long-lasting ink pen.",
        category: "Pen",
        no_default:100  },
    {
        id: 37,
        image: pen6,
        title: "Pen 6",
        rating: 2,
        categoryId: 2,
        reviews: "0",
        currentPrice: "2.50",
        originalPrice: "3.00",
        discount: "17%",
        qty: 1,
        description: "Retractable pen with a modern design.",
        category: "Pen",
        no_default:100  },
    {
        id: 38,
        image: pen7,
        title: "Pen 7",
        rating: 2,
        categoryId: 2,
        reviews: "0",
        currentPrice: "1.70",
        originalPrice: "2.10",
        discount: "19%",
        qty: 1,
        description: "Pen with quick-drying ink.",
        category: "Pen",
        no_default:100  },
    
    // Products of Sticker
    {
        id: 39,
        image: sticker1,
        title: "Sticker 1",
        rating: 1,
        categoryId: 4,
        reviews: "0",
        currentPrice: "1.00",
        originalPrice: "1.50",
        discount: "33%",
        qty: 1,
        description: "Colorful sticker set for decoration.",
        category: "Sticker",
        no_default: 100
    },
    {
        id: 40,
        image: sticker2,
        title: "Sticker 2",
        rating: 2,
        categoryId: 4,
        reviews: "0",
        currentPrice: "1.20",
        originalPrice: "1.60",
        discount: "25%",
        qty: 1,
        description: "Assorted stickers for kids.",
        category: "Sticker",
        no_default: 100
    },
    {
        id: 41,
        image: sticker3,
        title: "Sticker 3",
        rating: 2,
        categoryId: 5,
        reviews: "0",
        currentPrice: "1.30",
        originalPrice: "1.70",
        discount: "24%",
        qty: 1,
        description: "A colorful sticker ideal for notebooks, laptops, and scrapbooking.",
        category: "Sticker",
        no_default: 100
    },
    {
        id: 42,
        image: sticker4,
        title: "Sticker 4",
        rating: 3,
        categoryId: 5,
        reviews: "0",
        currentPrice: "1.50",
        originalPrice: "2.00",
        discount: "25%",
        qty: 1,
        description: "A set of vibrant stickers with various designs, perfect for decoration.",
        category: "Sticker",
        no_default: 100
    },
    {
        id: 43,
        image: sticker5,
        title: "Sticker 5",
        rating: 2,
        categoryId: 5,
        reviews: "0",
        currentPrice: "1.70",
        originalPrice: "2.20",
        discount: "23%",
        qty: 1,
        description: "High-quality stickers suitable for both personal and gift use.",
        category: "Sticker",
        no_default: 100
    },
    {
        id: 44,
        image: sticker6,
        title: "Sticker 6",
        rating: 2,
        categoryId: 5,
        reviews: "0",
        currentPrice: "1.90",
        originalPrice: "2.40",
        discount: "21%",
        qty: 1,
        description: "Durable and waterproof stickers, great for outdoor use.",
        category: "Sticker",
        no_default: 100
    },
    {
        id: 45,
        image: sticker7,
        title: "Sticker 7",
        rating: 2,
        categoryId: 5,
        reviews: "0",
        currentPrice: "2.00",
        originalPrice: "2.50",
        discount: "20%",
        qty: 1,
        description: "Premium sticker pack featuring trendy and fun designs.",
        category: "Sticker",
        no_default: 100
    }
    
]