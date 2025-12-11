import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("azure-theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("azure-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Header onThemeToggle={() => setIsDark(!isDark)} isDark={isDark} />
          <main>
            <Hero />
            <Collections />
            <Story />
            <Reviews />
            <FAQ />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default Index;
