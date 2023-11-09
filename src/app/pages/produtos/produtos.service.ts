import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_EQUIPAMENTOS, API_PEDIDOS } from 'src/constants/api-url.constant';
import { itemLoja } from 'src/constants/item-loja';
import { ItemLojaType } from 'src/types/itemLojaType';
import { PedidoType } from 'src/types/pedidoType';
import { SearchParamsType } from 'src/types/searchParams.type';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private _http: HttpClient) {}

  public getItens(searchParams?: SearchParamsType): Observable<ItemLojaType[]> {
    let params = new HttpParams();
    if (searchParams) {
      Object.keys(searchParams).map((key: string) => {
        params = params.append(key, String(searchParams[key]));
      });
    }
    return this._http.get<ItemLojaType[]>(API_EQUIPAMENTOS, { params });
  }

  public getItemBy(id: string): Observable<ItemLojaType> {
    return this._http.get<ItemLojaType>(`${API_EQUIPAMENTOS}/${id}`);
  }

  public realizarPedido(pedido: PedidoType): Observable<PedidoType> {
    const body = { ...pedido };
    return this._http.post<PedidoType>(API_PEDIDOS, body, {});
  }
}
