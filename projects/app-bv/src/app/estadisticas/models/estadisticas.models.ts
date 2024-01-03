export class Estadistica{ 
    _id?: string; 
    libro: string; 
    puntuacion: string 

    constructor(libro: string, puntuacion: string){ 
        this.libro = libro; 
        this.puntuacion = puntuacion; 
    }
}
