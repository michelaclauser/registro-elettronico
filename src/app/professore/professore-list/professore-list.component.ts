import { Component, OnInit } from '@angular/core';
import { ProfessoreService } from '../professore.service';
import { Router } from '@angular/router';
import { Professore } from '../professore';

@Component({
  selector: 'app-professore-list',
  templateUrl: './professore-list.component.html',
  styleUrls: ['./professore-list.component.css']
})
export class ProfessoreListComponent implements OnInit {

  professori: Professore[];

  constructor(private _professoriService: ProfessoreService,
    private router: Router) { }

  ngOnInit() {
    this.visualizzaListaProfessori()
  }

  visualizzaListaProfessori() {
    this._professoriService.getProfessori().subscribe(
      (listaProfessori) => {
        this.professori = listaProfessori;
      }
    );
  }

  rimuoviProfessore(codiceProfessore: string){
    this._professoriService.removeProfessore(codiceProfessore)
  }

  createPage(){
    this.router.navigate(['professori/nuovo']);
  }
}