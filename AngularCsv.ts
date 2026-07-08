export interface Options {
    filename: string;
    fieldSeparator: string;
    quoteStrings: string;
    decimalseparator: string;
    showLabels: boolean;
    showTitle: boolean;
    title: string;
    useBom: boolean;
    headers: string[];
    noDownload: boolean;
    nullToEmptyString: boolean;
}

export class CsvConfigConsts {

    public static EOL = "\r\n";
    public static BOM = "\ufeff";

    public static DEFAULT_FIELD_SEPARATOR = ',';
    public static DEFAULT_DECIMAL_SEPARATOR = '.';
    public static DEFAULT_QUOTE = '"';
    public static DEFAULT_SHOW_TITLE = false;
    public static DEFAULT_TITLE = 'My Report';
    public static DEFAULT_FILENAME = 'mycsv.csv';
    public static DEFAULT_SHOW_LABELS = false;
    public static DEFAULT_USE_BOM = true;
    public static DEFAULT_HEADER: any[] = [];
    public static DEFAULT_NO_DOWNLOAD = false;
    public static DEFAULT_NULL_TO_EMPTY_STRING = false;

}

export const ConfigDefaults: Options = {
    filename: CsvConfigConsts.DEFAULT_FILENAME,
    fieldSeparator: CsvConfigConsts.DEFAULT_FIELD_SEPARATOR,
    quoteStrings: CsvConfigConsts.DEFAULT_QUOTE,
    decimalseparator: CsvConfigConsts.DEFAULT_DECIMAL_SEPARATOR,
    showLabels: CsvConfigConsts.DEFAULT_SHOW_LABELS,
    showTitle: CsvConfigConsts.DEFAULT_SHOW_TITLE,
    title: CsvConfigConsts.DEFAULT_TITLE,
    useBom: CsvConfigConsts.DEFAULT_USE_BOM,
    headers: CsvConfigConsts.DEFAULT_HEADER,
    noDownload: CsvConfigConsts.DEFAULT_NO_DOWNLOAD,
    nullToEmptyString: CsvConfigConsts.DEFAULT_NULL_TO_EMPTY_STRING
};

export class AngularCsv {

    public fileName: string;
    public labels: Array<String>;
    public data: any[];

    private _options: Options;
    private csv = "";

    constructor(DataJSON: any, filename: string, options?: any) {
        const config = options || {};

        this.data = typeof DataJSON !== 'object' ? JSON.parse(DataJSON) : DataJSON;

        this._options = Object.assign({}, ConfigDefaults, config);

        if (this._options.filename) {
            this._options.filename = filename;
        }

        this.generateCsv();
    }

    /**
     * Generate and Download Csv
     */
    private generateCsv() {
        if (this._options.useBom) {
            this.csv += CsvConfigConsts.BOM;
        }

        if (this._options.showTitle) {
            this.csv += this._options.title + '\r\n\n';
        }

        this.getHeaders();
        this.getBody();

        if (this.csv === '') {
            console.log("Invalid data");
            return;
        }

        if (this._options.noDownload) {
            return this.csv;
        }

        const blob = new Blob([this.csv], { type: "text/csv;charset=utf8;" });
        const uri = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = uri;
        link.setAttribute('visibility', 'hidden');
        link.download = this._options.filename.replace(/ /g, "_") + ".csv";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(uri);
    }

    /**
     * Create Headers
     */
    getHeaders(): void {
        if (this._options.headers.length > 0) {
            const { headers } = this._options;
            let row = headers.reduce((headerRow, header) => {
                return headerRow + header + this._options.fieldSeparator;
            }, '');
            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    }

    /**
     * Create Body
     */
    getBody() {
        for (let i = 0; i < this.data.length; i++) {
            let row = "";
            for (const index in this.data[i]) {
                row += this.formatData(this.data[i][index]) + this._options.fieldSeparator;
            }

            row = row.slice(0, -1);
            this.csv += row + CsvConfigConsts.EOL;
        }
    }

    /**
     * Format Data
     * @param {any} data
     */
    formatData(data: any) {

        if (this._options.decimalseparator === 'locale' && AngularCsv.isFloat(data)) {
            return data.toLocaleString();
        }

        if (this._options.decimalseparator !== '.' && AngularCsv.isFloat(data)) {
            return data.toString().replace('.', this._options.decimalseparator);
        }

        if (typeof data === 'string') {
            data = data.replace(/"/g, '""');
            if (this._options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
                data = this._options.quoteStrings + data + this._options.quoteStrings;
            }
            return data;
        }

        if (this._options.nullToEmptyString) {
            if (data === null) {
                return '';
            }
            return data;
        }

        if (typeof data === 'boolean') {
            return data ? 'TRUE' : 'FALSE';
        }
        return data;
    }

    /**
     * Check if is Float
     * @param {any} input
     */
    static isFloat(input: any) {
        return +input === input && (!isFinite(input) || Boolean(input % 1));
    }
}

/** @deprecated Use AngularCsv instead */
export { AngularCsv as Angular5Csv };
