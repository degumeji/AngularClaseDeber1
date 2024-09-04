import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../../datasource/estudiante.interface';
import { Representante } from '../../../datasource/representante.interface';

@Component({
  selector: 'app-modal-representante',
  templateUrl: './modal-representante.component.html',
  styles: ``
})
export class ModalRepresentanteComponent {
  @Input()
  modalid: string = 'modalRepresentante';

  @Input()
  nombreBoton: string = 'Nuevo';

  @Input()
  dataRepresentante: Representante = {
    id: 0,
    nombres: "",
    apellidos: "",
    relacion: "",
    telefono: "",
    email: null
  };

  @Output() eventoGuardar = new EventEmitter<Representante>();

  guardar() {
    this.eventoGuardar.emit(this.dataRepresentante);
    this.cerrarModal();
  }

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
