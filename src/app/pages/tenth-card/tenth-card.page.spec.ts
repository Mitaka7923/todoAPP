import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenthCardPage } from './tenth-card.page';

describe('TenthCardPage', () => {
  let component: TenthCardPage;
  let fixture: ComponentFixture<TenthCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenthCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenthCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
