import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule, 
 } from '@angular/material';
 import {MatDatepickerModule} from '@angular/material/datepicker';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatNativeDateModule} from '@angular/material';
 import {MatInputModule} from '@angular/material';
 import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule, 
    MatDatepickerModule,
    MatFormFieldModule, 
    MatNativeDateModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
