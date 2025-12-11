import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const Collections = () => {
  return (
    <section id="collections" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Curated Masterpieces
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each piece in our collection represents the pinnacle of ceramic artistry,
            meticulously crafted by master artisans using techniques passed down through generations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
