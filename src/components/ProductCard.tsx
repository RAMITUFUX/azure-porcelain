import { useState } from "react";
import { Plus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/store";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className={`absolute inset-0 bg-foreground/40 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
          
          {/* Quick Actions */}
          <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <Button
              variant="glass"
              size="icon"
              className="h-12 w-12 rounded-full bg-card/90 hover:bg-card"
              onClick={() => setIsModalOpen(true)}
            >
              <Eye className="h-5 w-5" />
            </Button>
            <Button
              variant="hero"
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-card/90 backdrop-blur-sm rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{product.short}</p>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl text-primary">
              ${product.price.toLocaleString()}
            </p>
            <div className="flex gap-1">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
