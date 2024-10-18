function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {  
    console.log(`Llamada al método: ${propertyName}`);  
}  

class Persona {  
    @Log  
    saludar() {  
        console.log("Hola");  
    }  
}  

const persona = new Persona();  
persona.saludar();