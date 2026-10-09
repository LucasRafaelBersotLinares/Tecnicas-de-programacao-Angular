import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CarrinhoService } from '../../features/carrinho/services/carrinho.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  tituloLoja= input.required<string>();
  private carrinho = inject(CarrinhoService)

  qtdCarrinho = this.carrinho.qtdItens;

  exibirMsg(msg:string): void {
    alert(msg);
  }

  textoSobre = output<string>();

  enviarSobre() {
    this.textoSobre.emit('Disciplina de Técnicas de Programação  \n I. Desenvolvido por Rafis');
  }
}
