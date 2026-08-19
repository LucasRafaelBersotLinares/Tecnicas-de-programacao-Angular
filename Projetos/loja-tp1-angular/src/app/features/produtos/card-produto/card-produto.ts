import { Component } from '@angular/core';
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
  preco = 0
  produto = ''

  imagem = 'images/produtos/' + this.produto

  criarCard(): void {

    

  }


}
