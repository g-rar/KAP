import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearAcreditacionPage } from './crear-acreditacion.page';

describe('CrearAcreditacionPage', () => {
  let component: CrearAcreditacionPage;
  let fixture: ComponentFixture<CrearAcreditacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAcreditacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearAcreditacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
