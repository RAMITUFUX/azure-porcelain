import { useState } from "react";
import { X, CreditCard, MapPin, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const [step, setStep] = useState<"shipping" | "payment" | "success">("shipping");
  const [isLoading, setIsLoading] = useState(false);

  const [shipping, setShipping] = useState({
    name: user?.name || "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    saveCard: false,
  });

  if (!isOpen) return null;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setStep("success");
    clearCart();

    toast({
      title: "Order Confirmed!",
      description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
    });
  };

  const handleClose = () => {
    setStep("shipping");
    setShipping({ name: user?.name || "", address: "", city: "", zip: "", country: "" });
    setPayment({ cardNumber: "", expiry: "", cvv: "", saveCard: false });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {step === "success" ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 mx-auto flex items-center justify-center mb-6">
              <Check className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="font-serif text-3xl font-semibold mb-4">Order Confirmed!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase. Your order has been placed successfully.
              A confirmation email will be sent shortly.
            </p>
            <Button variant="hero" onClick={handleClose}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2">
            {/* Order Summary */}
            <div className="p-6 bg-secondary/30 border-r border-border">
              <h3 className="font-serif text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize.value}`}
                    className="flex gap-3"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.product.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.selectedColor.name} • {item.selectedSize.label} • Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              {/* Steps */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center gap-2 ${step === "shipping" ? "text-primary" : "text-muted-foreground"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === "shipping" ? "gradient-azure text-primary-foreground" : "bg-muted"}`}>
                    1
                  </div>
                  <span className="text-sm font-medium">Shipping</span>
                </div>
                <div className="flex-1 h-px bg-border" />
                <div className={`flex items-center gap-2 ${step === "payment" ? "text-primary" : "text-muted-foreground"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === "payment" ? "gradient-azure text-primary-foreground" : "bg-muted"}`}>
                    2
                  </div>
                  <span className="text-sm font-medium">Payment</span>
                </div>
              </div>

              {step === "shipping" && (
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <MapPin className="h-5 w-5" />
                    <h3 className="font-serif text-lg font-semibold">Shipping Address</h3>
                  </div>
                  <Input
                    placeholder="Full Name"
                    value={shipping.name}
                    onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Street Address"
                    value={shipping.address}
                    onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="City"
                      value={shipping.city}
                      onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="ZIP Code"
                      value={shipping.zip}
                      onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Country"
                    value={shipping.country}
                    onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
                    required
                  />
                  <Button type="submit" variant="hero" className="w-full mt-6">
                    Continue to Payment
                  </Button>
                </form>
              )}

              {step === "payment" && (
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <CreditCard className="h-5 w-5" />
                    <h3 className="font-serif text-lg font-semibold">Payment Details</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg mb-4">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                  <Input
                    placeholder="Card Number"
                    value={payment.cardNumber}
                    onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="MM/YY"
                      value={payment.expiry}
                      onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="CVV"
                      value={payment.cvv}
                      onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                      required
                      type="password"
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={payment.saveCard}
                      onChange={(e) => setPayment({ ...payment, saveCard: e.target.checked })}
                      className="rounded border-border"
                    />
                    <span className="text-sm text-muted-foreground">Save card for future purchases</span>
                  </label>
                  <div className="flex gap-4 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep("shipping")}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="hero"
                      className="flex-1"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : `Pay $${totalPrice.toLocaleString()}`}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
