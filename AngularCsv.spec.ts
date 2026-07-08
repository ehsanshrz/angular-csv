/* tslint:disable:no-unused-variable */

import { AngularCsv, CsvConfigConsts } from './AngularCsv';

describe('Component: AngularCsv', () => {

    it('should create an file with name My_Report.csv', () => {
        let component = new AngularCsv([{name: 'test', age: 20}], 'My Report');
        expect(component).toBeTruthy();
    });

    it('should return correct order', () => {
        let component = new AngularCsv([{name: 'test', age: 20}], 'My Report', {useBom: false});
        let csv = component['csv'];
        let csv_rows = csv.split(CsvConfigConsts.EOL);
        let first_row = csv_rows[0].replace(/"/g, '').split(',');
        expect(first_row[0]).toEqual('test');
        expect(first_row[1]).toBe("" + 20);
    });

    it('should return csv with title', () => {
        let component = new AngularCsv([{name: 'test', age: 20}], 'My Report', {showTitle: true, useBom: false});
        let csv = component['csv'];
        let title = csv.split(CsvConfigConsts.EOL)[0];
        expect(title).toEqual('My Report');
    });

    it('should return csv file with custom field separator', () => {
        let component = new AngularCsv([{name: 'test', age: 20}], 'My Report', {useBom: false, fieldSeparator: ';'});
        let csv = component['csv'];
        let first_row = csv.split(CsvConfigConsts.EOL)[0];
        expect(first_row.split(';').length).toBe(2);
    });

    it('should return csv file with custom quote strings', () => {
        let component = new AngularCsv([{name: 'test', age: 20}], 'My Report', {useBom: false, quoteStrings: '|'});
        let csv = component['csv'];
        let first_row = csv.split(CsvConfigConsts.EOL)[0].split(',');
        expect(first_row[0]).toMatch('\\|.*\\|');
    });

    it('should return csv file with correct header labels', () => {
        let component = new AngularCsv([{name: 'test', age: 20}], 'My Report', {
            useBom: false,
            showLabels: true,
            headers: ["name", "age"]
        });
        let csv = component['csv'];
        let labels = csv.split(CsvConfigConsts.EOL)[0].split(',');
        expect(labels[0]).toEqual('name');
        expect(labels[1]).toEqual('age');
    });

    it('should return nulls as empty strings if the option is selected', () => {
        let component = new AngularCsv([{name: null, age: null}], 'My Report', {useBom: false, nullToEmptyString: true});
        let csv = component['csv'];
        let csv_rows = csv.split(CsvConfigConsts.EOL);
        let first_row = csv_rows[0].replace(/"/g, '').split(',');
        expect(first_row[0]).toEqual('');
        expect(first_row[1]).toBe('');
    });
});
