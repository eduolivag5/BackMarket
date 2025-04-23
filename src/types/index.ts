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
    marca: z.number(),
    modelo: z.string(),
    color: z.array(z.string()),
    almacenamiento: z.array(z.number()),
    fecha_lanzamiento: z.string(),
    images: z.array(z.string()),
    prices: z.array(PriceSchema)
})
export const ProductsListSchema = z.array(ProductSchema)

export type Product = z.infer<typeof ProductSchema>
export type ProductsList = z.infer<typeof ProductsListSchema>


/* REVIEWS */
const { id: productIdSchema, modelo: modeloSchema } = ProductSchema.shape

export const ReviewSchema = z.object({
  id: z.string(),
  stars: z.number(),
  comment: z.string(),
  image: z.string(),
  product_id: productIdSchema,
  modelo: modeloSchema,
  name_user: z.string()
})
export const ReviewsListSchema = z.array(ReviewSchema);

export type Review = z.infer<typeof ReviewSchema>
export type ReviewsList = z.infer<typeof ReviewsListSchema>

/* SELL CONDITIONS */
export interface sellConditionItem {
  icon: React.ElementType
  text: string
}