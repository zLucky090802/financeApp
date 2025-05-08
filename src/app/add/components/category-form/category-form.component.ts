import { Component, OnInit } from '@angular/core';

import { IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
  imports:[IonicModule]
})
export class CategoryFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
