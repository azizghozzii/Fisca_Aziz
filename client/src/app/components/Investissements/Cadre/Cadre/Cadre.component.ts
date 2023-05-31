import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Cadre',
  templateUrl: './Cadre.component.html',
  styleUrls: ['./Cadre.component.css']
})
export class CadreComponent  {


  constructor(private elementRef: ElementRef,private router: Router){


  }
  ngAfterViewInit(): void {
       this.carouselInner = this.elementRef.nativeElement.querySelector('#carousel-inner');
       this.card = this.elementRef.nativeElement.querySelector('#carousel-item');
      this.carouselWidth = this.carouselInner.scrollWidth;
      this.cardWidth = this.card.offsetWidth;

    }
    card:any
    carouselInner:any
    carouselWidth:any
    cardWidth:any
    scrollPosition: any = 0

    gonext(){
      if(this.carouselInner.scrollWidth >=this.scrollPosition + this.carouselInner.offsetWidth)
    {this.scrollPosition = this.scrollPosition + this.carouselInner.offsetWidth ;
    this.carouselInner.scroll({
      left: this.scrollPosition,
      behavior: 'smooth'
    });

    }
  }
    goprev(){
      if((this.scrollPosition - this.carouselInner.offsetWidth )>= 0 ){
    this.scrollPosition =    this.scrollPosition - this.carouselInner.offsetWidth;
    this.carouselInner.scroll({
      left: this.scrollPosition,
      behavior: 'smooth'
    });
  }

    }
    goto(){
    this.router.navigate(["/Cadre"])}
    goto2(){
      this.router.navigate(["/Financiers"])}
      goto3(){
        this.router.navigate(["/Fiscaux"])}
        goto4(){
          this.router.navigate(["/Autorisation"])}
          goto5(){
            this.router.navigate(["/Declaration"])}
}

