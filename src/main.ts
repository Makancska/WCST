import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import localeHu from '@angular/common/locales/hu'
import { AppModule } from './app/app.module';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeHu, 'hu')

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
