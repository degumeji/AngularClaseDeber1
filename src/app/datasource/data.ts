export const lestudiantes = [
    {
        "id": 1,
        "identificacion": "9999999999",
        "nombres": "Carlos",
        "apellidos": "Gomez Perez",
        "fecha_nacimiento": "1985-02-14",
        "curso": "Matematicas",
        "representantes": [
            {
                "id": 1,
                "nombres": "Luis",
                "apellidos": "Gomez",
                "relacion": "Padre",
                "telefono": "9999999999",
                "email": null,
            },
        ]
    },
    {
        "id": 2,
        "identificacion": "9999999999",
        "nombres": "Maria",
        "apellidos": "Lopez Sanchez",
        "fecha_nacimiento": "1990-06-22",
        "curso": "Matematicas",
        "representantes": [
            {
                "id": 1,
                "nombres": "Juana",
                "apellidos": "Sanchez",
                "relacion": "Madre",
                "telefono": "9999999999",
                "email": "jauana@mail.com",
            },
        ]
    },
    {
        "id": 3,
        "identificacion": "9999999999",
        "nombres": "Luis",
        "apellidos": "Fernandez Torres",
        "fecha_nacimiento": "1978-11-03",
        "curso": "Literatura",
        "representantes": null
    },
];

/*
export const lrepresentantes = [
    {
        "id": 1,
        "nombres": "Luis",
        "apellidos": "Gomez",
        "relacion": "Padre",
        "telefono": "9999999999",
        "email": null,
    },
    {
        "id": 2,
        "nombres": "Juana",
        "apellidos": "Sanchez",
        "relacion": "Madre",
        "telefono": "9999999999",
        "email": "jauana@mail.com",
    },
    {
        "id": 3,
        "nombres": "Pedro",
        "apellidos": "Fernandez",
        "relacion": "Tio",
        "telefono": "9999999999",
        "email": "pfernandez@mail.com",
    },
];
*/

export const lcalificaciones = [
    {
        "id": 1,
        "id_estudiante": 1,
        "nombre_tarea": "Realizar suma de las tablas",
        "fecha_inicio": "2024-09-01",
        "fecha_fin": "2024-09-04",
        "calificacion": 7,
        "Estado": "Aprobado"
    }
];