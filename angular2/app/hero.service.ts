import { Injectable, EventEmitter, Output } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Headers, Http } from '@angular/http';

@Injectable()
export class HeroService {

  constructor(
    private http: Http) {

  }

  getHeroes() {
    return Promise.resolve(HEROES);
  }
  getHero(id: number) {
    return this.getHeroes()
              .then(heroes => heroes.find(hero => hero.id === id));
  }

  getPing() {
    return this.http.get('http://localhost:8080/JavaAngular/ping')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getErro() {
    return this.http.get('http://localhost:8080/JavaAngular/erro')
               .toPromise()
               .then(response => response.json());
  }

  private handleError(error: any) {
    //console.log(error._body);
    alert(error._body);
    return Promise.reject(error._body);
    
  }

  @Output() getErro2_result = new EventEmitter();

  getErro2() {

    this.http.get('http://localhost:8080/JavaAngular/erro')
               .toPromise()
               .then(response => {
                 this.getErro2_result.emit(response.json());
               })
               .catch((erro:any) => {
                 this.getErro2_result.error(erro._body);
               });
    return this.getErro2_result;

  }

  @Output() getPing2_result = new EventEmitter();

  getPing2() {

    this.http.get('http://localhost:8080/JavaAngular/ping')
               .toPromise()
               .then(response => {
                 this.getPing2_result.emit(response.json());
               })
               .catch(erro => {
                 console.log(erro._body)
               });
    return this.getPing2_result;

  }    

  getPingErro(errar:boolean) {

    let result = new EventEmitter();

    let url : string = 'http://localhost:8080/JavaAngular/ping';

    if (errar) {
      url = 'http://localhost:8080/JavaAngular/erro'
    }

    this.http.get(url)
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
