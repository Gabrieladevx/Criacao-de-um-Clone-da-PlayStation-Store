import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  isMobileMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value;
    console.log('Buscando por:', searchTerm);
    // Aqui você pode implementar a lógica de busca
    // Por exemplo, emitir um evento para o componente pai
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Menu mobile:', this.isMobileMenuOpen ? 'aberto' : 'fechado');
  }

}
