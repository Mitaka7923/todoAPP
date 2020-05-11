import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EleCardPage } from './ele-card.page';

describe('EleCardPage', () => {
  let component: EleCardPage;
  let fixture: ComponentFixture<EleCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EleCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
