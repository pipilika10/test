import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  user: any=[
    {
      ID:'user01', FirstName:'Adam' , LastName:'Ace',
        Gender: 'Male', email: 'aa11@gmail.com', password:'aa11',
        contact: '1102983741', subject:'maths'
    }
  ]
}
