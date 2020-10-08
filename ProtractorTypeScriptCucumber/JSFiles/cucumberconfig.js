"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        // tags:"@AngularTesting",
        format: 'json:./cucumberreport.json',
        require: [
            './stepDefinations/*.js',
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUVBQW1EO0FBS3hDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM3QyxtREFBbUQ7SUFDbkQsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHOUQsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzVCLDBCQUEwQjtRQUN6QixNQUFNLEVBQUMsNEJBQTRCO1FBR25DLE9BQU8sRUFBRTtZQUNQLHdCQUF3QjtTQUV6QjtLQUNGO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFHM0IsQ0FBQztDQUlKLENBQUMifQ==