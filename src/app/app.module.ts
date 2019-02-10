import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SourceTitleComponent } from './shared/components/headline/headline.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlePreviewComponent } from './pages/article-preview/article-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SourceTitleComponent,
    HomeComponent,
    ButtonComponent,
    ArticleComponent,
    ArticlePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
