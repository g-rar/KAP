import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormVirtusPage } from './form-virtus.page';

describe('FormVirtusPage', () => {
  let component: FormVirtusPage;
  let fixture: ComponentFixture<FormVirtusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVirtusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormVirtusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
