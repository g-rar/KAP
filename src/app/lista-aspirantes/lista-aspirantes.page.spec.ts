import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAspirantesPage } from './lista-aspirantes.page';

describe('ListaAspirantesPage', () => {
  let component: ListaAspirantesPage;
  let fixture: ComponentFixture<ListaAspirantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAspirantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAspirantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
