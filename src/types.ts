export type ViewMode = 
  | 'home' 
  | 'shop' 
  | 'product-detail' 
  | 'about' 
  | 'contact' 
  | 'recipes' 
  | 'track-order' 
  | 'bulk-orders';

export interface ProductVariant {
  id: string;
  name: string; // e.g. "2.5 Litre", "3.5 Litre", "5 Litre" or "24 cm"
  capacityOrSize: string;
  price: number;
  originalPrice: number;
  inStock: boolean;
  weightGrams?: number;
}

export interface Review {
  id: string;
  userName: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  productName: string;
  userAvatar?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  images: string[];
  threeSixtyImages?: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isDealOfDay?: boolean;
  dealEndTime?: string; // ISO string
  material: string; // e.g., "Tri-Ply Stainless Steel (18/8 304)", "Heavy Gauge Stainless Steel"
  finish: string; // "Mirror Polish", "Satin Matt", "Honeycomb Non-Stick"
  warranty: string; // "10 Years Replacement Guarantee"
  inductionCompatible: boolean;
  dishwasherSafe: boolean;
  inStock: boolean;
  stockCount: number;
  description: string;
  highlights: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  variants: ProductVariant[];
  dimensions: string;
  boxContents: string;
  recipeRecommendation?: string;
}

export interface CartItem {
  product: Product;
  selectedVariant?: ProductVariant;
  quantity: number;
}

export interface FilterState {
  category: string;
  searchQuery: string;
  priceRange: [number, number];
  materials: string[];
  capacities: string[];
  inductionOnly: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
  inStockOnly: boolean;
}

export interface RecipeArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  prepTime: string;
  servings: string;
  author: string;
  authorRole: string;
  image: string;
  excerpt: string;
  utensilUsed: string;
  utensilProductId: string;
  ingredients: string[];
  steps: string[];
  tips: string[];
  date: string;
}

export interface Coupon {
  code: string;
  discountPercent: number;
  maxDiscount: number;
  minSpend: number;
  description: string;
}
