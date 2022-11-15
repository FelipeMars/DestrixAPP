import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtil {
  constructor() {}

  public generateDateByInputMasked(value: string): Date {
    value = value.toString();

    if (value.includes('/')) value = value.split('/').join('');

    const day = Number(value.substring(0, 2));
    const month = Number(value.substring(2, 4)) - 1;
    const year = Number(value.substring(4, 8));

    if (day === 0 || year === 0) throw value + ' is an invalid date string';

    return new Date(year, month, day);
  }

  public getInputableDate(date: Date): string {
    let day: string = date.getDate().toString();
    let month: string = (date.getMonth() + 1).toString();
    const year: string = date.getFullYear().toString();

    if (day.length === 1) day = '0' + day;
    if (month.length === 1) month = '0' + month;

    return `${day}/${month}/${year}`;
  }

  public getMonthName(month: number): string {
    switch (month) {
      case 0:
        return 'Janeiro';
      case 1:
        return 'Fevereiro';
      case 2:
        return 'Março';
      case 3:
        return 'Abril';
      case 4:
        return 'Maio';
      case 5:
        return 'Junho';
      case 6:
        return 'Julho';
      case 7:
        return 'Agosto';
      case 8:
        return 'Setembro';
      case 9:
        return 'Outubro';
      case 10:
        return 'Novembro';
      case 11:
        return 'Dezembro';
    }

    return 'NULL';
  }
}
