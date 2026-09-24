import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-produto-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css',
})
export class ProdutoForm {
  private produtoService = inject(ProdutoService);
  private router = inject(Router);

  enviando = signal(false)
  mensagem = signal('');
  novaCategoria = signal('');

  private produtos = toSignal(this.produtoService.listar(),{initialValue: []});

  categorias = computed(() => {
    const lista = this.produtos().map(p => p.categoria).filter(Boolean);
    const unicas = Array.from(new Set(lista));
    // unicas = ['bolsa','blusa','sapato']
    // retornar -> ['bolsa','blusa','sapato','Outra']
    // return [unicas, 'Outra']
    // return [['bolsa','blusa','sapato'], 'Outra'] -> Errado
    // Spread Operator solta item por item = ...
    return [...unicas,'Outra'];
  });

  categoriaSelecionada = signal('');

  mostrarNovaCategoria = computed(() => {this.categoriaSelecionada() == 'Outra';})


}
