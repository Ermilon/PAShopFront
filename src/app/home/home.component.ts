import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  products= [
    {id: 1, name: 'Gérard Depardieu',    descriptionShort: 'Votre parfait compagnon de beuverie',                image:'assets/AngularStarsPictures/Depardieu.jpg',  price:'350€',  hot:true},
    {id: 2, name: 'Liliane Bettencourt', descriptionShort: 'Gagne en 18 minutes ce que vous gagnez en une vie',  image:'assets/AngularStarsPictures/Liliane.jpg',    price:'15€',   hot:true},
    {id: 3, name: 'Cyril Hanouna',       descriptionShort: 'Ce bon vieu Baba saura vous faire rire',             image:'assets/AngularStarsPictures/Hanuna.jpeg',    price:'180€',  hot:false},
    {id: 4, name: 'Michèle Mathy',       descriptionShort: 'Vous sauve la vie en un claquement de doigts',       image:'assets/AngularStarsPictures/MimiMathy.jpg',  price:'1500€', hot:true},
    {id: 5, name: 'Jean-Pierre Coffe',   descriptionShort: 'La crème de la critique gastronomique Française',    image:'assets/AngularStarsPictures/Coffe.jpeg',      price:'480€',  hot:true}
  ]
  constructor() { }

  ngOnInit() {
  }

}
