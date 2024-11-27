import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardCarouselProductPromoComponent } from './card-carousel-product-promo.component';

describe('CardCarouselProductPromoComponent', () => {
  let component: CardCarouselProductPromoComponent;
  let fixture: ComponentFixture<CardCarouselProductPromoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarouselProductPromoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardCarouselProductPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
