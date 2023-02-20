import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Produto } from "../models/Produto";
import { InputModel, token } from "../models/InputModel";

@Injectable({ providedIn: 'root' })

export class Service {
    private readonly urlBackEnd = environment["apiBackEnd"];
    private readonly urlToken = environment["apiToken"];
    tokenUsuario: any;
    constructor(private httpClient: HttpClient) {
    }

    setToken(tokenUsuario: any) {
        this.tokenUsuario = tokenUsuario;
      }
    
    getToken() {
    return this.tokenUsuario;
      }

    LoginUsuario(objeto:any)
    {
        return this.httpClient.post<any>
        (`${this.urlToken }`, objeto)
    }

    public ListaProdutos(tokenUsuario: any) {
        var url = this.urlBackEnd + "ListaProdutos"
        return this.httpClient.get<Object>(url,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${tokenUsuario}`
                })
            })

    }

    public InsereProduto(produto: any, tokenUsuario: any) {
        var url = this.urlBackEnd + "AdicionarProduto"
        return this.httpClient.post<Produto>(url, produto,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${tokenUsuario}`
                })
            })
    }

    public AtualizaProduto(produto: Produto,  id: number, tokenUsuario: any) {
        var url = this.urlBackEnd + "produtos/" + id;
        return this.httpClient.put<Produto>(url, produto,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${tokenUsuario}`
                })
            })
    }

    public RemoveProduto(id: any, tokenUsuario: any) {
        var url = this.urlBackEnd + "DelProd"
        return this.httpClient.post<Produto>(url, id,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${tokenUsuario}`
                })
            })
    }

    public DeleteRange(idList: any[], tokenUsuario: any) {
        var url = this.urlBackEnd + "excluirRangeProdutosPorIds";
        return this.httpClient.request('post', url,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${tokenUsuario}`
                }),
                body: { ids: idList }
            });
    }

}