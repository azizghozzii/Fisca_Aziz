import { Component,ElementRef,Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public item: any[]=[];
  constructor(private elementRef: ElementRef,){


  }

  ressources : Ressource[]=[
    new Ressource("../../../assets/2.jpg","Ressouces Légales et Administratives","How will the metaverse change our behavior as it reshapes experiences?"),
    new Ressource("../../../assets/1.jpg","Ressources EY","How will the metaverse change our behavior as it reshapes experiences?"),
    new Ressource("../../../assets/3.jpg","Investissements","How will the metaverse change our behavior as it reshapes experiences?"),
    new Ressource("../../../assets/2.jpg","Fiscalité Internationale","How will the metaverse change our behavior as it reshapes experiences?"),
    new Ressource("../../../assets/3.jpg","Détermination Du Résultat Fiscal","How will the metaverse change our behavior as it reshapes experiences?"),

  ]
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
 /*  $(".carousel-control-right").click(function() {
    $(this).blur();
    $(this)
      .parent()
      .find(".carousel-item")
      .first()
      .insertAfter(
        $(this)
          .parent()
          .find(".carousel-item")
          .last()
      );
  });
  $(".carousel-control-left").click(function() {
    $(this).blur();
    $(this)
      .parent()
      .find(".carousel-item")
      .last()
      .insertBefore(
        $(this)
          .parent()
          .find(".carousel-item")
          .first()
      );
  });

   */

  //DOESN;T WORK: dont show navigation arrows on one slide if not using looped slides
        /*    var carosel__slidecount = carosel.img.length;
           if (carosel__slidecount < 2) {
             $('.carosel-control-left,.carosel-control-right').remove();
           } */
  //.swiper-button-prev and .swiper-button-next would be the class names of the arrows
  //mySwiper should be whatever you named your swiper object.
}
@Directive({
  selector:'[appNext]'
})
export class NextDirective {
  constructor( private elementRef : ElementRef){

  }
  @HostListener('click')
  nextItem(){
    const innerMain = this.elementRef.nativeElement.parentElement.parentElement.children[0]
    console.log(innerMain)
    const item = innerMain.getElementsByClassName('carousel-item');
   
    //console.log(item[0].offsetWidth)
    document.getElementById('carousel-inner')!.style.transform= "translate(-"+item[0].offsetWidth+"px)" 
    console.log(document.getElementById('carousel-inner')!.style.transform)
        setTimeout(()=>{
      innerMain.append(item[0])
      document.getElementById('carousel-inner')!.style.transition= "none"
      document.getElementById('carousel-inner')!.style.transform= "translate(0)"
       
    },800) 
    setTimeout(()=>{
      document.getElementById('carousel-inner')!.style.transition= "all linear .8s"
    },900)
   /*  const x = item[4].children[0].getAttribute('data-image')
    document.getElementById('backgroundimage')!.style.backgroundImage = url(${x})
    document.getElementById('backgroundimage')!.style.transition = "background-image .5s ease .5s" */
   item[3].children[0].classList.add('hover')
   item[2].children[0].classList.remove('hover')
  }
}
@Directive({
  selector:'[appPrev]'
})
export class PrevDirective {
  constructor( private elementRef : ElementRef){

  }
  @HostListener('click')
  prevItem(){
    
   
    const innerMain = this.elementRef.nativeElement.parentElement.parentElement.children[0]
    const item = innerMain.getElementsByClassName('carousel-item')
    const innerWidth=innerMain.offsetWidth
    const width = innerMain.children[0].offsetWidth
    
    document.getElementById('carousel-inner')!.style.transition= "none"
   
      innerMain.style.position='absolute'
      innerMain.style.left='0px'
      innerMain.style.width=(width+innerWidth)+'px'
      innerMain.style.left=(innerMain.offsetLeft-width)+'px'
      innerMain.prepend(item[item.length-1])
      
  
      innerMain.style.width=(innerMain.offsetWidth-width)+'px'

      
      setTimeout(()=>{
        document.getElementById('carousel-inner')!.style.transition= "all linear .8s" 
        document.getElementById('carousel-inner')!.style.transform= "translate("+item[0].offsetWidth+"px)"
      },100) 
       setTimeout(()=>{
        document.getElementById('carousel-inner')!.style.transition= "none"
        document.getElementById('carousel-inner')!.style.transform= "translate(0)"
        innerMain.style.position='unset'
        innerMain.style.left='unset'
        innerMain.style.width='100%'
      },900) 
      setTimeout(()=>{

        document.getElementById('carousel-inner')!.style.transition= "all linear .8s" 
      },1000)
   

    



/* 
    const x = item[0].children[0].getAttribute('data-image')
    document.getElementById('backgroundimage')!.style.backgroundImage = url(${x})
    document.getElementById('backgroundimage')!.style.transition = "background-image .5s ease .5s" */
   
      item[0].children[0].classList.add('hover')
      item[1].children[0].classList.remove('hover') 

  
  }
}


export class Ressource{

  constructor(public image: string, public title : string, public sousTitle : string ){

  }
}