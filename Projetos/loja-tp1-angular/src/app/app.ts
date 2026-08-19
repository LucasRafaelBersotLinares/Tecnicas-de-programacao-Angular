import { Component, signal, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { QuantidadeControle } from "./shared/quantidade-controle/quantidade-controle";
import { CardProduto } from "./features/produtos/card-produto/card-produto";
@Component({
  selector: 'app-root',
  imports: [CardProduto, RouterOutlet, Header, Footer, QuantidadeControle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LOJA TP1 APP');

  sobre?: string;
  produto = signal(false)

  receberSobre(msg: string): void {
    this.sobre = msg
  }

  adicionaCard(){
    this.produto.set(true)
  }

}
