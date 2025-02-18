import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  value:string = "";
  items: any[] = [];

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
