import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutoV2 } from './card-produto-v2';

describe('CardProdutoV2', () => {
  let component: CardProdutoV2;
  let fixture: ComponentFixture<CardProdutoV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProdutoV2],
    }).compileComponents();

    fixture = TestBed.createComponent(CardProdutoV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
