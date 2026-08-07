![angular_logo](https://user-images.githubusercontent.com/4659608/37036392-9bf53686-2160-11e8-95fc-bbab638d7d60.png)

# angular-csv | Export to CSV in Angular

[![npm version](https://badge.fury.io/js/angular-csv.svg)](https://badge.fury.io/js/angular-csv)
[![GitHub license](https://img.shields.io/github/license/ehsanshrz/angular-csv.svg)](https://github.com/ehsanshrz/angular-csv)
![Angular](https://img.shields.io/badge/Angular-%3E%3D17.0-red.svg)
![Node](https://img.shields.io/badge/Node-%3E%3D20.0-green.svg)
![npm](https://img.shields.io/npm/dm/angular-csv.svg)

> A helper library for creating and downloading CSV files in Angular.

## Installation

```bash
npm install --save angular-csv
```

## Example

```typescript
import { AngularCsv } from 'angular-csv/dist/Angular-csv';

const data = [
  {
    name: 'Test 1',
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 2',
    age: 11,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  }
];

new AngularCsv(data, 'My Report');
```

## API | **AngularCsv(data, filename, options?)**

| Option | Default | Description |
| :--- | :---: | --- |
| **fieldSeparator** | `,` | Defines the field separator character |
| **quoteStrings** | `"` | Character used to quote string fields |
| **decimalseparator** | `.` | Defines the decimal separator character. Set to `"locale"` to use the [locale-sensitive representation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) |
| **showLabels** | `false` | When `true`, uses `headers` to create a header row |
| **showTitle** | `false` | When `true`, adds the `title` as the first line |
| **title** | `'My Report'` | Title shown at the top of the file when `showTitle` is `true` |
| **useBom** | `true` | Prepends a BOM character (`\ufeff`) to improve Excel compatibility |
| **useHeader** | `false` | When `true`, only fields whose keys are listed in `headers` are exported |
| **useObjHeader** | `false` | When `true`, uses `objHeader` keys as export order and values as column labels |
| **noDownload** | `false` | When `true`, disables automatic download and returns the formatted CSV string instead |
| **headers** | `[]` | Array of column header labels (or field keys when `useHeader` is `true`) |
| **objHeader** | `{}` | Object map of data keys to custom column labels, also controls export order |
| **nullToEmptyString** | `false` | When `true`, converts `null` values to empty strings |

## Options Example

```typescript
const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Your Title',
  useBom: true,
  noDownload: false,
  headers: ['First Name', 'Last Name', 'ID'],
  useHeader: false,
  nullToEmptyString: true,
};

new AngularCsv(data, 'filename', options);
```

## Retrieving the CSV String

Pass `noDownload: true` to suppress the automatic download and get the raw CSV back:

```typescript
const options = { noDownload: true };
const csv = new AngularCsv(data, 'My Report', options).getCsvData();
console.log(csv);
```

## Credits

* [sn123](https://github.com/sn123)
* [arf1980](https://github.com/arf1980)
* [rob-moore](https://github.com/rob-moore)
