export class Catalogo{ 
    _id?: string; 
    categoria: string; 
    descripcion: string 

    constructor(categoria: string, descripcion: string){ 
        this.categoria = categoria; 
        this.descripcion = descripcion; 
    }
}
