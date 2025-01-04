import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ColorChangeDirective } from './color-change.directive'
import { CalculatorComponent } from './calculator/calculator.component'
import { By } from '@angular/platform-browser'

describe('ColorChangeDirective', () => {
  let fixture: ComponentFixture<CalculatorComponent>
  let calculator: CalculatorComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorChangeDirective],
    }).compileComponents()
    fixture = TestBed.createComponent(CalculatorComponent)
    calculator = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should apply the specified color', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement
    // console.log(element);
    expect(element.textContent).toEqual('0')
    const color: string = 'red'
    calculator.color = color
    fixture.detectChanges()
    expect(element.style.color).toBe(color)
  })
})
