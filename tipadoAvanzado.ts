type Union = string | number;  
type Intersection = { id: number } & { nombre: string };  

const ejemplo: Intersection = { id: 1, nombre: "Juan" };