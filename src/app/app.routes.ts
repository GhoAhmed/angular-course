import { Routes } from '@angular/router';
import { HelloComponent } from './components/sections/hello/hello.component';
import { PropertiesComponent } from './components/sections/properties/properties.component';

export const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: '**', redirectTo: '' },
];
