export interface Nota {
    id: number;
    id_estudiante: number;
    nombre_estudiante?: string;
    nombre_tarea: string;
    fecha_inicio: string;
    fecha_fin: string;
    calificacion: number;    
}