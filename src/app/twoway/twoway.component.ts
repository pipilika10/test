import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent{
  user: any=[
    {
      email:'', password:''
    }
  ]
}
