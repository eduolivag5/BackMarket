import { z } from 'zod';

/* PRODUCTOS */
export const ProductSchema = z.object({
    id: z.string(),
    created_at: z.string(),
    marca: z.number(),
    modelo: z.string(),
    color: z.array(z.string()),
    almacenamiento: z.array(z.number()),
    fecha_lanzamiento: z.string(),
    images: z.array(z.string())
})
export const ProductsListSchema = z.array(ProductSchema)

export type Product = z.infer<typeof ProductSchema>
export type ProductsList = z.infer<typeof ProductsListSchema>


/* PRECIOS */
export const PriceSchema = z.object({
    id: z.string(),
    id_product: z.string(),
    status: z.number(),
    price: z.number()
})
export const PricesListSchema = z.array(PriceSchema)

export type Price = z.infer<typeof PriceSchema>
export type PricesList = z.infer<typeof PricesListSchema>