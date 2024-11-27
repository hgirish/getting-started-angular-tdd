import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../calculator.service';
import { CalculatorServiceStub } from '../../core/stubs/calculator.service.stub';



describe('CalculatorComponent', () => {
  let calculator: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let calculatorService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
      providers: [
        {provide: CalculatorService, useClass: CalculatorServiceStub}
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

it('should raise an exception when dividing by zero', () => {
  spyOn(calculatorService, 'divide').and.callThrough();
  expect(() => calculator.divide(10,0)).toThrowError(
    'Cannot divide by zero'
  );
  expect(calculatorService.divide).toHaveBeenCalledWith(10,0);
})


});
