import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SixthCardPage } from './sixth-card.page';

describe('SixthCardPage', () => {
  let component: SixthCardPage;
  let fixture: ComponentFixture<SixthCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SixthCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
