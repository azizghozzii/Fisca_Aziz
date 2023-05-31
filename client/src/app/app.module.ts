import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './Material.Module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';
import { ScrollButtonComponent } from './shared/scroll-button/scroll-button.component';
import { RessourceLegaleComponent } from './components/ressource-legale/ressource-legale.component';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { PDFComponent } from './components/PDF/PDF.component';
import { NextDirective } from './components/home/home.component'; 
import { PrevDirective } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    ScrollButtonComponent,
    RessourceLegaleComponent,
    PDFComponent,
    NextDirective,
    PrevDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
