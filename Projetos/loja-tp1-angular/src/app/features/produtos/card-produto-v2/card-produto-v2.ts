import { Component, input, output, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { QuantidadeControle } from "../../../shared/quantidade-controle/quantidade-controle";
import { CurrencyPipe } from '@angular/common';
import { DescontoPipe } from '../../../shared/pipes/desconto-pipe';

@Component({
  selector: 'app-card-produto-v2',
  imports: [QuantidadeControle, CurrencyPipe, DescontoPipe],
  templateUrl: './card-produto-v2.html',
  styleUrl: './card-produto-v2.css',
})
export class CardProdutoV2 {
  produto = input.required<Produto>();
  
  quantidade = signal<number>(1);

  add = output<{id: number, qtd: number}>();
  view = output<number>();
  
  onAdd(){
    this.add.emit({id: this.produto().id ,qtd: this.quantidade()});
  }

  onView(){
    this.view.emit(this.produto().id);
  }


}
