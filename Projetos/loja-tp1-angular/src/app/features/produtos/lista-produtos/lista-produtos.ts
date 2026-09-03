import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProdutoV2 } from "../card-produto-v2/card-produto-v2";



@Component({
  selector: 'app-lista-produtos',
  imports: [CardProdutoV2],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  apenasPromo = signal(false);

  produtosExibidos = computed(() => this.apenasPromo() ? this.produtos.filter(p => p.promo) : this.produtos)

  alternarPromo(){
    this.apenasPromo.update(v => !v)
  }

  onViewProduct(id: number){
    alert(`Visualizando o Produto id: ${id}`)
  }

  onAddProduct(produto: {id: number, qtd: number}){
    alert(`Adicionado produto: ${produto.id} Com quantidade: ${produto.qtd}`);

  }

}
