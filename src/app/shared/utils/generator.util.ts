import { Injectable } from '@angular/core';

const ALPHABET_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const DEFAULT_STRING_SIZE = 16;

@Injectable({
  providedIn: 'root',
})
export class GeneratorUtil {
  constructor() {}

  public randomStringCode(
    size: number = DEFAULT_STRING_SIZE,
    uppercase: boolean = true,
    lowecase: boolean = true,
    number: boolean = true
  ): string {
    let code: string = '';

    let characters = '';
    if (uppercase) characters += ALPHABET_UPPERCASE;
    if (lowecase) characters += ALPHABET_LOWERCASE;
    if (number) characters += NUMBERS;

    while (code.length < size)
      code += characters[Math.floor(Math.random() * (characters.length - 1))];

    return code;
  }
}
