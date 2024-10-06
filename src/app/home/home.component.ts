import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CalendarModule, FormsModule, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images: string[] = [
    'lordkrisna.png', 
    'lordchaitanya.png', 
    'srilaprabhupada.png'
  ];
  events = [
    { date: new Date(2024, 9, 6), name: 'Angular Conference' },
    { date: new Date(2024, 9, 7), name: 'JavaScript Meetup' },
    { date: new Date(2024, 9, 8), name: 'RxJS Workshop' },
    { date: new Date(2024, 9, 9), name: 'Web Development Hackathon' },
  ];
  currentImageIndex = 0;
  intervalId: any;
  selectedDate: Date;

  constructor() {
    this.selectedDate = new Date(); // Default to today's date
  }
  ngOnInit(): void {
    this.startImageRotation();
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Change image every 5 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
