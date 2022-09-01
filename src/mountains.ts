export interface Mountain {
    name: string;
    height: number;
};

const mountains: Mountain[]= [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];

export function findNameOfTallestMountain(array: Mountain[]): string{
    let tallest = array[0];
  
    array.forEach((element) => {
      if (element.height > tallest.height){
        tallest = element;
      }
    });
    return tallest.name;
};

let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

