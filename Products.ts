export class Products {
    productId: number;
    productName: string;
    imageUrl: string;
    description: string;
    price: number;
    quantity: number;
    constructor(productId: number, productName: string, imageUrl: string, description: string, price: number, quantity: number) {
        this.productId = productId;
        this.productName = productName;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.quantity = quantity;

    }
}
