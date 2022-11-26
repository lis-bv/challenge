import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAssetPath } from '@esri/calcite-components/dist/components';
import { AppModule } from './app/app.module';

setAssetPath('./assets');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
