import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Estudiante } from '../../datasource/estudiante.interface';
import { lestudiantes } from '../../datasource/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: ``
})
export class PersonaComponent {

  constructor(router: Router) {
    const navigation = router.getCurrentNavigation();
    //this.email = navigation?.extras.state?.['emailusuario'];
    this.numero = navigation?.extras.state?.['numero'];
  }

  @Input() email: string = '';
  @Input() numero: number = 0;

  dataEstudiantes: Estudiante[] = lestudiantes;

  funcionExample() {
    this.dataEstudiantes.toString();
  }

  funcionPersona(Estudiante: Estudiante) {
    console.log(Estudiante);
  }

  funcionEliminar(persona: any) {
    alert('Hola');
  }

  guardarPersona(estudiante: Estudiante) {
    if (estudiante.id == 0) {
      estudiante.id = lestudiantes.length + 1;
    }
    lestudiantes.push(estudiante);
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
