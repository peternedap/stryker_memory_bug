module.exports = function(config) {
  config.set({

    //[Mutators]
    mutator: {
        name: "typescript",
        //Exclude StringLiteral mutations, as strings are mainly used in toString() and new Error() functions
        excludedMutations: ["StringLiteral"],
    },
    transpilers: ["typescript"],
    tsconfigFile: "tsconfig.json",
    mutate: ["lib/**/*.ts"],
    //[Testers]
    reporters: ["clear-text", "progress"],
    testFramework: 'mocha',
    coverageAnalysis: "perTest",
    testRunner: "mocha",
    mochaOptions: {
        files: "dist/test/**/*.test.js"
    },

    //[Other]
    packageManager: "yarn",
  });
};
