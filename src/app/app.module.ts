import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Main } from './pages/main/main';
import { HomePage } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './services/UserService/user.service';
import { RemoteCallsManagerService } from './providers/RemoteCallsManager/remote-calls-manager.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Main,
    HomePage,
    CardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    RemoteCallsManagerService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
