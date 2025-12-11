import { useState } from "react";
import { ShoppingBag, User, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import CartDrawer from "./CartDrawer";
import AuthModal from "./AuthModal";

interface HeaderProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

const Header = ({ onThemeToggle, isDark }: HeaderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "Story", href: "#story" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container-narrow">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-azure flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">A</span>
              </div>
              <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
                Azure <span className="text-primary">Porcelain</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onThemeToggle}
                className="hidden md:flex"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Hi, {user.name.split(" ")[0]}</span>
                  <Button variant="ghost" size="sm" onClick={logout}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsAuthOpen(true)}
                  className="hidden md:flex"
                >
                  <User className="h-5 w-5" />
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-azure text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-t border-border/50 animate-fade-up">
            <div className="container-narrow py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button variant="ghost" size="sm" onClick={onThemeToggle}>
                  {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {isDark ? "Light Mode" : "Dark Mode"}
                </Button>
                {user ? (
                  <Button variant="ghost" size="sm" onClick={logout}>
                    Sign Out
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" onClick={() => setIsAuthOpen(true)}>
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;
