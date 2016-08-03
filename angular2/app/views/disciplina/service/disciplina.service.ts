import { Injectable, EventEmitter, Output } from '@angular/core';
import { Disciplina } from '../../../models/disciplina/disciplina';
import { Headers, Http, RequestOptions, RequestMethod, Response, Request } from '@angular/http';

@Injectable()
export class DisciplinaService {
    
    url:string = 'http://localhost:8080/JavaAngular/disciplina';

    

    constructor(private http: Http) {

        
    }

    getHeader() : any {

        let headers : Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        return {headers};

    }

    
    salvar(disciplina:any) {

        console.log('salvar')

        let body = JSON.stringify(disciplina);
        let result = new EventEmitter();

        this.http.post(this.url, body, this.getHeader())
                .toPromise()
                .then(response => {
                    result.emit(response.json());
                })
                .catch(erro => {
                    result.error(erro._body)
                });
        return result;
        
    }

    alterar(disciplina:any) {

        console.log('alterar')

        let body = JSON.stringify(disciplina);
        let result = new EventEmitter();

        this.http.put(this.url, body, this.getHeader())
                .toPromise()
                .then(response => {
                    result.emit(response.json());
                })
                .catch(erro => {
                    result.error(erro._body)
                });
        return result;
        
    }

    pesquisarTodos() {

        let result = new EventEmitter();

        this.http.get(this.url)
                .toPromise()
                .then(response => {
                    result.emit(response.json());
                })
                .catch(erro => {
                    result.error(erro._body)
                });
        return result;

    }

    pesquisar(id:number) {

        let result = new EventEmitter();

        this.http.get(this.url+"/"+id)
                .toPromise()
                .then(response => {
                    result.emit(response.json());
                })
                .catch(erro => {
                    result.error(erro._body)
                });
        return result;

    }

    excluir(id:number) {

        let result = new EventEmitter();

        this.http.delete(this.url+"/"+id)
                .toPromise()
                .then(response => {
                    result.emit(response.json());
                })
                .catch(erro => {
                    result.error(erro._body)
                });
        return result;

    }

}