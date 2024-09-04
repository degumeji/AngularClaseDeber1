import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../../datasource/estudiante.interface';
import { Representante } from '../../../datasource/representante.interface';
import { Nota } from '../../../datasource/nota.interface';

@Component({
  selector: 'app-modal-nota',
  templateUrl: './modal-nota.component.html',
  styles: ``
})
export class ModalNotaComponent {
  @Input()
  modalid: string = 'modalNota';

  @Input()
  nombreBoton: string = 'Nuevo';

  @Input()
  dataCalificacion: Nota = {
    "id": 0,
    "id_estudiante": 0,
    "nombre_tarea": '',
    "fecha_inicio": '',
    "fecha_fin": '',
    "calificacion": 0,
    "Estado": ''
  };

  @Output() eventoGuardar = new EventEmitter<Nota>();

  guardar() {
    //if (!this.validarGuardar()) {
    this.eventoGuardar.emit(this.dataCalificacion);
    this.cerrarModal();
    //}
  }
  /*
    validarGuardar(): boolean {
      if (this.validarEstaVacio(this.dataEstudiante.celular)) {
        this.mostrarMensajeError("El valor de celular no se ha agregado");
        return true;
      }
      return false;
    }*/

  cerrarModal() {
    let btnCerrar = document.getElementById('btnCerrarModal');
    if (btnCerrar) {
      btnCerrar?.click();
    }
  }

  validarEstaVacio(value: any) {
    return value.lenght == 0 || value === '' || value === undefined || value == null;
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
