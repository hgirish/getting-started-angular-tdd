import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../calculator.service';
import { CalculatorServiceStub } from '../../core/stubs/calculator.service.stub';
import { MockSquareRootService } from '../../core/mocks/mock-square-root-service.mock';
import { FormControl, FormGroup } from '@angular/forms';



describe('CalculatorComponent', () => {
  let calculator: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
      providers: [
        {provide: CalculatorService, useClass: CalculatorService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    calculator = fixture.componentInstance;
    calculatorService = TestBed.inject(CalculatorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(calculator).toBeTruthy();
  });
  it('should initialize result to 0', () => {
    calculator.ngOnInit();
    expect(calculator.result).toEqual(0);;
  });

  

  it('should add two numbers correctly', ()=>{
    spyOn(calculatorService, 'add').and.callThrough();
  
    calculator.add(2, 3);
    expect(calculatorService.add).toHaveBeenCalledWith(2,3);
    expect(calculator.result).toBe(5);
  });
it('should subtract two numbers correctly', () => {
  spyOn(calculatorService, 'subtract').and.callThrough();
  calculator.subtract(2,3);
  expect(calculatorService.subtract).toHaveBeenCalledWith(2,3);
  expect(calculator.result).toBe(-1);
});

it('should multiply two numbers correctly', () => {
  spyOn(calculatorService, 'multiply').and.callThrough();
  calculator.multiply(2, 3);
  expect(calculatorService.multiply).toHaveBeenCalledWith(2,3);
  expect(calculator.result).toBe(6);
});

it('should divide two numbers correctly', () => {
  spyOn(calculatorService, 'divide').and.callThrough();
  calculator.divide(2,3);
  expect(calculatorService.divide).toHaveBeenCalledWith(2,3);
  expect(calculator.result).toBe(2/3);
});
/*
it('should raise an exception when dividing by zero', () => {
  spyOn(calculatorService, 'divide').and.callThrough();
  expect(() => calculator.divide(10,0)).toThrowError(
    'Cannot divide by zero'
  );
  expect(calculatorService.divide).toHaveBeenCalledWith(10,0);
})
  */
it ('should calculate the square root correctly', ()=> {
  spyOn(calculatorService, 'calculateSquareRoot').and.callThrough();
  calculator.squareRoot(16);
  expect(calculatorService.calculateSquareRoot).toHaveBeenCalledWith(16);
  expect(calculator.result).toBe(4);
});

it('should be valid when all of the fields are filled in correctly', () => {
  calculator.calculatorForm.get('operand1')?.setValue(123);
  calculator.calculatorForm.get('operand2')?.setValue(456);
  calculator.calculatorForm.get('operator')?.setValue('+');
  
  expect(calculator.calculatorForm.valid).toBe(true);
})

it('should be invalid when one of the field is not filled in correctly', ()=> {
  calculator.calculatorForm.get('operand1')?.setValue(123);
  calculator.calculatorForm.get('operator')?.setValue('+');

  expect(calculator.calculatorForm.valid).toBe(false);
})

it('should be added when the + operator is selected and the calculate button is clicked', ()=>{
  calculator.calculatorForm.get('operand1')?.setValue(2);
  calculator.calculatorForm.get('operand2')?.setValue(3);
  calculator.calculatorForm.get('operator')?.setValue('+');

  calculator.calculate();

  expect(calculator.result).toBe(5);
})


it('should subtract when the - operator is selected and the calculate button is clicked', ()=>{
  calculator.calculatorForm.get('operand1')?.setValue(2);
  calculator.calculatorForm.get('operand2')?.setValue(3);
  calculator.calculatorForm.get('operator')?.setValue('-');

  calculator.calculate();

  expect(calculator.result).toBe(-1);
})

it('should multiply when the * operator is selected and the calculate button is clicked', ()=>{
  calculator.calculatorForm.get('operand1')?.setValue(2);
  calculator.calculatorForm.get('operand2')?.setValue(3);
  calculator.calculatorForm.get('operator')?.setValue('*');

  calculator.calculate();

  expect(calculator.result).toBe(6);
})

it('should divide when the / operator is selected and the calculate button is clicked', ()=>{
  calculator.calculatorForm.get('operand1')?.setValue(6);
  calculator.calculatorForm.get('operand2')?.setValue(3);
  calculator.calculatorForm.get('operator')?.setValue('/');

  calculator.calculate();

  expect(calculator.result).toBe(2);
})



});
