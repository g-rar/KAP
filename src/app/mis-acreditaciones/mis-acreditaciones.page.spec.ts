import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisAcreditacionesPage } from './mis-acreditaciones.page';

describe('MisAcreditacionesPage', () => {
  let component: MisAcreditacionesPage;
  let fixture: ComponentFixture<MisAcreditacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisAcreditacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisAcreditacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
