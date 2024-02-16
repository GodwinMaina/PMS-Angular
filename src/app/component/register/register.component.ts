

import { Component} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';


// import { FormBuilder,  FormGroup,Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';

interface registerDetails{
  userName:string;
  email: string;
  password: string

}


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {

registerUser(details:registerDetails){
  console.log(details);

}
}

