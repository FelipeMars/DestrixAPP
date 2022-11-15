import { Injectable } from '@angular/core';

const ITEM_STRINGIFIED_IDENTIFIER = '%OBJECT_STRINGFIED%';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageUtil {
  constructor() {}

  public setItem(key: string, item: any): void {
    if (typeof item !== 'string') {
      item = JSON.stringify(item);
      item += ITEM_STRINGIFIED_IDENTIFIER;
    }

    localStorage.setItem(key, item);
  }

  public getItem(key: string): any {
    let item = localStorage.getItem(key);

    if (item?.includes(ITEM_STRINGIFIED_IDENTIFIER)) {
      item = item.replace(ITEM_STRINGIFIED_IDENTIFIER, '');
      item = JSON.parse(item);
    }

    return item;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
