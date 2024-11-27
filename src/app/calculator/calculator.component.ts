import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { ColorChangeDirective } from '../color-change.directive';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ColorChangeDirective,],
  providers:[],  
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  
 
  result!: number|Error;
  color: string = 'red';
  constructor(private calculatorService: CalculatorService){}
  ngOnInit() {
    this.result = 0;
  }
  add(a: number, b: number) : void {
    this.result = this.calculatorService.add(a,b);
  }

  subtract(a: number, b: number) {
    this.result = this.calculatorService.subtract(a,b);
  }

multiply(a: number, b: number) {
    this.result = this.calculatorService.multiply(a,b);
  }

  divide(a: number, b: number) {
    this.result = this.calculatorService.divide(a,b);
  }
  squareRoot(value:number)  {
    this.result = this.calculatorService.calculateSquareRoot(value);
  }
}
