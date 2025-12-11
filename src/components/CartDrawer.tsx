import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={onClose} />
        
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card shadow-2xl animate-scale-in origin-right">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-xl font-semibold">Your Cart</h2>
                <span className="text-sm text-muted-foreground">({items.length} items)</span>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Add something beautiful</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize.value}`}
                      className="flex gap-4 p-4 bg-secondary/50 rounded-xl"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{item.product.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.selectedColor.name} • {item.selectedSize.label}
                        </p>
                        <p className="font-semibold text-primary mt-2">
                          ${item.product.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() =>
                            removeFromCart(
                              item.product.id,
                              item.selectedColor.name,
                              item.selectedSize.value
                            )
                          }
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-2 bg-background rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.selectedColor.name,
                                item.selectedSize.value,
                                item.quantity - 1
                              )
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.selectedColor.name,
                                item.selectedSize.value,
                                item.quantity + 1
                              )
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-2xl font-serif font-semibold">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Shipping and taxes calculated at checkout
                </p>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => setIsCheckoutOpen(true)}
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
};

export default CartDrawer;
