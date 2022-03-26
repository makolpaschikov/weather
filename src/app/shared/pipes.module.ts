import { NgModule } from '@angular/core';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { TimePipe } from '../pipes/time.pipe';

@NgModule({
   imports: [
   ],
   declarations: [
      TemperaturePipe,
      TimePipe
   ],
   exports: [
      TemperaturePipe,
      TimePipe
   ]
})
export class ApplicationPipesModule { }