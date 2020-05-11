import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangesPage } from './changes.page';

describe('ChangesPage', () => {
  let component: ChangesPage;
  let fixture: ComponentFixture<ChangesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
