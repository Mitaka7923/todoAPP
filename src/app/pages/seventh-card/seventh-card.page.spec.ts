import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeventhCardPage } from './seventh-card.page';

describe('SeventhCardPage', () => {
  let component: SeventhCardPage;
  let fixture: ComponentFixture<SeventhCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeventhCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
