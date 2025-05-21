import { Products } from "./Products";

export class Cart extends Products {
    quantitySelected: number;
    constructor(productId: number, productName: string, imageUrl: string, description: string, price: number, quantity: number, quantitySelected: number) {
        super(productId, productName, imageUrl, description, price, quantity);
        this.quantitySelected = quantitySelected;


    }
}