import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
      button{
        margin-right: 5px;
      }
  `
  ]
})
export class PorRegionComponent{

  // Arreglo de string
  regiones : string[] = ['africa', 'americas','asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private regionesPaise : PaisService) { }

  getClassCSS( region: string): string{
    return (region === this. regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';

  }

  activarRegion( region: string){
    if(region === this.regionActiva ){
      return;
    } // Para que no se refresque si la hace clic nuevamente en el mismo boton // 
    this.regionActiva = region;
    this.paises = [];
    this.regionesPaise.buscarRegion(region).subscribe((paises)=>{
      this.paises = paises;
    }
      
    )

  }

}
