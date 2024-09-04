import { Representante } from "./representante.interface";

export interface Estudiante {
    id: number;
    identificacion: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    curso: string;
    representante: any;
}