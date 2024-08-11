import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  console.log('starting the application!!!');
  console.warn('be careful with what you wish');
  console.error('This is TERRIBLEEEEE');
