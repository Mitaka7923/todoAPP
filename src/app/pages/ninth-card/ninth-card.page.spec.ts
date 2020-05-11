import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NinthCardPage } from './ninth-card.page';

describe('NinthCardPage', () => {
  let component: NinthCardPage;
  let fixture: ComponentFixture<NinthCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NinthCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
