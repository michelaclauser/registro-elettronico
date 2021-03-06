import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule, MatFormFieldModule, MatListModule, MatCardModule, MatProgressSpinnerModule, MatInputModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatMenuModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      AppRoutingModule,
      MatCardModule,
      MatProgressSpinnerModule, 
      MatInputModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
