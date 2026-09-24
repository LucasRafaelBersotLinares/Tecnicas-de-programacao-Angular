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
    return of();
       
  }

  criar(produto: Produto): Observable<any> {
    return this.http.post(this.apiUrl,ProductMapper.toJson(produto));
  }
}
