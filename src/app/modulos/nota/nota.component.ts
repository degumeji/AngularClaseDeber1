import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Nota } from '../../datasource/nota.interface';
import { lcalificaciones, lestudiantes } from '../../datasource/data';
import { Router } from '@angular/router';
import { NotaEstudiante } from '../../datasource/notaEstudiante.interface';
import { Estudiante } from '../../datasource/estudiante.interface';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styles: ``
})
export class NotaComponent {

  constructor(router: Router) {
    const navigation = router.getCurrentNavigation();
    this.numero = navigation?.extras.state?.['numero'];
  }

  @Input() numero: number = 0;

  dataCalificaciones: any[] = this.retornaNombres(lcalificaciones);

  funcionExample() {
    this.dataCalificaciones.toString();
  }

  retornaNombres(Notas: Nota[]) {
    let calificaciones: Nota[] = [];

    for (let i = 0; i < Notas.length; i++) {
      let objCalificacion: Nota;
      objCalificacion = Notas[i];
      objCalificacion.nombre_estudiante = lestudiantes.find(p => p.id === objCalificacion.id_estudiante)?.nombres
        + " "
        + lestudiantes.find(p => p.id === objCalificacion.id_estudiante)?.apellidos;
      calificaciones.push(objCalificacion);
    }

    return calificaciones;
  }

  imprimir() {
    let lstNotas: NotaEstudiante[] = [];

    console.log(lcalificaciones);

    for (let i = 0; i < lcalificaciones.length; i++) {
      let objNota: NotaEstudiante = {
        "id": 0,
        "estudiante": null,
        "nombre_tarea": '',
        "fecha_inicio": '',
        "fecha_fin": '',
        "calificacion": 0
      };

      objNota.id = lcalificaciones[i].id;
      objNota.estudiante = lestudiantes.find(e => e.id === lcalificaciones[i].id_estudiante);
      objNota.nombre_tarea = lcalificaciones[i].nombre_tarea;
      objNota.fecha_inicio = lcalificaciones[i].fecha_inicio;
      objNota.fecha_fin = lcalificaciones[i].fecha_fin;
      objNota.calificacion = lcalificaciones[i].calificacion;

      lstNotas.push(objNota);
    }

    console.log(JSON.stringify(lstNotas));
  }

  guardarNota(nota: Nota) {
    console.log(nota);
    if (nota.id == 0) {
      nota.id = lcalificaciones.length + 1;
    }
    lcalificaciones.push(nota);
    this.dataCalificaciones.push(nota);
  }

  mostrarMensajeError(message: string) {
    this.mostrarMensajeBase(message, 'danger');
  }

  mostrarMensajeExito(message: string) {
    this.mostrarMensajeBase(message, 'success');
  }

  mostrarMensajeAlerta(message: string) {
    this.mostrarMensajeBase(message, 'warn');
  }

  mostrarMensajeBase(message: string, type: string) {
    const alertPlaceholder = document.getElementById('divMensaje')
    const appendAlert = () => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')

      alertPlaceholder?.appendChild(wrapper)
    }
    appendAlert()
  }

}
