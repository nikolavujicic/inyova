import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatDate',
  standalone: true
})
export class ConcatDatePipe implements PipeTransform {
  transform(value: { day: number, month: number, year: number }): string {
    return `${value.day}/${value.month}/${value.year}`;
  }
}