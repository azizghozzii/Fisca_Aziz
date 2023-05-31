import { Injectable,NgModule } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { RouterModule, Routes, TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { ContactUsComponent } from './components/contactUs/contactUs.component';
import { HomeComponent } from './components/home/home.component';
import { InvestissementsComponent } from './components/Investissements/Investissements.component';
import { AutorisationComponent } from './components/Investissements/Autorisations/Autorisation/Autorisation.component';
import { CadreComponent } from './components/Investissements/Cadre/Cadre/Cadre.component';
import { DeclarationComponent } from './components/Investissements/Déclaration/Declaration/Declaration.component';
import { FinanciersComponent } from './components/Investissements/Financiers/Financiers/Financiers.component';
import { FiscauxComponent } from './components/Investissements/Fiscaux/Fiscaux/Fiscaux.component';
import { RessourceLegaleComponent } from './components/ressource-legale/ressource-legale.component';
import { PDFComponent } from './components/PDF/PDF.component';
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contactUs",title: "contactUs", component: ContactUsComponent},
  {path: "Investissement",title: "Investissement", component: InvestissementsComponent},
  {path: "Autorisation",title: "Autorisation", component: AutorisationComponent},
  {path: "Cadre",title: "Cadre", component: CadreComponent},
  {path: "Declaration",title: "Declaration", component: DeclarationComponent},
  {path: "Financiers",title: "Financiers", component: FinanciersComponent},
  {path: "Fiscaux",title: "Fiscaux", component: FiscauxComponent},
  {path: "PDF",title: "PDF", component: PDFComponent},
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`App | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule { }
