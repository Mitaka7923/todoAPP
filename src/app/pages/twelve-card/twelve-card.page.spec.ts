import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwelveCardPage } from './twelve-card.page';

describe('TwelveCardPage', () => {
  let component: TwelveCardPage;
  let fixture: ComponentFixture<TwelveCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelveCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwelveCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
