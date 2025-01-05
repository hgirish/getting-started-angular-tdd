import { Component } from '@angular/core'
import { CalculatorService } from '../calculator.service'
import { ColorChangeDirective } from '../color-change.directive'
import { PercentPipe } from '../../core/pipes/percent.pipe'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-calculator',
  imports: [ColorChangeDirective, ReactiveFormsModule],
  providers: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  result!: number
  color: string = 'red'
  calculatorForm!: FormGroup

  constructor(private calculatorService: CalculatorService) {}
  ngOnInit() {
    this.result = 0
    this.calculatorForm = new FormGroup({
      operand1: new FormControl(null, [Validators.required]),
      operand2: new FormControl(null, [Validators.required]),
      operator: new FormControl(null, [Validators.required]),
    })
  }

  add(a: number, b: number): void {
    this.result = this.calculatorService.add(a, b)
  }

  subtract(a: number, b: number) {
    this.result = this.calculatorService.subtract(a, b)
  }

  multiply(a: number, b: number) {
    this.result = this.calculatorService.multiply(a, b)
  }

  divide(a: number, b: number) {
    this.result = this.calculatorService.divide(a, b)
  }
  squareRoot(value: number) {
    this.result = this.calculatorService.calculateSquareRoot(value)
  }
  calculate() {
    const operator = this.calculatorForm.get('operator')?.value
    const operand1 = this.calculatorForm.get('operand1')?.value
    const operand2 = this.calculatorForm.get('operand2')?.value
    if (!operator || !operand1 || !operand2) return
    switch (operator) {
      case '+':
        this.add(operand1, operand2)
        break
      case '-':
        this.subtract(operand1, operand2)
        break
      case '*':
        this.multiply(operand1, operand2)
        break
      case '/':
        this.divide(operand1, operand2)
        break
      default:
        console.error(`Unsupported operator ${operator}`)
        break
    }
  }
}
