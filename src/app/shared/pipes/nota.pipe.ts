import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notapipe'
})
export class NotaPipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    let valorNotapipe: string = '';
    switch (true) {
      case value >= 7: valorNotapipe = 'Aprobado'; break;
      default: valorNotapipe = 'Reprobado'; break;
    }
    return valorNotapipe;
  }

}
