import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialAcreditadorPage } from './tutorial-acreditador.page';

describe('TutorialAcreditadorPage', () => {
  let component: TutorialAcreditadorPage;
  let fixture: ComponentFixture<TutorialAcreditadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialAcreditadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialAcreditadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
