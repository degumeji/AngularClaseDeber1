import { Estudiante } from "./estudiante.interface";

export interface NotaEstudiante {
    id: number;
    estudiante?: any;    
    nombre_tarea: string;
    fecha_inicio: string;
    fecha_fin: string;
    calificacion: number;    
}