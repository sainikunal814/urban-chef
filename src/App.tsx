import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { CategoryGrid } from './components/CategoryGrid';
import { BestSellers } from './components/BestSellers';
import { Interactive360Showcase } from './components/Interactive360Showcase';
import { CookingExperience } from './components/CookingExperience';
import { BrandStorySection } from './components/BrandStorySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { KitchenInspiration } from './components/KitchenInspiration';
import { RecipeBlogSection } from './components/RecipeBlogSection';
import { CustomerReviews } from './components/CustomerReviews';
import { BulkInquiry } from './components/BulkInquiry';
import { FAQSection } from './components/FAQSection';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';

// Modals and Drawers
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CompareModal } from './components/CompareModal';
import { CheckoutModal } from './components/CheckoutModal';
import { EmiCalculatorModal } from './components/EmiCalculatorModal';
import { RecentPurchaseToast } from './components/RecentPurchaseToast';
import { LiveChatWidget } from './components/LiveChatWidget';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PincodeChecker } from './components/PincodeChecker';

// Views and Data
import { ShopView } from './views/ShopView';
import { PRODUCTS } from './data/products';
import { Product, ProductVariant, CartItem, ViewMode } from './types';
import { 
  ShieldCheck, 
  Flame, 
  Star, 
  Truck, 
  RotateCcw, 
  Award, 
  Calculator, 
  CheckCircle2, 
  ShoppingBag, 
  Heart, 
  Scale, 
  Sparkles,
  ChevronRight,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  PackageCheck
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS[0]);
  
  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], selectedVariant: PRODUCTS[0].variants[0], quantity: 1 }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[1].id]);
  const [compareIds, setCompareIds] = useState<string[]>([PRODUCTS[0].id, PRODUCTS[1].id]);

  // Modal Toggles
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isEmiOpen, setIsEmiOpen] = useState<boolean>(false);
  const [selectedVariantForDetail, setSelectedVariantForDetail] = useState<ProductVariant | null>(null);

  // Detail View Active Image
  const [detailImageIdx, setDetailImageIdx] = useState<number>(0);

  // Cart Handlers
  const handleAddToCart = (product: Product, variant?: ProductVariant, qty: number = 1) => {
    const targetVariant = variant || (product.variants.length > 0 ? product.variants[0] : undefined);
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant?.id === targetVariant?.id
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      }
      return [...prev, { product, selectedVariant: targetVariant, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (productId: string, variantId: string | undefined, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((i) => !(i.product.id === productId && i.selectedVariant?.id === variantId)));
    } else {
      setCartItems((prev) =>
        prev.map((i) =>
          i.product.id === productId && i.selectedVariant?.id === variantId
            ? { ...i, quantity: newQty }
            : i
        )
      );
    }
  };

  const handleRemoveCartItem = (productId: string, variantId?: string) => {
    setCartItems((prev) => prev.filter((i) => !(i.product.id === productId && i.selectedVariant?.id === variantId)));
  };

  // Wishlist & Compare Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleToggleCompare = (product: Product) => {
    setCompareIds((prev) => {
      if (prev.includes(product.id)) return prev.filter((id) => id !== product.id);
      if (prev.length >= 3) return [...prev.slice(1), product.id];
      return [...prev, product.id];
    });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariantForDetail(product.variants[0] || null);
    setDetailImageIdx(0);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Total cart item count
  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-[#FFD600] selection:text-[#3A3A3A] relative">
      
      {/* Sticky Top Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        compareCount={compareIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => { setSelectedCategory('all'); setCurrentView('shop'); }}
        onOpenCompare={() => setIsCompareOpen(true)}
        onSelectProduct={handleSelectProduct}
        onSelectCategory={handleSelectCategory}
      />

      {/* VIEW CONTROLLER */}
      <main>
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <>
            <HeroSection
              onShopNow={() => setCurrentView('shop')}
              onExploreCollection={() => handleSelectCategory('all')}
              onSelectProduct={handleSelectProduct}
              heroProduct={PRODUCTS[0]}
            />
            <InfiniteMarquee />
            <CategoryGrid onSelectCategory={handleSelectCategory} />
            <BestSellers
              onSelectProduct={handleSelectProduct}
              onQuickView={(p) => setQuickViewProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              onToggleWishlist={handleToggleWishlist}
              onToggleCompare={handleToggleCompare}
              wishlistIds={wishlistIds}
              compareIds={compareIds}
            />
            <Interactive360Showcase onAddToCart={(p) => handleAddToCart(p)} />
            <CookingExperience />
            <BrandStorySection />
            <WhyChooseUs />
            <KitchenInspiration onSelectCategory={handleSelectCategory} />
            <RecipeBlogSection />
            <CustomerReviews />
            <BulkInquiry />
            <FAQSection />
            <TrustBadges />
          </>
        )}

        {/* VIEW: SHOP CATALOG */}
        {currentView === 'shop' && (
          <ShopView
            initialCategory={selectedCategory}
            onSelectProduct={handleSelectProduct}
            onQuickView={(p) => setQuickViewProduct(p)}
            onAddToCart={(p) => handleAddToCart(p)}
            onToggleWishlist={handleToggleWishlist}
            onToggleCompare={handleToggleCompare}
            wishlistIds={wishlistIds}
            compareIds={compareIds}
          />
        )}

        {/* VIEW: PRODUCT DETAIL */}
        {currentView === 'product-detail' && selectedProduct && (
          <div className="py-12 bg-[#1a1a1a] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
                <button onClick={() => setCurrentView('home')} className="hover:text-white">Home</button>
                <ChevronRight className="w-3 h-3 text-zinc-600" />
                <button onClick={() => setCurrentView('shop')} className="hover:text-white">Cookware</button>
                <ChevronRight className="w-3 h-3 text-zinc-600" />
                <span className="text-[#FFD600] font-bold truncate">{selectedProduct.name}</span>
              </div>

              {/* Detail Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Image Gallery */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="relative aspect-square bg-[#242424] rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-6 flex items-center justify-center">
                    <img 
                      src={selectedProduct.images[detailImageIdx] || selectedProduct.images[0]} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {selectedProduct.discountPercentage > 0 && (
                      <span className="absolute top-4 left-4 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {selectedProduct.discountPercentage}% OFF
                      </span>
                    )}
                  </div>

                  {/* Thumbnails */}
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {selectedProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setDetailImageIdx(idx)}
                        className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-[#242424] ${
                          detailImageIdx === idx ? 'border-[#FFD600] scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column: Specs & Purchase Actions */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Certified 304 Surgical Stainless Steel
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                      {selectedProduct.name}
                    </h1>
                    <p className="text-sm text-zinc-400 mt-1">{selectedProduct.subtitle}</p>

                    {/* Ratings */}
                    <div className="flex items-center gap-2 mt-3 text-xs">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-white">{selectedProduct.rating} / 5</span>
                      <span className="text-zinc-500">({selectedProduct.reviewCount} Verified Buyer Reviews)</span>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="bg-[#242424] p-5 rounded-2xl border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-black text-[#FFD600]">
                          ₹{(selectedVariantForDetail?.price || selectedProduct.price).toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm line-through text-zinc-500">
                          ₹{(selectedVariantForDetail?.originalPrice || selectedProduct.originalPrice).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-400 font-bold mt-1">Inclusive of all taxes & Free Express Shipping</p>
                    </div>

                    <button 
                      onClick={() => setIsEmiOpen(true)}
                      className="flex items-center gap-1.5 text-xs font-bold text-[#FFD600] bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl border border-white/10"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>EMI from ₹199/mo</span>
                    </button>
                  </div>

                  {/* Capacity / Size Variants */}
                  {selectedProduct.variants.length > 0 && (
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                        Select Capacity / Size:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.variants.map((v) => {
                          const isSelected = selectedVariantForDetail?.id === v.id;
                          return (
                            <button
                              key={v.id}
                              onClick={() => setSelectedVariantForDetail(v)}
                              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                                isSelected 
                                  ? 'bg-[#FFD600] text-[#3A3A3A] border-[#FFD600] shadow-md' 
                                  : 'bg-[#242424] text-zinc-300 border-white/10 hover:border-white/30'
                              }`}
                            >
                              {v.capacityOrSize}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => handleAddToCart(selectedProduct, selectedVariantForDetail || undefined)}
                      className="flex-1 bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-black py-4 rounded-2xl text-sm transition-all shadow-xl shadow-yellow-500/20 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-5 h-5 text-[#3A3A3A]" />
                      <span>Add To Cart</span>
                    </button>

                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct, selectedVariantForDetail || undefined);
                        setIsCheckoutOpen(true);
                      }}
                      className="flex-1 bg-white hover:bg-zinc-100 text-black font-black py-4 rounded-2xl text-sm transition-all shadow-xl active:scale-95 text-center"
                    >
                      Buy Now Express
                    </button>
                  </div>

                  {/* Pincode Serviceability Checker */}
                  <PincodeChecker />

                  {/* Product Specifications Table */}
                  <div className="bg-[#242424] p-5 rounded-2xl border border-white/10 space-y-3">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {selectedProduct.specifications.map((s, idx) => (
                        <div key={idx} className="p-2 bg-white/5 rounded-lg">
                          <span className="text-zinc-400 block text-[10px] uppercase font-bold">{s.label}</span>
                          <span className="text-white font-medium">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* VIEW: ABOUT BRAND */}
        {currentView === 'about' && (
          <div className="bg-[#1a1a1a] text-white py-12">
            <BrandStorySection />
            <WhyChooseUs />
          </div>
        )}

        {/* VIEW: CONTACT */}
        {currentView === 'contact' && (
          <div className="py-16 bg-[#1a1a1a] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 text-left">
              <h1 className="text-4xl font-black text-white mb-2">Contact URBAN CHEF</h1>
              <p className="text-zinc-400 text-sm mb-8">We are here to assist with product inquiries, warranty claims, and corporate orders.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#242424] p-6 rounded-3xl border border-white/10 space-y-6">
                  <h3 className="text-lg font-bold text-[#FFD600]">Direct Support Line</h3>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-5 h-5 text-[#FFD600]" />
                    <div>
                      <div className="font-bold">Toll Free Support</div>
                      <div className="text-zinc-400">1800-200-8722 (Mon-Sat 9am-7pm)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-[#FFD600]" />
                    <div>
                      <div className="font-bold">Official Email</div>
                      <div className="text-zinc-400">support@urbanchef.in</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-[#FFD600]" />
                    <div>
                      <div className="font-bold">Factory Headquarters</div>
                      <div className="text-zinc-400">Urban Chef Steel Works, Industrial Area Phase II, New Delhi, India</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#242424] p-6 rounded-3xl border border-white/10 space-y-4">
                  <h3 className="text-lg font-bold text-white">Send Us A Message</h3>
                  <input type="text" placeholder="Your Name" className="w-full bg-zinc-900 border border-white/10 p-3 rounded-xl text-xs text-white" />
                  <input type="email" placeholder="Email Address" className="w-full bg-zinc-900 border border-white/10 p-3 rounded-xl text-xs text-white" />
                  <textarea placeholder="Your Inquiry" rows={4} className="w-full bg-zinc-900 border border-white/10 p-3 rounded-xl text-xs text-white" />
                  <button className="w-full bg-[#FFD600] text-[#3A3A3A] font-black py-3 rounded-xl text-xs shadow-lg">Submit Message</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: RECIPES */}
        {currentView === 'recipes' && (
          <RecipeBlogSection />
        )}

        {/* VIEW: TRACK ORDER */}
        {currentView === 'track-order' && (
          <div className="py-20 bg-[#1a1a1a] min-h-screen text-center">
            <div className="max-w-md mx-auto bg-[#242424] p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              <PackageCheck className="w-12 h-12 text-[#FFD600] mx-auto" />
              <h2 className="text-2xl font-black text-white">Track Your Order</h2>
              <p className="text-xs text-zinc-400">Enter your 9-digit Order ID or Mobile Number to get real-time tracking from Blue Dart / Delhivery.</p>
              
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="e.g. UC-982143" 
                  className="w-full p-3 bg-zinc-900 border border-white/10 rounded-xl text-xs text-white text-center font-mono focus:ring-1 focus:ring-[#FFD600]"
                />
                <button className="w-full bg-[#FFD600] text-[#3A3A3A] font-black py-3 rounded-xl text-xs shadow-lg">
                  Track Live Shipment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: BULK ORDERS */}
        {currentView === 'bulk-orders' && (
          <BulkInquiry />
        )}
      </main>

      {/* FOOTER */}
      <Footer onSelectCategory={handleSelectCategory} setCurrentView={setCurrentView} />

      {/* OVERLAYS & MODALS */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onSelectProduct={handleSelectProduct}
      />

      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        comparedProducts={PRODUCTS.filter((p) => compareIds.includes(p.id))}
        onRemoveFromCompare={(id) => setCompareIds((prev) => prev.filter((i) => i !== id))}
        onAddToCart={handleAddToCart}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalAmount={cartItems.reduce((acc, i) => acc + (i.selectedVariant?.price || i.product.price) * i.quantity, 0)}
        onClearCart={() => setCartItems([])}
      />

      <EmiCalculatorModal
        isOpen={isEmiOpen}
        onClose={() => setIsEmiOpen(false)}
        productPrice={selectedProduct?.price || 2499}
      />

      {/* Real-time Purchase Toasts & Live Chat Floating Widget */}
      <RecentPurchaseToast />
      <LiveChatWidget />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

    </div>
  );
}
