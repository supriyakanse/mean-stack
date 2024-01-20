import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  isSubmit:boolean=false;
  users: any = [];

  newUser = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient,private router:Router) {
  }
  
  createUser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newUser.firstName = '';
        this.newUser.lastName = '';
        this.router.navigate(['getUsers'])
      },
      error: (err) => {
        console.log(err);
      },
    })
  }


}
