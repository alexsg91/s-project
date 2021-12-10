import { Component, OnInit } from '@angular/core';
import { User, UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {

  user!: User | null; // Holds user object
  loading: boolean // shows loader if true

  constructor(
    private userService: UserService
  ) {
    this.loading = true
  }

  ngOnInit(): void {
    // Set timeout to simulate async delay
    setTimeout (() => {this.fetchUser()}, 1000)

  }

  fetchUser () {
    this.userService.getUser().subscribe((res: User | null) => {
      this.loading = false
      this.user = res
    })
  }

}
