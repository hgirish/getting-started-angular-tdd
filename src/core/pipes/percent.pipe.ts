import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent',
  standalone: true
})
export class PercentPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)){
      return 'Error';
    }
    const formattedValue = value * 100;
    return formattedValue + '%';
  }

}
