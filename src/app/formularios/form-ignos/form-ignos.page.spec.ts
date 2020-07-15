import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormIgnosPage } from './form-ignos.page';

describe('FormIgnosPage', () => {
  let component: FormIgnosPage;
  let fixture: ComponentFixture<FormIgnosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIgnosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormIgnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
