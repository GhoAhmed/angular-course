import { Routes } from '@angular/router';
import { HelloComponent } from './components/sections/hello/hello.component';
import { InputComponent } from './components/sections/input/input.component';
import { OutputComponent } from './components/sections/output/output.component';
import { InterpolationComponent } from './components/sections/interpolation/interpolation.component';
import { ListenerComponent } from './components/sections/listener/listener.component';
import { TwbComponent } from './components/sections/twb/twb.component';
import { ControlFlowComponent } from './components/sections/control-flow/control-flow.component';

export const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'listener', component: ListenerComponent },
  { path: 'two-way-binding', component: TwbComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: '**', redirectTo: '' },
];
