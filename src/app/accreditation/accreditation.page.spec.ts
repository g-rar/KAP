import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccreditationPage } from './accreditation.page';

describe('AccreditationPage', () => {
  let component: AccreditationPage;
  let fixture: ComponentFixture<AccreditationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccreditationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
