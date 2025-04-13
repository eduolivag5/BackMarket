import { ProductSchema, ProductsListSchema } from "../types";

export async function getAllProducts() {
    const url = 'http://127.0.0.1:8000/products'

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener los productos");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message || "Error desconocido en la respuesta");
        }

        const result = ProductsListSchema.safeParse(data.data);

        if (!result.success) {
            console.log(result.error)
            throw new Error("Error de validación de los productos");
        }

        return result.data;

    } catch (err) {
        throw new Error("Error al obtener los productos");
    }
}


export async function getProductDetailsById(id: string) {
    const url = `http://127.0.0.1:8000/products?id=${id}`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener los productos");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message || "Error desconocido en la respuesta");
        }

        const result = ProductSchema.safeParse(data.data);

        if (!result.success) {
            console.log(result.error)
            throw new Error("Error de validación de los productos");
        }

        return result.data;

    } catch (err) {
        throw new Error("Error al obtener los productos");
    }
}