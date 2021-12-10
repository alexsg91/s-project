import { Component, Input, OnInit } from '@angular/core';
import { Params } from 'src/app/config/params';
import { User, CardUser } from 'src/app/models/userModel';

export interface NavIcon {
  icon: string,
  text: string,
  value: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // Defines icon list
  cardNavIcons = Params.CardNavIcons

  @Input("user") userInput!: User
  userInfo!: CardUser | any
  smallText!: string
  bigText!: string

  constructor() { }

  ngOnInit(): void {
    // Creates a new user class from user input to access custom getters
    this.userInfo = new CardUser(this.userInput)
  }

  mouse(nav: NavIcon) {
    // mouse hover updates the texts using the key
    this.bigText = nav.text
    this.smallText = this.userInfo[nav.value]
  }

}
