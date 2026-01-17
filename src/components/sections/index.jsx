// Section Component Registry
// This file exports all reusable section components for JSON-driven pages

export { default as HeroSection } from './HeroSection'
export { default as LogoBar } from './LogoBar'
export { default as FeatureSection } from './FeatureSection'
export { default as FeatureGrid } from './FeatureGrid'
export { default as TestimonialSection } from './TestimonialSection'
export { default as ResourcesSection } from './ResourcesSection'
export { default as CTASection } from './CTASection'
export { default as PricingSection } from './PricingSection'
export { default as FAQSection } from './FAQSection'
export { default as ComparisonSection } from './ComparisonSection'

// Component registry for dynamic rendering
import HeroSection from './HeroSection'
import LogoBar from './LogoBar'
import FeatureSection from './FeatureSection'
import FeatureGrid from './FeatureGrid'
import TestimonialSection from './TestimonialSection'
import ResourcesSection from './ResourcesSection'
import CTASection from './CTASection'
import PricingSection from './PricingSection'
import FAQSection from './FAQSection'
import ComparisonSection from './ComparisonSection'

export const sectionRegistry = {
  hero: HeroSection,
  logoBar: LogoBar,
  feature: FeatureSection,
  featureGrid: FeatureGrid,
  testimonial: TestimonialSection,
  resources: ResourcesSection,
  cta: CTASection,
  pricing: PricingSection,
  faq: FAQSection,
  comparison: ComparisonSection,
}
