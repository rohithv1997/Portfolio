import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationGridComponentComponent } from './certification-grid-component';

describe('CertificationGridComponentComponent', () => {
  let component: CertificationGridComponentComponent;
  let fixture: ComponentFixture<CertificationGridComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationGridComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
