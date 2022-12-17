import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorted'
})
export class ShortedPipe implements PipeTransform {

  // transform(value: string, maxCount: 10): unknown {
  //   return `${value.substring(0, maxCount)}${value.length > maxCount ? `...` : ``}`;
  // }
  transform(value: string, limit: number = 30): string {
    // console.log('ShortenPipe#transform', value);
    if(value.length > limit) {
      return `${value.substring(0, limit - 3)}...`;
    }

    return value;
  }
}
