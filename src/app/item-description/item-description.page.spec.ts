import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDescriptionPage } from './item-description.page';

describe('ItemDescriptionPage', () => {
  let component: ItemDescriptionPage;
  let fixture: ComponentFixture<ItemDescriptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
