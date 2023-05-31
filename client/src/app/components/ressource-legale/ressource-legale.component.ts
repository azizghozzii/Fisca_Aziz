import { Component } from '@angular/core';

@Component({
  selector: 'app-ressource-legale',
  templateUrl: './ressource-legale.component.html',
  styleUrls: ['./ressource-legale.component.css']
})
export class RessourceLegaleComponent {
  backgroundImageSrc: string = "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  changeBackground(imageSrc: string) {
  this.backgroundImageSrc = imageSrc;
  }
  resetBackground() {
  this.backgroundImageSrc = 'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
}

}
