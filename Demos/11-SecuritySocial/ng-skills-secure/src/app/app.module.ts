import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from '@angular/fire/auth';
import { MaterialModule } from './material.module';
import { environment } from 'src/environments/environment';
import { FirebaseAuthService } from './firebase/firebase-auth.service';
import { FirebaseAuthInterceptor } from './firebase/firebase-auth.interceptor';
import { FBAuthModule } from './firebase/fbauth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AuthModule,
    MaterialModule,
    FBAuthModule,
  ],
  providers: [
    FirebaseAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseAuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
