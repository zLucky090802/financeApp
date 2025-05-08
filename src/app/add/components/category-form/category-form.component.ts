import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { IonicModule} from "@ionic/angular";
import { CategoriaService } from '../../service/categoria.service';
import { Categorias } from '../../interfaces/categorias.interface';
import { Store } from '@ngrx/store';
import { User } from 'src/app/auth/interfaces/user.interface';
import { Observable } from 'rxjs';
import { selectUser } from 'src/app/store/auth/auth.selector';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
  imports:[IonicModule, ReactiveFormsModule]
})
export class CategoryFormComponent  implements OnInit {

  form:FormGroup;
  user$!:Observable<any>;
  user!:User;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private store:Store
  ) {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe( user => {
      this.user = user;
    })
    this.form = this.fb.group({
      nombre:['',[Validators.required]],

    })
   }

   onSubmit(){
     const categoria:Categorias = {
      usuario_id: this.user.id!,
      nombre: this.form.get('nombre')?.value
     }
     console.log(categoria)
     this.crearCategoria(categoria);
   }

  ngOnInit() {}

  crearCategoria(categoria:Categorias){
    this.categoriaService.createcategoria(categoria).subscribe( categoria =>{
      console.log(categoria)
    })
  }

}
