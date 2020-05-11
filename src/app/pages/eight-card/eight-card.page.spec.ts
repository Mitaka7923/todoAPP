import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EightCardPage } from './eight-card.page';

describe('EightCardPage', () => {
  let component: EightCardPage;
  let fixture: ComponentFixture<EightCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EightCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
