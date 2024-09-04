import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Nota } from '../../datasource/nota.interface';
import { lcalificaciones } from '../../datasource/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styles: ``
})
export class NotaComponent {

  constructor(router: Router) {
    const navigation = router.getCurrentNavigation();
    //this.email = navigation?.extras.state?.['emailusuario'];
    this.numero = navigation?.extras.state?.['numero'];
  }

  @Input() email: string = '';
  @Input() numero: number = 0;

  dataCalificaciones: Nota[] = lcalificaciones;

  funcionExample() {
    this.dataCalificaciones.toString();
  }

  funcionPersona(nota: Nota) {
    console.log(nota);
  }

  funcionEliminar(persona: any) {
    alert('Hola');
  }

  guardarNota(nota: Nota) {
    if (nota.id == 0) {
      nota.id = lcalificaciones.length + 1;
    }
    lcalificaciones.push(nota);
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
