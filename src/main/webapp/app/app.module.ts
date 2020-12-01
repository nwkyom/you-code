import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { YouCodeSharedModule } from 'app/shared/shared.module';
import { YouCodeCoreModule } from 'app/core/core.module';
import { YouCodeAppRoutingModule } from './app-routing.module';
import { YouCodeHomeModule } from './home/home.module';
import { YouCodeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    YouCodeSharedModule,
    YouCodeCoreModule,
    YouCodeHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    YouCodeEntityModule,
    YouCodeAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class YouCodeAppModule {}
