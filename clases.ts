class Animal {  
    constructor(public nombre: string, public edad: number) {}  

    hacerSonido(): void {  
        console.log(`${this.nombre} hace un sonido`);  
    }  
}  

const perro = new Animal("Rex", 5);  
perro.hacerSonido();