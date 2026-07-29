var configuration = {
    frameworks: ["jasmine", "karma-typescript"],

    files: [
        'Angular-csv.spec.ts'
    ],

    preprocessors: {
        "**/*.ts": ["karma-typescript"]
    },

    karmaTypescriptConfig: {
        tsconfig: "./tsconfig.json",
        bundlerOptions: {
            entrypoints: /\.spec\.ts$/
        }
    },

    reporters: ["progress", "karma-typescript"],
    customLaunchers: {
        ChromeHeadlessNoSandbox: {
            base: 'ChromeHeadless',
            flags: ['--no-sandbox']
        }
    },
    browsers: ["ChromeHeadlessNoSandbox"]
};

module.exports = function (config) {
    config.set(configuration);
};
