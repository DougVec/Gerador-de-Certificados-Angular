import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    console.log('NavbarComponent initialized');

  }

  mensagem(){

console.log('Mensagem do NavbarComponent(dentro de uma função)');

  }

}
