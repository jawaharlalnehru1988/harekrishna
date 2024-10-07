import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DataService } from '../../services/data.service';
import { YearlyEvent } from '../../Model/common.model';

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
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  currentMonthObj: YearlyEvent;
  currentMonth: string = '';

  constructor(private dataService: DataService) {
    const now = new Date();
    this.currentMonth = this.monthNames[now.getMonth()];
    this.currentMonthObj = this.dataService.yearlyEvents.find((obj) => obj.month === this.currentMonth) || { month: '', events: [] };
    this.selectedDate = new Date(); // Default to today's date
  }
  ngOnInit(): void {
      this.startImageRotation();
      console.log(' this.currentMonthObj :',  this.currentMonthObj);
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Change image every 5 seconds
  }
  public seenDates: Set<string> = new Set();

  shouldShowDate(eventDate: string): boolean {
    if (this.seenDates.has(eventDate)) {
      return false;
    }
    this.seenDates.add(eventDate);
    return true;
  }
  
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
