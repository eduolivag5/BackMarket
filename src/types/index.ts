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
export type Review = {
    id: string;
    user: string;
    buyDate: Date;
    reviewDate: Date;
    stars: number;
    comment: string;
    productName: string;
    productId: string;
    imageSrc: string;
}