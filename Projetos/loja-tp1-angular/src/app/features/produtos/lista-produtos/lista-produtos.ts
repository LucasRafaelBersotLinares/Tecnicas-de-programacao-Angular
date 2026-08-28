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

  produtos = <Produto[]>[
    {
      id: 1,
      nome: 'Mounjaro',
      preco: 1699.9,
      descricao: 'Canetas cara demais. Deus me livre.',
      imageUrl: 'images/produtos/mounjaro.jpg',
      promo: false,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Cocaina',
      preco: 4000.0,
      descricao: 'Melhor cocaina do mundo, algum card desses tem a resposta...',
      imageUrl: 'images/produtos/cocaina.jpg',
      promo: true,
      estado: 'novo',
    },
    {
      id: 3,
      nome: 'Ozempic',
      preco: 1299.9,
      descricao: 'Caneta BUCHAA QUERO GORZAR',
      imageUrl: 'images/produtos/ozempic.jpg',
      promo: true,
      estado: 'usado'
    },
    {
      id: 4,
      nome: 'Walter White',
      preco: 10000.0,
      descricao: 'SAY MY NAMEEE!!!',
      imageUrl: 'images/produtos/walter.jpg',
      promo: false,
      estado: 'esgotado'
    },
  ];

  onViewProduct(id: number){
    alert(`Visualizando o Produto id: ${id}`)
  }

  onAddProduct(produto: {id: number, qtd: number}){
    alert(`Adicionado produto: ${produto.id} Com quantidade: ${produto.qtd}`);

  }

}
