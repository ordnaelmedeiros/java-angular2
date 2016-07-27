import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from '../models/hero/hero';
import { HeroService } from '../views/heroes/hero.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }
  
  teste : Teste = new Teste();
  testeErro : Teste = new Teste();
  
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));

    console.log("aqui");
    
    this.heroService.getPing().then(response => this.teste = response);
    /*
    this.heroService.getErro().then(response => {
      this.testeErro = response;
      console.log('aqui aqui');
    });
    */

    this.heroService.getPingErro(true).subscribe((response:Teste) => {
      console.log('veio2: ' + response);
    }, (erro:string) => {
      console.log('erro2: ' + erro);
    });
    
    this.heroService.getPingErro(false).subscribe((response:Teste) => {
      console.log('veio: ' + response.descricao);
    }, (erro:string) => {
      console.log('erro: ' + erro);
    });
    
  }

  getPing2_result(response:Teste) {
    console.log(response.descricao);
  }
 
  gotoDetail() { /* not implemented yet */}
  
}

export class Teste {
  testeId:number;
	descricao:string;
}

