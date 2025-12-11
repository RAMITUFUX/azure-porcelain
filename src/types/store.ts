export interface Product {
  id: string;
  title: string;
  price: number;
  sku: string;
  short: string;
  description: string;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  category: string;
}

export interface ProductColor {
  name: string;
  value: string;
}

export interface ProductSize {
  label: string;
  value: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
