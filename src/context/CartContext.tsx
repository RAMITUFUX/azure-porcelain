import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product, ProductColor, ProductSize } from "@/types/store";
import { toast } from "@/hooks/use-toast";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, color: ProductColor, size: ProductSize, quantity: number) => void;
  removeFromCart: (productId: string, colorName: string, sizeValue: string) => void;
  updateQuantity: (productId: string, colorName: string, sizeValue: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("azure-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("azure-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, color: ProductColor, size: ProductSize, quantity: number) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor.name === color.name &&
          item.selectedSize.value === size.value
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        toast({
          title: "Cart Updated",
          description: `${product.title} quantity increased to ${updated[existingIndex].quantity}`,
        });
        return updated;
      }

      toast({
        title: "Added to Cart",
        description: `${product.title} - ${color.name}, ${size.label}`,
      });

      return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
    });
  };

  const removeFromCart = (productId: string, colorName: string, sizeValue: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.product.id === productId &&
            item.selectedColor.name === colorName &&
            item.selectedSize.value === sizeValue)
      )
    );
    toast({
      title: "Removed from Cart",
      description: "Item has been removed",
    });
  };

  const updateQuantity = (productId: string, colorName: string, sizeValue: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, colorName, sizeValue);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId &&
        item.selectedColor.name === colorName &&
        item.selectedSize.value === sizeValue
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
