import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDarkComponent } from './template-dark.component';

describe('TemplateDarkComponent', () => {
  let component: TemplateDarkComponent;
  let fixture: ComponentFixture<TemplateDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
