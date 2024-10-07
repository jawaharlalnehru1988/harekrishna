import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'navbar',
  standalone: true,
  imports: [InputTextModule, MenuModule, ButtonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  value:string = "";
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
      { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' }
    ];
  }

  toggleMobileMenu(){

  }
}
