import { Component, Input } from '@angular/core';
import { QuantidadeControle } from '../../../shared/quantidade-controle/quantidade-controle';

@Component({
  selector: 'app-card-produto',
  imports: [ QuantidadeControle],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css',
})
export class CardProduto {
  titulo = ''
  descricao = ''
  preco = ''
  produto = ''
  imagem = 'images/produtos/'

  constructor(){
    this.criarCard();
  }

  criarCard(): void {
    this.titulo = prompt('Informe o nome do produto:') || '';
    this.descricao = prompt('Informe a descrição do produto:') || '';
    this.preco = prompt('Informe o preço do produto:') || '';
    this.produto = prompt('Informe o nome do arquivo de imagem do produto:') || '';
    this.verificaCard(this.titulo,this.descricao,this.preco,this.produto);
  }

  verificaCard(titulo: string, descricao: string, preco: string, produto: string): void {
    if(titulo === '' || descricao === '' || preco === '' || produto === ''){
      alert('Todos os campos devem ser preenchidos!');
      this.criarCard();
    }
    this.imagem = 'images/produtos/'+this.produto
  }

}
