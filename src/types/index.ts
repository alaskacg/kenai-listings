export interface User {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  created_at: string;
}

export interface GeneralListing {
  id: string;
  user_id: string;
  title: string;
  description: string;
  price: number;
  
  // Category
  category: 'land' | 'vehicles' | 'rentals' | 'boats' | 'rvs' | 'equipment' | 'services' | 'jobs' | 'other';
  subcategory?: string;
  
  location: string;
  condition?: 'new' | 'like-new' | 'good' | 'fair' | 'poor';
  
  images: string[];
  video_url?: string;
  
  // Custom fields (JSON)
  custom_fields?: Record<string, any>;
  
  status: 'pending' | 'active' | 'sold' | 'expired';
  payment_status: 'unpaid' | 'paid';
  featured: boolean;
  featured_until?: string;
  
  views: number;
  created_at: string;
  updated_at: string;
  expires_at: string;
  
  user?: User;
}

export interface PaymentIntent {
  id: string;
  user_id: string;
  listing_id?: string;
  amount: number;
  type: 'listing' | 'featured';
  stripe_payment_id?: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface Message {
  id: string;
  listing_id: string;
  from_user_id: string;
  to_user_id: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  user_id: string;
  created_at: string;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary_range?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'seasonal';
  user_id: string;
  created_at: string;
}

export interface SearchFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  condition?: string;
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'oldest';
}
