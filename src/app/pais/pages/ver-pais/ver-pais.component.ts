import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(private activateRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
    /*this.activateRoute.params
    .subscribe( id =>{
      
      console.log(id);
      // Envia el código del pais al método
      this.paisService.buscarporAlpha(id.codigoPais).subscribe(pais =>{
        console.log(pais);
      })

    });*/
    //Desesctruturación ({id})
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.buscarporAlpha(id)),
      tap(console.log)

    ).subscribe(pais =>this.pais = pais);

  }

}
