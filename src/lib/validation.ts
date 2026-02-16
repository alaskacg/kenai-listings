import { z } from 'zod';

// Listing validation schema
export const listingSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be less than 100 characters'),
  description: z
    .string()
    .trim()
    .min(20, 'Description must be at least 20 characters')
    .max(2000, 'Description must be less than 2000 characters'),
  price: z
    .number()
    .min(0, 'Price cannot be negative')
    .max(100000000, 'Price seems unrealistic'),
  category: z
    .string()
    .min(1, 'Category is required'),
  region: z
    .string()
    .min(1, 'Region is required'),
  contactName: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  contactEmail: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  contactPhone: z
    .string()
    .trim()
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-().+]+$/.test(val),
      'Please enter a valid phone number'
    ),
});

export type ListingFormData = z.infer<typeof listingSchema>;

export interface ValidationSuccess {
  success: true;
  data: ListingFormData;
}

export interface ValidationError {
  success: false;
  errors: string[];
}

export type ValidationResult = ValidationSuccess | ValidationError;

// Validate listing data and return errors
export function validateListing(data: {
  title: string;
  description: string;
  price: string;
  category: string;
  region: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}): ValidationResult {
  const result = listingSchema.safeParse({
    title: data.title,
    description: data.description,
    price: parseFloat(data.price) || 0,
    category: data.category,
    region: data.region,
    contactName: data.contactName,
    contactEmail: data.contactEmail,
    contactPhone: data.contactPhone || undefined,
  });

  if (!result.success) {
    const errors = result.error.issues?.map((e) => e.message) || [result.error.message];
    return { success: false, errors } as ValidationError;
  }

  return { success: true, data: result.data } as ValidationSuccess;
}

// Sanitize string for safe display (prevents potential XSS)
export function sanitizeForDisplay(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}