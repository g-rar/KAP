import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccreditationsPage } from './accreditations.page';


describe('AccreditationsPage', () => {
  let component: AccreditationsPage;
  let fixture: ComponentFixture<AccreditationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccreditationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
