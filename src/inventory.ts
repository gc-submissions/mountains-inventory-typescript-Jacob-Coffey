import { Product } from "./products";

export interface InventoryItem{
    product: Product;
    quantity: number;
};

const inventory: InventoryItem[] = [
    {product: {name: "Motor", price: 10}, quantity:10},
    {product: {name: "sensor", price: 12.5}, quantity:4},
    {product: {name: "LED", price: 1}, quantity:20}
];

export function calcInventoryValue(array: InventoryItem[]): number{
    let total = 0;
    array.forEach((element) => {
        let itemPrice = element.product.price;
        total += itemPrice * element.quantity;
    });
    return total;
};

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);