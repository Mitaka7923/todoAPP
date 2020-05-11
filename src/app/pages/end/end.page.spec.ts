import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndPage } from './end.page';

describe('EndPage', () => {
  let component: EndPage;
  let fixture: ComponentFixture<EndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
