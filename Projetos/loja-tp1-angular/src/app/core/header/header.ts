import { Component, input, output } from '@angular/core';
import { delay } from 'rxjs';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = input.required<string>()
  textoSobre = output<string>()

  enviarSobre(): void {
    this.textoSobre.emit('Técnicas de programação I. \n Desenvolvido por Lucas Rafael')
  }

  exibirMensagem(msg: string): void{
    alert(msg);
  }
}
