import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../models/disciplina/disciplina';
import { DisciplinaService } from '../service/disciplina.service';

@Component({
    moduleId: module.id,
    selector: 'disciplina-component',
    templateUrl: 'disciplina.component.html',
    providers: [DisciplinaService]
})
export class DisciplinaComponent implements OnInit {
    
    disciplina : Disciplina = new Disciplina();
    
    disciplinas : Disciplina[];

    constructor(private disciplinaService : DisciplinaService) { }

    ngOnInit() {

        this.pesquisarTodos();

    }

    onSelect(dis : Disciplina) {
        this.pesquisar(dis.disciplinaId);
    }

    onSalvar(dis : Disciplina) {
        if (this.disciplina.disciplinaId==null) {
            this.salvar();
        } else {
            this.alterar();
        }
    }

    onExcluir(dis : Disciplina) {
        this.excluir(dis);
    }

    pesquisarTodos() {
        this.disciplina = new Disciplina();
        this.disciplinaService.pesquisarTodos().subscribe(
            (response : Disciplina[]) => {
                this.disciplinas = response;
            }
        );
    }

    pesquisar(id:number) {
        this.disciplinaService.pesquisar(id).subscribe(
            (response : Disciplina) => {
                this.disciplina = response;
            }
        );
    }

    salvar() {
        this.disciplinaService.salvar(this.disciplina).subscribe(
            (response:Disciplina) => {
                this.pesquisarTodos();
            }
        );
    }

    alterar() {
        this.disciplinaService.alterar(this.disciplina).subscribe(
            (response:Disciplina) => {
                this.pesquisarTodos();
            }
        );
    }

    excluir(dis:Disciplina) {
        this.disciplinaService.excluir(dis.disciplinaId).subscribe(
            (response:any) => {
                this.pesquisarTodos();
            }
        );
    }
}