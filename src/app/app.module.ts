import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: $localize`:@@app.routes.hello:hello0`, component: HelloComponent, pathMatch: 'full' },
  { path: $localize`:@@app.routes.hello1:hello1`, component: HelloComponent, pathMatch: 'full' },
  { path: '**', component: HelloComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
  }),
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
