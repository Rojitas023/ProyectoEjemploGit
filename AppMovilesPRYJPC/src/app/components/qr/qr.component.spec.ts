import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { qr } from './qr.component';

describe('qr', () => {
  let component: qr;
  let fixture: ComponentFixture<qr>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ qr ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(qr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
