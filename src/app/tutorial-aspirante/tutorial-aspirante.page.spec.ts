import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialAspirantePage } from './tutorial-aspirante.page';

describe('TutorialAspirantePage', () => {
  let component: TutorialAspirantePage;
  let fixture: ComponentFixture<TutorialAspirantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialAspirantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialAspirantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
