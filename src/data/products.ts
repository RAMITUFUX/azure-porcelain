import { Product, Review } from "@/types/store";

export const products: Product[] = [
  {
    id: "azure-vase-01",
    title: "Azure Dynasty Vase",
    price: 680,
    sku: "AZ-V001",
    short: "Hand-painted • Ming Inspired • Limited Edition",
    description: "A masterpiece of traditional craftsmanship, this vase features intricate hand-painted azure motifs inspired by Ming dynasty artistry. Each piece is individually fired at 1300°C to achieve the distinctive celadon glaze that has captivated collectors for centuries.",
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=800&q=80"
    ],
    colors: [
      { name: "Classic Azure", value: "#4a7c9b" },
      { name: "Imperial Blue", value: "#1e3a5f" },
      { name: "Celadon Green", value: "#7fad9e" },
      { name: "Pearl White", value: "#f5f5f0" }
    ],
    sizes: [
      { label: "Small (20cm)", value: "S" },
      { label: "Medium (35cm)", value: "M" },
      { label: "Large (50cm)", value: "L" }
    ],
    category: "Vases"
  },
  {
    id: "porcelain-bowl-02",
    title: "Imperial Tea Bowl",
    price: 320,
    sku: "AZ-B002",
    short: "Hand-thrown • Artisan Crafted",
    description: "Experience tea ceremony traditions with this exquisite hand-thrown bowl. The delicate underglaze decoration depicts classical cloud motifs, while the ergonomic form fits perfectly in your hands.",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=800&q=80"
    ],
    colors: [
      { name: "Classic Azure", value: "#4a7c9b" },
      { name: "Warm Ivory", value: "#f8f4e8" },
      { name: "Sage", value: "#9caf88" }
    ],
    sizes: [
      { label: "Standard", value: "STD" },
      { label: "Large", value: "LG" }
    ],
    category: "Bowls"
  },
  {
    id: "ceramic-plate-03",
    title: "Lotus Dinner Plate",
    price: 180,
    sku: "AZ-P003",
    short: "Dishwasher Safe • Set of 4",
    description: "Elevate your dining experience with these elegant plates featuring a subtle lotus pattern. Crafted from high-fired porcelain for everyday durability without compromising on aesthetics.",
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=800&q=80"
    ],
    colors: [
      { name: "Pearl White", value: "#f5f5f0" },
      { name: "Soft Blue", value: "#b8d4e3" },
      { name: "Blush", value: "#f4e4df" }
    ],
    sizes: [
      { label: "Dinner (27cm)", value: "D" },
      { label: "Salad (21cm)", value: "S" },
      { label: "Dessert (16cm)", value: "DS" }
    ],
    category: "Plates"
  },
  {
    id: "teapot-set-04",
    title: "Harmony Teapot Set",
    price: 520,
    sku: "AZ-T004",
    short: "6-Piece Set • Gift Boxed",
    description: "A complete tea ceremony set including one teapot and four cups with a serving tray. The bamboo handle adds warmth to the cool porcelain body, creating perfect balance.",
    images: [
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      { name: "Classic Azure", value: "#4a7c9b" },
      { name: "Midnight", value: "#1a1a2e" },
      { name: "Natural", value: "#e8e0d5" }
    ],
    sizes: [
      { label: "4-Cup (600ml)", value: "4C" },
      { label: "6-Cup (900ml)", value: "6C" }
    ],
    category: "Tea Sets"
  }

 ,{
  id: "camera-01",
  title: "Professional 4K Camera",
  price: 1200,
  sku: "CAM-001",
  short: "4K • Ultra HD • Night Vision",
  description:
    "A high-performance 4K camera designed for professional photography and videography. Features night vision, optical stabilization, and ultra-wide lens.",
  images: [
    "/camera.jpg",
    "/camera.jpg"
  ],
  colors: [
    { name: "Black", value: "#000000" },
    { name: "Silver", value: "#C0C0C0" }
  ],
  sizes: [
    { label: "Standard Kit", value: "STD" },
    { label: "Pro Kit", value: "PRO" }
  ],
  category: "Cameras"
}

];

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "azure-vase-01",
    userName: "Elizabeth M.",
    rating: 5,
    comment: "Absolutely stunning craftsmanship. The azure glaze catches light beautifully and the attention to detail is remarkable.",
    date: "2024-01-15"
  },
  {
    id: "r2",
    productId: "azure-vase-01",
    userName: "James W.",
    rating: 5,
    comment: "A true collector's piece. The Ming-inspired patterns are authentic and the quality exceeds expectations.",
    date: "2024-01-10"
  },
  {
    id: "r3",
    productId: "porcelain-bowl-02",
    userName: "Sarah L.",
    rating: 4,
    comment: "Beautiful bowl, perfect for my morning tea ritual. The weight and balance are just right.",
    date: "2024-01-08"
  }
  
];
