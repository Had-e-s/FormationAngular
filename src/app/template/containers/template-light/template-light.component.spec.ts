import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLightComponent } from './template-light.component';

describe('TemplateLightComponent', () => {
  let component: TemplateLightComponent;
  let fixture: ComponentFixture<TemplateLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
