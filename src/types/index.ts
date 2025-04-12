import { z } from 'zod';

/* PRODUCTOS */
export const ProductSchema = z.object({
    id: z.string(),
    created_at: z.string(),
    marca: z.number(),
    modelo: z.string(),
    color: z.number(),
    almacenamiento: z.number(),
    fecha_lanzamiento: z.string(),
    image_urls: z.array(z.string())
})
export const ProductsListSchema = z.array(ProductSchema)

export type Product = z.infer<typeof ProductSchema>
export type ProductsList = z.infer<typeof ProductsListSchema>


/* PRECIOS */
export const PriceSchema = z.object({
    id: z.string(),
    id_product: z.string(),
    status: z.number(),
    battery: z.number(),
    price: z.number()
})
export const PricesListSchema = z.array(PriceSchema)

export type Price = z.infer<typeof PriceSchema>
export type PricesList = z.infer<typeof PricesListSchema>


/* MARCAS */
export const BrandSchema = z.object({
    id: z.number(),
    marca: z.string()
})
export const BrandsListSchema = z.array(BrandSchema)

export type Brand = z.infer<typeof BrandSchema>
export type BrandsListSchema = z.infer<typeof BrandsListSchema>


/* ESTADOS DE VENTA */
export const PhoneStatusSchema = z.object({
    id: z.number(),
    estado: z.string(),
    decripcion: z.string()
})
export const PhoneStatusListSchema = z.array(PhoneStatusSchema)

export type PhoneStatus = z.infer<typeof PhoneStatusSchema>
export type PhoneStatusList = z.infer<typeof PhoneStatusListSchema>


/* COLORES */
export const ColorSchema = z.object({
    id: z.number(),
    color: z.string()
})
export const ColorsListSchema = z.array(ColorSchema)

export type Color = z.infer<typeof ColorSchema>
export type ColorsList = z.infer<typeof ColorsListSchema>


/* ESTADOS DE BATERÍA */
export const BatteryStatusSchema = z.object({
    id: z.number(),
    estado: z.string(),
    descripcion: z.string()
})
export const BatteryStatusListSchema = z.array(BatteryStatusSchema)

export type BatteryStatus = z.infer<typeof BatteryStatusSchema>
export type BatteryStatusList = z.infer<typeof BatteryStatusListSchema>