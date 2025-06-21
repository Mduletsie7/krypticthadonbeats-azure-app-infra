import React, { memo, useMemo, useCallback, useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';

// Custom hook for pricing data management
const usePricingData = () => {
  return useMemo(() => ({
    plans: [
      {
        id: 'standard',
        name: "Standard",
        description: "Untagged High Quality MP3 File",
        price: 30,
        originalPrice: null,
        features: [
          { text: "5,000 sales", highlight: false },
          { text: "100,000 Audio Streams", highlight: false },
          { text: "Upload to SoundCloud, Spotify, Apple Music, etc", highlight: false },
          { text: "Use it for albums, performances, music videos and radio", highlight: false },
          { text: "Kryptic Tha Don maintains full ownership of the instrumental", highlight: false }
        ],
        popular: false
      },
      {
        id: 'premium',
        name: "Premium",
        description: "Untagged MP3 + WAV File",
        price: 50,
        originalPrice: 60,
        features: [
          { text: "10,000 sales", highlight: true },
          { text: "200,000 streams", highlight: true },
          { text: "Upload to SoundCloud, Spotify, Apple Music, etc", highlight: false },
          { text: "Use it for albums, performances, music videos and radio", highlight: false },
          { text: "Kryptic Tha Don maintains full ownership of the instrumental", highlight: false }
        ],
        popular: true
      },
      {
        id: 'unlimited',
        name: "Unlimited",
        description: "MP3 + WAV + Trackouts",
        price: 100,
        originalPrice: null,
        features: [
          { text: "Unlimited sales & Unlimited streams", highlight: true },
          { text: "Includes Trackout stem files", highlight: true },
          { text: "Upload to SoundCloud, Spotify, Apple Music, etc", highlight: false },
          { text: "Use it for albums, performances, music videos and radio", highlight: false },
          { text: "Kryptic Tha Don maintains full ownership of the instrumental", highlight: false }
        ],
        popular: false
      }
    ],
    commonFeatures: [
      "Commercial usage rights included",
      "Instant download after purchase",
      "Professional mixing and mastering",
      "24/7 customer support"
    ]
  }), []);
};

// Memoized feature list component
const FeatureList = memo(({ features }) => (
  <ul className="list-none p-0 m-0 flex-grow-1">
    {features.map((feature, index) => (
      <li key={index} className="flex align-items-start mb-3">
        <i 
          className="pi pi-check-circle text-blue-600 mr-3 mt-1 flex-shrink-0" 
          aria-hidden="true"
        />
        <span className={`text-800 text-sm leading-relaxed ${feature.highlight ? 'font-semibold' : 'font-medium'}`}>
          {feature.text}
        </span>
      </li>
    ))}
  </ul>
));

FeatureList.displayName = 'FeatureList';

// Memoized price display component
const PriceDisplay = memo(({ price, originalPrice }) => (
  <div className="flex align-items-center gap-3 mb-4">
    <span className="font-bold text-3xl text-900">${price}</span>
    {originalPrice && (
      <span className="text-500 line-through text-xl">${originalPrice}</span>
    )}
  </div>
));

PriceDisplay.displayName = 'PriceDisplay';

// Memoized pricing card component with enhanced features
const PricingCard = memo(({ plan, onPlanSelect, isSelected }) => {
  const cardClasses = useMemo(() => {
    const baseClasses = "shadow-2 p-3 h-full flex flex-column surface-card transition-all duration-300";
    const popularClasses = plan.popular ? "border-2 transform scale-105" : "";
    const selectedClasses = isSelected ? "ring-2 ring-blue-400" : "";
    
    return `${baseClasses} ${popularClasses} ${selectedClasses}`.trim();
  }, [plan.popular, isSelected]);

  const handleCardClick = useCallback(() => {
    onPlanSelect?.(plan.id);
  }, [plan.id, onPlanSelect]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  }, [handleCardClick]);

  return (
    <div className="col-12 lg:col-4">
      <div className="p-3 h-full">
        <div 
          className={cardClasses}
          style={{ 
            borderRadius: "6px", 
            cursor: "pointer",
            borderColor: plan.popular ? "burlywood" : undefined
          }}
          onClick={handleCardClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label={`Select ${plan.name} plan for ${plan.price}`}
        >
          {plan.popular && (
            <div 
              className="text-white text-center py-1 px-2 text-sm font-semibold mb-2" 
              style={{ 
                borderRadius: "4px", 
                marginTop: "-8px",
                backgroundColor: "burlywood"
              }}
              role="banner"
            >
              ⭐ Most Popular
            </div>
          )}
          
          <header>
            <h3 className="text-900 font-bold text-xl mb-3">{plan.name}</h3>
            <p className="text-700 text-sm mb-4">{plan.description}</p>
          </header>
          
          <PriceDisplay price={plan.price} originalPrice={plan.originalPrice} />
          
          <hr className="my-4 mx-0 border-top-1 border-none surface-border" />
          
          <FeatureList features={plan.features} />
        </div>
      </div>
    </div>
  );
});

PricingCard.displayName = 'PricingCard';

// Main pricing table component with enhanced functionality
export const PricingTable = memo(() => {
  const { plans } = usePricingData();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = useCallback((planId) => {
    setSelectedPlan(planId);
    // Here you could trigger analytics, show modals, etc.
    console.log(`Selected plan: ${planId}`);
  }, []);

  // Memoize the cards to prevent unnecessary re-renders
  const pricingCards = useMemo(() => 
    plans.map((plan) => (
      <PricingCard 
        key={plan.id}
        plan={plan} 
        onPlanSelect={handlePlanSelect}
        isSelected={selectedPlan === plan.id}
      />
    )), 
    [plans, handlePlanSelect, selectedPlan]
  );

  return (
    <PrimeReactProvider>
      <div className="surface-ground px-4 pt-2 pb-4 md:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="text-900 font-bold text-6xl mb-4">
            Licensing Info
          </h1>
          <p className="text-600 text-lg max-w-2xl mx-auto mb-6">
            Choose the license that best fits your needs. All licenses include commercial usage rights.
          </p>
        </header>
        
        <div className="grid" role="list" aria-label="Pricing plans">
          {pricingCards}
        </div>
        
        <footer className="text-center mt-8">
          <p className="text-600 text-sm mb-2">
            All prices are in USD. Licenses are delivered instantly after purchase.
          </p>
          <p className="text-500 text-xs">
            Need a custom license? <a href="mailto:krypticthadonbeats@gmail.com" className="text-blue-500 hover:text-blue-700">Contact us</a>
          </p>
        </footer>
      </div>
    </PrimeReactProvider>
  );
});

PricingTable.displayName = 'PricingTable';