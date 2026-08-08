import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product, FilterState } from '../types';
import { 
  Filter, 
  Grid, 
  List, 
  RotateCcw, 
  ChevronDown, 
  Sparkles, 
  Search,
  Check
} from 'lucide-react';

interface ShopViewProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  wishlistIds: string[];
  compareIds: string[];
}

export const ShopView: React.FC<ShopViewProps> = ({
  initialCategory = 'all',
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  wishlistIds,
  compareIds,
}) => {
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    searchQuery: '',
    priceRange: [500, 15000],
    materials: [],
    capacities: [],
    inductionOnly: false,
    sortBy: 'featured',
    inStockOnly: false,
  });

  const materialsList = [
    'Tri-Ply 304 Surgical Steel',
    'Heavy Gauge Stainless Steel',
    'German Greblon Honeycomb',
    'SS304 Food Grade'
  ];

  const handleCategoryChange = (catId: string) => {
    setFilters({ ...filters, category: catId });
  };

  const handleMaterialToggle = (mat: string) => {
    setFilters((prev) => {
      const exists = prev.materials.includes(mat);
      return {
        ...prev,
        materials: exists ? prev.materials.filter((m) => m !== mat) : [...prev.materials, mat],
      };
    });
  };

  // Filter logic
  const filteredProducts = PRODUCTS.filter((product) => {
    // Category match
    if (filters.category !== 'all' && product.categorySlug !== filters.category) {
      return false;
    }
    // Search match
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      const match = 
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.material.toLowerCase().includes(q);
      if (!match) return false;
    }
    // Price range
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    // Material match
    if (filters.materials.length > 0) {
      const matchMat = filters.materials.some((m) => product.material.toLowerCase().includes(m.toLowerCase().split(' ')[0]));
      if (!matchMat) return false;
    }
    // Induction only
    if (filters.inductionOnly && !product.inductionCompatible) {
      return false;
    }
    // In Stock only
    if (filters.inStockOnly && !product.inStock) {
      return false;
    }
    return true;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === 'price-low') return a.price - b.price;
    if (filters.sortBy === 'price-high') return b.price - a.price;
    if (filters.sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured/newest
  });

  const resetFilters = () => {
    setFilters({
      category: 'all',
      searchQuery: '',
      priceRange: [500, 15000],
      materials: [],
      capacities: [],
      inductionOnly: false,
      sortBy: 'featured',
      inStockOnly: false,
    });
  };

  return (
    <div className="py-10 bg-[#1a1a1a] min-h-screen text-left font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <div className="text-xs text-zinc-400 mb-1 font-medium">
            Home &nbsp;/&nbsp; <span className="text-white font-bold">Cookware Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Premium Kitchenware Collection
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Browse 100% certified 304 food-grade surgical steel cookers, kadais, fry pans & dinner sets.
          </p>
        </div>

        {/* Top Control Bar */}
        <div className="bg-[#242424] p-4 rounded-2xl border border-white/10 shadow-xl mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Mobile Filter Toggle Button */}
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="lg:hidden flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-2.5 px-4 rounded-xl text-xs font-bold text-white"
          >
            <Filter className="w-4 h-4 text-[#FFD600]" />
            <span>Filter Catalog ({sortedProducts.length} items)</span>
          </button>

          {/* Search Input inside Shop */}
          <div className="relative flex-1 max-w-sm">
            <input 
              type="text" 
              placeholder="Filter by name, material, or category..."
              value={filters.searchQuery}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              className="w-full pl-9 pr-3 py-2 bg-zinc-900 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#FFD600]"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
          </div>

          {/* Sort & Layout Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-zinc-400 hidden sm:inline">Sort By:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="bg-zinc-900 border border-white/10 text-xs font-bold text-white py-2 px-3 rounded-xl focus:outline-none"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Layout Toggle */}
            <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-xl border border-white/10">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  layoutMode === 'grid' ? 'bg-[#FFD600] text-[#3A3A3A] shadow-sm font-bold' : 'text-zinc-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  layoutMode === 'list' ? 'bg-[#FFD600] text-[#3A3A3A] shadow-sm font-bold' : 'text-zinc-400 hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Main Grid with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Filters */}
          <div className={`lg:col-span-3 space-y-6 ${showMobileFilter ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-[#242424] p-6 rounded-3xl border border-white/10 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-extrabold text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Filter className="w-4 h-4 text-[#FFD600]" /> Refine Search
                </span>
                <button 
                  onClick={resetFilters}
                  className="text-xs text-zinc-400 hover:text-[#FFD600] font-bold flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Categories Filter */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
                  Cookware Category
                </h4>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full text-left py-1.5 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                        filters.category === cat.id
                          ? 'bg-[#FFD600] text-[#3A3A3A] font-bold'
                          : 'text-zinc-300 hover:bg-white/5'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] opacity-70">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
                  Material & Technology
                </h4>
                <div className="space-y-1.5">
                  {materialsList.map((mat) => {
                    const isChecked = filters.materials.includes(mat);
                    return (
                      <label 
                        key={mat}
                        onClick={() => handleMaterialToggle(mat)}
                        className="flex items-center gap-2 text-xs font-medium text-zinc-300 cursor-pointer select-none hover:text-white"
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#FFD600] border-[#FFD600] text-[#3A3A3A]' : 'border-zinc-600 bg-zinc-900'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{mat}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Options Toggles */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <label className="flex items-center justify-between text-xs font-semibold text-zinc-300 cursor-pointer">
                  <span>Induction Compatible Only</span>
                  <input 
                    type="checkbox"
                    checked={filters.inductionOnly}
                    onChange={(e) => setFilters({ ...filters, inductionOnly: e.target.checked })}
                    className="accent-[#FFD600] w-4 h-4"
                  />
                </label>

                <label className="flex items-center justify-between text-xs font-semibold text-zinc-300 cursor-pointer">
                  <span>In Stock Items Only</span>
                  <input 
                    type="checkbox"
                    checked={filters.inStockOnly}
                    onChange={(e) => setFilters({ ...filters, inStockOnly: e.target.checked })}
                    className="accent-[#FFD600] w-4 h-4"
                  />
                </label>
              </div>

            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-9">
            {sortedProducts.length > 0 ? (
              <div className={
                layoutMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-4"
              }>
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    onQuickView={onQuickView}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    onToggleCompare={onToggleCompare}
                    isWishlisted={wishlistIds.includes(product.id)}
                    isCompared={compareIds.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-[#242424] p-12 rounded-3xl border border-white/10 text-center space-y-3">
                <Search className="w-12 h-12 mx-auto text-zinc-500" />
                <h3 className="text-lg font-bold text-white">No Cookware Found</h3>
                <p className="text-xs text-zinc-400">Try broadening your search or resetting active filters.</p>
                <button
                  onClick={resetFilters}
                  className="bg-[#FFD600] text-[#3A3A3A] font-extrabold px-6 py-2.5 rounded-full text-xs shadow-lg hover:bg-yellow-400 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
