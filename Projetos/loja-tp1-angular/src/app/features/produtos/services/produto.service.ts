import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService)

  private readonly listaMock = <Produto[]>[
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

  listar(): Observable<Produto[]> {
    this.logger.info("Retornando lista de produtos cadastrados.");
    return of(this.listaMock).pipe(delay(250))
  }

}