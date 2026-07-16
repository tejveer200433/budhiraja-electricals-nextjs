"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_integrations_supabase_client_ts";
exports.ids = ["_ssr_src_integrations_supabase_client_ts"];
exports.modules = {

/***/ "(ssr)/./src/integrations/supabase/client.ts":
/*!*********************************************!*\
  !*** ./src/integrations/supabase/client.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(ssr)/./node_modules/@supabase/supabase-js/dist/index.mjs\");\n\nconst supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;\nconst supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;\nif (!supabaseUrl || !supabaseKey) {\n    throw new Error(\"Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY\");\n}\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvaW50ZWdyYXRpb25zL3N1cGFiYXNlL2NsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRDtBQUVyRCxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNDLHdCQUF3QjtBQUN4RCxNQUFNQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9DQUFvQztBQUVwRSxJQUFJLENBQUNMLGVBQWUsQ0FBQ0ksYUFBYTtJQUNoQyxNQUFNLElBQUlFLE1BQU07QUFDbEI7QUFFTyxNQUFNQyxXQUFXUixtRUFBWUEsQ0FBQ0MsYUFBYUksYUFBYSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIUFxcRG93bmxvYWRzXFxidWRoaXJhamEtZWxlY3RyaWNhbHMtbmV4dGpzXFxzcmNcXGludGVncmF0aW9uc1xcc3VwYWJhc2VcXGNsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9QVUJMSVNIQUJMRV9LRVk7XG5cbmlmICghc3VwYWJhc2VVcmwgfHwgIXN1cGFiYXNlS2V5KSB7XG4gIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIG9yIE5FWFRfUFVCTElDX1NVUEFCQVNFX1BVQkxJU0hBQkxFX0tFWVwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUtleSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VLZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9QVUJMSVNIQUJMRV9LRVkiLCJFcnJvciIsInN1cGFiYXNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./src/integrations/supabase/client.ts\n");

/***/ })

};
;