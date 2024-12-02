import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent',
  standalone: true
})
export class PercentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
