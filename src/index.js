'use strict';
/** 
 * @author github.com/tintinweb
 * @license MIT
 * 
 * 
 * */

/*
let metrics = new SolidityMetricsContainer("containerName", {
        basePath:"",
        inputFileGlobExclusions:undefined,
        inputFileGlob: undefined,
        inputFileGlobLimit: undefined,
        debug:false,
        repoInfo: {
            branch: undefined,
            commit: undefined,
            remote: undefined
        }
    });

    // analyze files
    metrics.analyze(path_to_solidity_file);
    // ...
    metrics.analyze(path_to_solidity_file_N);

    // output
    console.log(metrics.totals());
    console.log(metrics.generateReportMarkdown());
 */

export { SolidityMetricsContainer } from './metrics';