import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerComponent } from './inner.component';
import { NameService } from 'src/app/name.service';
import { By } from '@angular/platform-browser';

describe('InnerComponent', () => {
  let component: InnerComponent;
  let fixture: ComponentFixture<InnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerComponent ]
    })
    .compileComponents();

    TestBed.get(NameService).name = 'fake value';
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerComponent);
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
