import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';


@Component({
  selector: 'app-account-movements-page',
  templateUrl: './account-movements-page.component.html',
  styleUrls: ['./account-movements-page.component.scss'],
  imports:[IonicModule, CommonModule, CapitalizePipe]
})
export class AccountMovementsPageComponent  implements OnInit {
  nombre:string  = '';
  constructor(
    private route:ActivatedRoute
  ) { 
    route.paramMap.subscribe(params=>{
       this.nombre = params.get('nombre')!;
      
    })
  }

  ngOnInit() {}

}
