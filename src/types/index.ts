import React from 'react';
import { z } from 'zod';

/* PRECIOS */
export const PriceSchema = z.object({
    status: z.string(),
    price: z.number()
})
export const PricesListSchema = z.array(PriceSchema)

export type Price = z.infer<typeof PriceSchema>
export type PricesList = z.infer<typeof PricesListSchema>


/* PRODUCTOS */
export const ProductSchema = z.object({
    id: z.string(),
    created_at: z.string(),
    brand: z.number(),
    name_short: z.string(),
    name: z.string(),
    colors: z.array(z.string()),
    storages: z.array(z.number()),
    images: z.array(z.string()),
    prices: z.array(PriceSchema)
})
export const ProductsListSchema = z.array(ProductSchema)

export type Product = z.infer<typeof ProductSchema>
export type ProductsList = z.infer<typeof ProductsListSchema>


/* REVIEWS */
const { id: productIdSchema, name: modeloSchema } = ProductSchema.shape

export const ReviewSchema = z.object({
  id: z.string(),
  stars: z.number(),
  comment: z.string(),
  image: z.string(),
  product_id: productIdSchema,
  model: modeloSchema,
  name_user: z.string()
})
export const ReviewsListSchema = z.array(ReviewSchema);

export type Review = z.infer<typeof ReviewSchema>
export type ReviewsList = z.infer<typeof ReviewsListSchema>

/* CATEGORIES */
export const CategorySchema = z.object({
  id: z.number(),
  name: z.string()
})
export const CategoriesListSchema = z.array(CategorySchema);

export type Category = z.infer<typeof CategorySchema>
export type CategoriesList = z.infer<typeof CategoriesListSchema>


/* MARCAS */
export const BrandSchema = z.object({
  id: z.number(),
  marca: z.string(),
  img_header: z.string()
})
export const BrandsListSchema = z.array(BrandSchema);

export type Brand = z.infer<typeof BrandSchema>
export type BrandsList = z.infer<typeof BrandsListSchema>


/* STATUS */
export const StatusSchema = z.object({
  id: z.number(),
  estado: z.string(),
  description: z.string().nullable(),
  screen_tags: z.array(z.string()),
  case_tags: z.array(z.string()),
  order: z.number()
})
export const StatusListSchema = z.array(StatusSchema)

export type Status = z.infer<typeof StatusSchema>
export type StatusList = z.infer<typeof StatusListSchema>


/* SELL CONDITIONS */
export interface sellConditionItem {
  icon: React.ElementType
  text: string
}

/* FAQ */
export interface faqItem {
  question: string
  answer: string
}