import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonexampleComponent } from './jsonexample.component';

describe('JsonexampleComponent', () => {
  let component: JsonexampleComponent;
  let fixture: ComponentFixture<JsonexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
