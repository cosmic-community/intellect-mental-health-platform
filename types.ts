// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Component prop interfaces
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  metadata?: {
    feature_name?: string;
    description?: string;
    icon?: {
      imgix_url: string;
    };
    benefit?: string;
  };
}

export interface Integration {
  id: string;
  title: string;
  name: string;
  description?: string;
  logo?: string;
  category?: string;
  metadata?: {
    integration_name?: string;
    description?: string;
    logo?: {
      imgix_url: string;
    };
    category?: {
      value: string;
    };
  };
}

export interface PricingPlan {
  id: string;
  title: string;
  name: string;
  price?: string;
  period?: string;
  description?: string;
  features?: string[];
  popular?: boolean;
  ctaText?: string;
  metadata?: {
    plan_name?: string;
    price?: string;
    billing_period?: string;
    description?: string;
    features?: string[];
    is_popular?: boolean;
    cta_text?: string;
  };
}

// Specific object types with realistic metadata interfaces
export interface Statistic extends CosmicObject {
  type_slug: 'statistics';
  metadata: {
    statistic_value?: string;
    statistic_description?: string;
    icon?: string;
    display_order?: number;
  };
}

export interface Article extends CosmicObject {
  type_slug: 'articles';
  metadata: {
    article_title?: string;
    content?: string;
    excerpt?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Page;
    category?: {
      key: string;
      value: string;
    };
  };
}

export interface TeamMember extends CosmicObject {
  type_slug: 'team-members';
  metadata: {
    full_name?: string;
    job_title?: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
  };
}

export interface HomepageSection extends CosmicObject {
  type_slug: 'homepage-sections';
  metadata: {
    section_name?: string;
    section_type?: {
      key: string;
      value: string;
    };
    headline?: string;
    subheadline?: string;
    content?: string;
    cta_text?: string;
    cta_link?: string;
    background_image?: {
      url: string;
      imgix_url: string;
    };
    display_order?: number;
  };
}

export interface CaseStudy extends CosmicObject {
  type_slug: 'case-studies';
  metadata: {
    client_name?: string;
    testimonial_quote?: string;
    client_title?: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    results_achieved?: string;
  };
}

export interface Page extends CosmicObject {
  type_slug: 'pages';
  metadata: {
    page_title?: string;
    page_content?: string;
    meta_description?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Solution extends CosmicObject {
  type_slug: 'solutions';
  metadata: {
    solution_name?: string;
    short_description?: string;
    full_description?: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
    category?: {
      key: string;
      value: string;
    };
  };
}

export interface Client extends CosmicObject {
  type_slug: 'clients';
  metadata: {
    company_name?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    website_url?: string;
  };
}

export interface FAQItem extends CosmicObject {
  type_slug: 'faq-items';
  metadata: {
    question?: string;
    answer?: string;
    category?: {
      key: string;
      value: string;
    };
  };
}

// Type literals for select-dropdown values
export type ArticleCategory = 'mental-health' | 'workplace-wellness' | 'research' | 'company-news';
export type SectionType = 'hero' | 'features' | 'stats' | 'testimonials' | 'cta';
export type SolutionCategory = 'businesses' | 'trust-safety' | 'healthcare';
export type FAQCategory = 'general' | 'pricing' | 'technical' | 'account';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards for runtime validation
export function isStatistic(obj: CosmicObject): obj is Statistic {
  return obj.type_slug === 'statistics';
}

export function isArticle(obj: CosmicObject): obj is Article {
  return obj.type_slug === 'articles';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type_slug === 'case-studies';
}

export function isHomepageSection(obj: CosmicObject): obj is HomepageSection {
  return obj.type_slug === 'homepage-sections';
}

// Error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}