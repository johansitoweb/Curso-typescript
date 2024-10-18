// archivo saludo.ts  
export function saludar(nombre: string): string {  
    return `Hola, ${nombre}!`;  
}  

// archivo main.ts  
import { saludar } from './saludo';  

console.log(saludar('Mundo'));