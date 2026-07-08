![angular_csv_logo](https://user-images.githubusercontent.com/4659608/37036392-9bf53686-2160-11e8-95fc-bbab638d7d60.png)

# angular-csv | Export to CSV in Angular


[![Build Status](https://travis-ci.org/ehsanshrz/angular-csv.svg?branch=master)](https://travis-ci.org/ehsanshrz/angular-csv)
[![npm version](https://badge.fury.io/js/angular-csv.svg)](https://badge.fury.io/js/angular-csv)
[![GitHub license](https://img.shields.io/github/license/ehsanshrz/angular-csv.svg)](https://github.com/ehsanshrz/angular-csv)

> A helper library for creating CSV files in Angular.

## Installation

```bash
npm install --save angular-csv
```

## Example

```javascript
import { AngularCsv } from 'angular-csv/dist/AngularCsv';

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
  },
  {
    name: 'Test 4',
    age: 10,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
];

new AngularCsv(data, 'My Report');
```

## API | **AngularCsv(data, filename, options)**

| Option              | Default     | Description  |
| :------------------ |:-----------:| -----|
| **fieldSeparator**  | ,           | Defines the field separator character |
| **quoteStrings**    | "           | If provided, will use this character to "escape" fields, otherwise will use double quotes as default |
| **decimalseparator**| .           | Defines the decimal separator character (default is `.`). If set to `"locale"`, it uses the [language sensitive representation of the number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString). |
| **showLabels**      | false       | If provided, uses this attribute to create a header row |
| **showTitle**       | false       | If true, adds the title as the first row of the CSV |
| **title**           | My Report   | The title to use when `showTitle` is true |
| **useBom**          | true        | If true, adds a BOM character at the start of the CSV |
| **noDownload**      | false       | If true, disables automatic download and returns only the formatted CSV string |
| **headers**         | []          | Array of column headers |
| **nullToEmptyString**| false      | If true, all null values will be changed to empty strings |

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
  nullToEmptyString: true,
};

new AngularCsv(data, filename, options);
```

## Migration from angular5-csv

If you were using `angular5-csv`, replace your imports:

```javascript
// Before
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

// After
import { AngularCsv } from 'angular-csv/dist/AngularCsv';
```

The `Angular5Csv` class is still exported as a deprecated alias for backwards compatibility.

## Credits

* [sn123](https://github.com/sn123)
* [arf1980](https://github.com/arf1980)
* [rob-moore](https://github.com/rob-moore)
