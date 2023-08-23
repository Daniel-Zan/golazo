import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FibonaciPage } from './fibonaci.page';

describe('FibonaciPage', () => {
  let component: FibonaciPage;
  let fixture: ComponentFixture<FibonaciPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FibonaciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
