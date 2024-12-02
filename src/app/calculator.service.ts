import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
 

  add(a:number, b:number) : number{
    return a + b;
  }

  subtract(a: number, b:number) :number{
    return a - b;
  }
  multiply(a:number, b:number): number {
    return a * b;
  }
  divide(a:number, b:number): number  {
    return a / b;
  }
  calculateSquareRoot(value:number):number{
    return Math.sqrt(value);
  }
}
