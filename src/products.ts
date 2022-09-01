export interface Product {
    name: string;
    price: number;
};

const products: Product[]= [
    {name: "Ferragamo Loafers", price: 850},
    {name: "Ferragamo belt", price: 450},
    {name: "Gucci Loafers", price: 350},
    {name: "Gucci Belt", price: 250}
];

export function calcAverageProductPrice(array: Product[]): number{
    let sum = 0;
  if(array.length > 0){
    for(const element of array){
        sum += element.price;
      }
      return sum / array.length;
  }
  else{
      return 0;
    }
};

let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
