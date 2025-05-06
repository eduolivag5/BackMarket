import { BrandsListSchema, CategoriesListSchema, Category, CategorySchema, ProductSchema, ProductsListSchema, ReviewsListSchema, StatusListSchema } from "../types";

const API_ENDPOINT = 'https://backmarket-api.onrender.com'

export async function getAllProducts() {
    const url = `${API_ENDPOINT}/products`

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

        return result.data.filter(product => product.prices.length > 0);

    } catch (err) {
        throw new Error("Error al obtener los productos");
    }
}

export async function getProductDetailsById(id?: string) {
    const url = `${API_ENDPOINT}/products?id=${id}`

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

export async function getProductsFiltered(category?: string, tags?: string) {
    const params = new URLSearchParams();

    if (category) params.append("category", category);
    if (tags) params.append("tags", tags); // Ej: "iphone,movil"

    const url = `${API_ENDPOINT}/products?${params.toString()}`;

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
            console.log(result.error);
            throw new Error("Error de validación de los productos");
        }

        return result.data.filter(product => product.prices.length > 0);

    } catch (err) {
        throw new Error("Error al obtener los productos");
    }
}

export async function getAllReviews() {
    const url = `${API_ENDPOINT}/reviews`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener las reviews.");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message || "Error desconocido en la respuesta");
        }

        const result = ReviewsListSchema.safeParse(data.data);

        if (!result.success) {
            console.log(result.error)
            throw new Error("Error de validación de las reviews.");
        }

        return result.data;

    } catch (err) {
        throw new Error("Error al obtener las reviews.");
    }
}

export async function getAllCategories() {
    const url = `${API_ENDPOINT}/categories`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener las categorias.");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message || "Error desconocido en la respuesta");
        }

        const result = CategoriesListSchema.safeParse(data.data);

        if (!result.success) {
            console.log(result.error)
            throw new Error("Error de validación de las categorias.");
        }

        return result.data;

    } catch (err) {
        throw new Error("Error al obtener las reviews.");
    }
}

export async function getCategoryInfo(id?: string) {
    const url = `${API_ENDPOINT}/categories?id=${id}`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener las categorias.");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message || "Error desconocido en la respuesta");
        }

        const result = CategorySchema.safeParse(data.data);

        if (!result.success) {
            console.log(result.error)
            throw new Error("Error de validación de las categorias.");
        }

        return result.data;

    } catch (err) {
        throw new Error("Error al obtener las reviews.");
    }
}

export async function getBrandsByCategory(id_category?: Category["id"]) {
    const url = `${API_ENDPOINT}/brands?category=${id_category}`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener las marcas.");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message || "Error desconocido en la respuesta");
        }

        const result = BrandsListSchema.safeParse(data.data);

        if (!result.success) {
            console.log(result.error)
            throw new Error("Error de validación de las marcas.");
        }

        return result.data;

    } catch (err) {
        throw new Error("Error al obtener las marcas.");
    }
}

export async function getAllSalesStatus() {
    const url = `${API_ENDPOINT}/phone_status`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener los estados de venta.");
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.message || "Error desconocido en la respuesta");
        }

        const result = StatusListSchema.safeParse(data.data);

        if (!result.success) {
            console.log(result.error)
            throw new Error("Error de validación de los estados de venta.");
        }

        return result.data;

    } catch (err) {
        throw new Error("Error al obtener los estados de venta.");
    }
}