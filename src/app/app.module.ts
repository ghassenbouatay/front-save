import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SortieComponent } from './sortie/sortie.component';
import { FormsModule } from '@angular/forms';
import { NgbButtonsModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, FilterService, MessageService, PrimeNGConfig } from 'primeng/api';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { NavBarComponent } from './shared/component/nav-bar/nav-bar.component';
import { SaverComponent } from './saver/saver.component';
import { SurviverComponent } from './surviver/surviver.component';
import { BoatComponent } from './boat/boat.component';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SortieComponent,
    SidebarComponent,
    NavBarComponent,
    SaverComponent,
    SurviverComponent,
    BoatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbButtonsModule,
    NgbModule,
    BrowserAnimationsModule,
    DialogModule,
    ReactiveFormsModule,
    NgbButtonsModule,
    ButtonModule,ConfirmDialogModule

  ],
  providers: [PrimeNGConfig,FilterService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
