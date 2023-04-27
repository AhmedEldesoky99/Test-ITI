import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestService } from '../test.service';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testService: TestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    testService = TestBed.inject(TestService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test addition function', () => {
    expect(component.addition(10, 20)).toBe(30);
  });
  it('test subtraction function', () => {
    expect(component.subtraction(10, 5)).toBe(5);
  });
  it('test calc function', () => {
    expect(component.multiplication(10, 10)).toBe(100);
  });
  it('test division function', () => {
    expect(component.division(10, 2)).toBe(5);
  });

  it('should call getValue func from service in ngOnInit', () => {
    spyOn(testService, 'getValue');
    component.ngOnInit();
    expect(testService.getValue).toHaveBeenCalled();
  });
});
