import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products= [
    {name: 'Gérard Depardieu',    descriptionShort: 'Votre parfait compagnon de beuverie',                image:'assets/AngularStarsPictures/Depardieu.jpg',  price:'350€'},
    {name: 'Liliane Bettencourt', descriptionShort: 'Gagne en 18 minutes ce que vous gagnez en une vie',  image:'assets/AngularStarsPictures/Liliane.jpg',    price:'15€'},
    {name: 'Cyril Hanouna',       descriptionShort:'Ce bon vieu Baba saura vous faire rire',              image:'assets/AngularStarsPictures/Hanuna.jpeg',    price:'180€'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
