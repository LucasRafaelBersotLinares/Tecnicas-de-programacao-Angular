import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/logger/logger.service';
import { ProductMapper, Produto } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService);
  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';

  private readonly listaMock = <Produto[]>[
    {
    id: 1,
    nome: 'Parafal',
    preco: 39000.00,
    descricao: 'Sai mais barato do que perder a vida',
    imageUrl: 'images/parafal.jpg',
    promo: false,
    estado: 'usado'
  },
    {
    id: 2,
    nome: 'hk',
    preco: 17000.00,
    descricao: 'metralhadora alemã ou de israel...',
    imageUrl: 'images/hk.jpg',
    promo: false,
    estado: 'novo'
  },
    {
    id: 3,
    nome: 'Beretta',
    preco: 8200.00,
    descricao: 'Otima para auto defesa.',
    imageUrl: 'images/beretta.jpg',
    promo: true,
    estado: 'esgotado'
  },
  {
    id: 4,
    nome: 'AK-47',
    preco: 9500.00,
    descricao: 'fds.',
    imageUrl: 'images/ak.jpg',
    promo: false,
    estado: 'novo'
  }
];

  listar(): Observable<Produto[]>{
    this.logger.info("PRODUTO SERVICE - retornando lista de produto");
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(lista => lista.map(p => ProductMapper.fromJson(p))),
      catchError(erro => {
        this.logger.error("[PRODUTO SERVICE] - Erro ao listar produto")
        return of([])
      })
    )
  }

  getById(id: number): Observable<Produto | undefined>{
    return of(this.listaMock.find(p=> p.id == id)).pipe(delay(500));
       
  }
}
