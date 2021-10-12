import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditTrailService {

  constructor() { }

  execution(oldObject, newObject) {
    const objectArray = Object.entries(this.deepDifferential().map(oldObject, newObject));

    const trails = [];
    objectArray.forEach(([key, value]) => {
      if (value[`type`] !== 'unchanged') {
        trails.push({
          field: key,
          type: value[`type`],
          newValue: value[`newValue`],
          prevValue: value[`type`] === 'Created' ? 'Nil' : value[`oldValue`]
        });
      }
    });

    return trails;
  }

  deepDifferential() {
    return {
      VALUE_CREATED: 'Created',
      VALUE_UPDATED: 'Updated',
      VALUE_DELETED: 'Deleted',
      VALUE_REMOVED: 'Removed',
      VALUE_UNCHANGED: 'unchanged',

      map(obj1, obj2) {
        let key;
        if (this.isFunction(obj1) || this.isFunction(obj2)) {
          throw new Error('Invalid argument. Function given, object expected.');
        }
        if (this.isValue(obj1) || this.isValue(obj2)) {

          return {
            type: this.compareValues(obj1, obj2),
            oldValue: obj1 === undefined ? obj2 : obj1,
            newValue: obj2 === undefined ? 'Deleted' : obj2
          };
        }

        const diff = {};
        for (key in obj1) {
          if (this.isFunction(obj1[key])) {
            continue;
          }

          let value2;
          if (obj2[key] !== undefined) {
            value2 = obj2[key];
          }

          diff[key] = this.map(obj1[key], value2);
        }
        for (key in obj2) {
          if (this.isFunction(obj2[key]) || diff[key] !== undefined) {
            continue;
          }

          diff[key] = this.map(undefined, obj2[key]);
        }

        return diff;

      },

      compareValues(value1, value2) {
        if (value1 === value2) {
          return this.VALUE_UNCHANGED;
        }
        if (this.isDate(value1) && this.isDate(value2) && value1.getTime() === value2.getTime()) {
          return this.VALUE_UNCHANGED;
        }
        if (value1 === undefined) {
          return this.VALUE_CREATED;
        }
        if (value2 === undefined) {
          return this.VALUE_DELETED;
        }
        if (value2 === '') {
          return this.VALUE_REMOVED;
        }
        return this.VALUE_UPDATED;
      },

      isFunction(x) {
        return Object.prototype.toString.call(x) === '[object Function]';
      },

      isArray(x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      },

      isDate(x) {
        return Object.prototype.toString.call(x) === '[object Date]';
      },

      isObject(x) {
        return Object.prototype.toString.call(x) === '[object Object]';
      },

      isValue(x) {
        return !this.isObject(x) && !this.isArray(x);
      }

    };
  }

}
