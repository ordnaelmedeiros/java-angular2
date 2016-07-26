import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private http: Http, private heroService: HeroService) { }
  
  teste : Teste = new Teste();
  
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));

    console.log("aqui");
    
    this.http.get('http://localhost:8080/JavaAngular/teste')
               .toPromise()
               .then(response => {
                  this.teste = response.json() as Teste;
               })
               .catch(this.handleError);
    console.log(JSON.stringify(this.teste));
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    
  }
  gotoDetail() { /* not implemented yet */}
  
}

export class Teste {
  testeId:number;
	descricao:string;
}

