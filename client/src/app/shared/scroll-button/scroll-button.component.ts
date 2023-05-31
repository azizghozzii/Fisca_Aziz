import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent {

  showButton: boolean = false;
  readonly scrollOffset: number = 300;

  @HostListener('window:scroll')
  onScroll() {
    this.showButton = window.pageYOffset > this.scrollOffset;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
}
