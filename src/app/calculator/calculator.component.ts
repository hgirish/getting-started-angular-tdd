import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { ColorChangeDirective } from '../color-change.directive';
import { PercentPipe } from '../../core/pipes/percent.pipe';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-calculator',
    imports: [ColorChangeDirective, PercentPipe,ReactiveFormsModule,],
    providers: [],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  
 
  result!: number;
  color: string = 'red';
  calculatorForm!: FormGroup;

  constructor(private calculatorService: CalculatorService){}
  ngOnInit() {
    this.result = 0;
    this.calculatorForm = new FormGroup({
      operand1: new FormControl(null, [Validators.required]),
      operand2: new FormControl(null, [Validators.required]),
      operator: new FormControl(null, [Validators.required]),
    });
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
  calculate(){
    if (this.calculatorForm.get('operator')?.value === '+') {
      this.add(
        this.calculatorForm.get('operand1')?.value,
        this.calculatorForm.get('operand2')?.value
      );
    }
    if (this.calculatorForm.get('operator')?.value === '-') {
      this.subtract(
        this.calculatorForm.get('operand1')?.value,
        this.calculatorForm.get('operand2')?.value
      );
    }
    if (this.calculatorForm.get('operator')?.value === '*') {
      this.multiply(
        this.calculatorForm.get('operand1')?.value,
        this.calculatorForm.get('operand2')?.value
      );
    }
    if (this.calculatorForm.get('operator')?.value === '/') {
      this.divide(
        this.calculatorForm.get('operand1')?.value,
        this.calculatorForm.get('operand2')?.value
      );
    }

  }
}
