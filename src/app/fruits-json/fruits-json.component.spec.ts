import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsJsonComponent } from './fruits-json.component';

describe('FruitsJsonComponent', () => {
  let component: FruitsJsonComponent;
  let fixture: ComponentFixture<FruitsJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
