// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // weatherApiBaseUrl:'https://open-weather-map27.p.rapidapi.com/weather',
  // XRapidAPIHost:'X-RapidAPI-Host',
  // XRapidAPIHostValue:'open-weather-map27.p.rapidapi.com',
  // XRapidAPIKey :'X-RapidAPI-Key',
  // XRapidAPIKeyValue :'94cbf624cdmsha560b956f45a9f0p16a7c3jsn988ab6dd89e5'
  weatherApiBaseUrl:'http://api.weatherstack.com/current?',
  // weatherApiKey : 'dd160f2bd1980c6fee8490b6a689f012'
  weatherApiKey : '8a1b0427945eb413cf085cb4d8767427'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
