import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-produto-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css',
})
export class ProdutoForm {
  private produtoService = inject(ProdutoService);
  public router = inject(Router);

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
    return [...unicas,"Outra"];
  });

  categoriaSelecionada = signal('');

  mostrarNovaCategoria = computed(() => this.categoriaSelecionada() == "Outra")

  novoProduto = {
    id: 0,
    nome: '',
    preco: 0,
    descricao: '',
    promo: false,
    imageUrl: '',
    categoria: '',
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      this.mensagem.set("Preencha todos os campos do fórmulario.");
      return;
    }
    this.novoProduto.categoria = this.categoriaSelecionada() == 'Outra'? this.novaCategoria() : this.categoriaSelecionada();

    this.enviando.set(true);
    this.mensagem.set("Enviando produto...");

    this.produtoService.criar(this.novoProduto).pipe(
      finalize(() => this.enviando.set(false))
    ).subscribe(
      {
        next: (resp) => {
          this.mensagem.set("Produto cadastrado com sucesso!");
          form.resetForm();
          setTimeout(() => {
            this.router.navigateByUrl('/produtos'), 1200
          })
        },// se der certo
        error: (err) => {
          this.mensagem.set("Erro ao criar produto: " + err);
        }//se der erro
      }
    )
  }

}
