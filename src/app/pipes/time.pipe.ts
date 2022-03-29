import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {

   transform(time: number | null | undefined, isUTC = false): string {
      if (!time) {
         return '';
      } else {
         const date = new Date(time);
         let hours = date.getHours();
         let minutes = date.getMinutes();

         const ampm = hours >= 12 ? 'PM' : 'AM';
         hours = hours % 12;
         const strHours = hours ? hours.toString() : '12';
         const strMinutes = minutes < 10 ? '0' + minutes : minutes;

         return `${strHours}:${strMinutes} ${ampm}`;
      }
   }
}
