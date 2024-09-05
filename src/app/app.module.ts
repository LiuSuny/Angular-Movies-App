import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './modules/app.routes';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyCustomIfDirective } from './directives/my-custom-if.directive';

//import HTTPCLIENT module
import {HttpClientModule} from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    FooterComponent,
    DetailsActorsComponent,
    NotFoundComponent,
    FeedbackComponent,

    //pipe
    ProfitPipe,
    HeaderDirective,
    MyCustomIfDirective
  ],
  
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule,

    //for Auth0 injecting
    AuthModule.forRoot({
      domain: 'dev-ltqker5x61clez63.us.auth0.com',
      clientId: 'PplYgJLmJPswvBqwMLx0ltFk5enZBPUY',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [MoviesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
