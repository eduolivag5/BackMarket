import { Review } from "../types";
import ReviewItem from "./ReviewItem";
import { Carrusel } from "./Carrusel";

const reviewsList: Review[] = [
    {
        id: "0",
        user: "Judit G.",
        buyDate: new Date("27/09/2024"),
        reviewDate: new Date("08/10/2024"),
        stars: 5,
        comment: "Me llego 1 dia antes de lo esperado! Muy buen embalaje, funda de regalo, escogí el Excelente,y ha llegado impoluto, sin ninguna grieta en pantalla ( al iniciar el movil me ponía que la pantalla había sido cambiada y nueva. La bateria al 100% oficial, nunca he tenido problema con Back Market se lo recomiendo a cualquier persona que no quiera gastarse la barbaridad de la apple nuevo. Muchas gracias backmarket una vez mas por tu gran trabajo.",
        productName: "iphone 13 Pro Max 128GB - Grafito - Libre",
        productId: "",
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://reviews.statics.backmarket.com/review-attachment/0TPgawvOhlOAzo1b7L37uQItxhmoOf4wX7nzR3dHjvEG7GrWIqL6Zb7aop6FW74XtzA6XvMOLQNcNqwL2NksGQkgnctB/original.jpeg"
    },
    {
        id: "1",
        user: "Manel S.",
        buyDate: new Date("30/08/2024"),
        reviewDate: new Date("06/04/2025"),
        stars: 4.7,
        comment: "Compré un iPhone 15 reacondicionado para regalar. El producto sin arañazos, ni desgaste propio del uso, batería al 99%. El pedido llegó dos días antes de lo previsto. Muy contento con la compra.",
        productName: "iphone 15 128GB - Amarillo - Libre",
        productId: "",
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://reviews.statics.backmarket.com/review-attachment/mbhvXKyBYrAPy5MlSbXMdblRTzJ0SQRHNfSnB9gOs3fLaCxETL5VAzZQ0pDr3fbyX086OoV4sL3J8jNLCTrLVuvx1wrZ/original.jpeg"
    },
    {
        id: "2",
        user: "Fernanda L.",
        buyDate: new Date("30/09/2024"),
        reviewDate: new Date("26/03/2025"),
        stars: 4.8,
        comment: "me ha gustado llego bastante rápido el equipo lo pedí excelente y solo llegó un pequeño rasguño, la pantalla llegó con protector de pantalla y funciona muy bn como si lo hubiese comprado nuevo, estoy contenta.",
        productName: "iphone 13 Pro 128GB - Azul alpino - Libre",
        productId: "",
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://reviews.statics.backmarket.com/review-attachment/ZYohY6y9jZg13kyqG2fridHQMzP9dTBXj6WhiuFYLabzTw5SBItYvB00EPLkWBaTEckYhBrnFaXldtO5r413z1URtSXf/original.jpg"
    },
    {
        id: "3",
        user: "Paola M.",
        buyDate: new Date("02/09/2024"),
        reviewDate: new Date("08/04/2025"),
        stars: 5,
        comment: "3er móvil reacondicionado que compro en Back Market y súper contenta. Lo compré en estado “correcto” y ha llegado impecable. Batería 100%, y después de una semana usándolo, confirmo que todo bien😊",
        productName: "iphone 14 Pro 256GB - Morado oscuro - Libre",
        productId: "",
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://reviews.statics.backmarket.com/review-attachment/UnuWAPNWVkijQtj5SPTNaZvndStFfboSS4ejrvqQf6bnDh9N8yspo0n9Wouuqo5uWCaj4HMlMnscKXpwmjDugq1LwuBS/original.jpeg"
    },
    {
        id: "0",
        user: "Judit G.",
        buyDate: new Date("27/09/2024"),
        reviewDate: new Date("08/10/2024"),
        stars: 5,
        comment: "Me llego 1 dia antes de lo esperado! Muy buen embalaje, funda de regalo, escogí el Excelente,y ha llegado impoluto, sin ninguna grieta en pantalla ( al iniciar el movil me ponía que la pantalla había sido cambiada y nueva. La bateria al 100% oficial, nunca he tenido problema con Back Market se lo recomiendo a cualquier persona que no quiera gastarse la barbaridad de la apple nuevo. Muchas gracias backmarket una vez mas por tu gran trabajo.",
        productName: "iphone 13 Pro Max 128GB - Grafito - Libre",
        productId: "",
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://reviews.statics.backmarket.com/review-attachment/0TPgawvOhlOAzo1b7L37uQItxhmoOf4wX7nzR3dHjvEG7GrWIqL6Zb7aop6FW74XtzA6XvMOLQNcNqwL2NksGQkgnctB/original.jpeg"
    },
]

export default function ReviewsList() {
    return (
        <Carrusel title="Reseñas 15 millones"
            itemsToShow={4}
            itemsList={reviewsList}
            ElementToRender={ReviewItem}
        />
    )
}
