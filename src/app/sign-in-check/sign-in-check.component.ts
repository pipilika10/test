import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-check',
  templateUrl: './sign-in-check.component.html',
  styleUrls: ['./sign-in-check.component.css']
})
export class SignInCheckComponent {
  user: any=[
    {
      email:'', password:''
    }
}
