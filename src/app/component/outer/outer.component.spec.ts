import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterComponent } from './outer.component';
import { By } from '@angular/platform-browser';
import { NameService } from 'src/app/name.service';

describe('OuterComponent', () => {
  let component: OuterComponent;
  let fixture: ComponentFixture<OuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterComponent ]
    })
    .overrideProvider(NameService, { useValue: { name: 'fake value' } })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displaied text', () => {
    expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toBe('fake value');
  });
});
