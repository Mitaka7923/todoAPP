import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FifthCardPage } from './fifth-card.page';

describe('FifthCardPage', () => {
  let component: FifthCardPage;
  let fixture: ComponentFixture<FifthCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FifthCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
