![angular_logo](https://user-images.githubusercontent.com/4659608/37036392-9bf53686-2160-11e8-95fc-bbab638d7d60.png)

# angular-csv | Export to CSV in Angular

[![npm version](https://badge.fury.io/js/angular-csv.svg)](https://badge.fury.io/js/angular-csv)
[![GitHub license](https://img.shields.io/github/license/ehsanshrz/angular-csv.svg)](https://github.com/ehsanshrz/angular-csv)
![Angular](https://img.shields.io/badge/Angular-%3E%3D14.0-red.svg)
![npm](https://img.shields.io/npm/dm/angular-csv.svg)

> A helper library for creating CSV files in Angular.

## Installation

```bash
npm install --save angular-csv
```

## Example

```javascript
import { AngularCsv } from 'angular-csv/dist/Angular-csv';

var data = [
  {
    name: "Test 1",
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

## API | **AngularCsv(data, filename, options)**

| Option        | Default           | Description  |
| :------------- |:-------------:| -----|
| **fieldSeparator**      | , | Defines the field separator character |
| **quoteStrings**      | "      | If provided, will use this characters to "escape" fields, otherwise will use double quotes as default |
| **decimalseparator** | .      | Defines the decimal separator character (default is .). If set to "locale", it uses the [language sensitive representation of the number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString).|
| **showLabels** | false      | If provided, would use this attribute to create a header row |
| **showTitle** | false      |   |
| **title** | 'My Report'      | Title of the CSV file, shown when `showTitle` is true |
| **useBom** | true      | If true, adds a BOM character at the start of the CSV |
| **useHeader** | false      | If true, only fields listed in `headers` will be exported |
| **useObjHeader** | false      | If true, uses `objHeader` keys as export order and values as labels |
| **noDownload** | false      | If true, disables automatic download and returns only formatted CSV |
| **headers** | []      | Array of column header labels |
| **objHeader** | {}      | Object map of data keys to custom labels |
| **nullToEmptyString** | false      | If true, all null values will be changed to empty strings |

## Options Example

```javascript
var options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Your title',
  useBom: true,
  noDownload: true,
  headers: ["First Name", "Last Name", "ID"],
  useHeader: false,
  nullToEmptyString: true,
};

new AngularCsv(data, filename, options);
```

## Credits

* [sn123](https://github.com/sn123)
* [arf1980](https://github.com/arf1980)
* [rob-moore](https://github.com/rob-moore)
