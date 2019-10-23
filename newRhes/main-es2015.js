(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/material.css\" />\n<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"mdb.css\" /> -->\n<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/style.css\" />\n\n\n\n<div class=\"container\">\n   <div class=\"card cardmain\">\n      <div class=\"card cardhead\">\n         Encounter Details\n      </div>\n      <div class=\"row\">\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Department *</mat-label>\n               <mat-select>\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"option1\">Cardiology</mat-option>\n                  <mat-option value=\"option2\">Account & Finance</mat-option>\n                  <mat-option value=\"option3\">Dental</mat-option>\n                  <mat-option value=\"option3\">ENT</mat-option>\n                  <mat-option value=\"option3\">Nephrology</mat-option>\n                  <mat-option value=\"option3\">Neurology</mat-option>\n                  <mat-option value=\"option3\">Radiology</mat-option>\n                  <mat-option value=\"option3\">Physiotherapy</mat-option>\n               </mat-select>\n            </mat-form-field>\n         </div>\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Consultant</mat-label>\n               <mat-select>\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"option1\">Option 1</mat-option>\n                  <mat-option value=\"option2\">Option 2</mat-option>\n                  <mat-option value=\"option3\">Option 3</mat-option>\n               </mat-select>\n            </mat-form-field>\n         </div>\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Unit</mat-label>\n               <mat-select>\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"option1\">Unit 1</mat-option>\n                  <mat-option value=\"option2\">Unit 2</mat-option>\n                  <mat-option value=\"option3\">Unit 3</mat-option>\n               </mat-select>\n            </mat-form-field>\n         </div>\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Consultation Category</mat-label>\n               <mat-select>\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"option1\">First Visit</mat-option>\n                  <mat-option value=\"option2\">Follow Up</mat-option>\n                  <mat-option value=\"option3\">Follow Up</mat-option>\n               </mat-select>\n            </mat-form-field>\n         </div>\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Consultation Type *</mat-label>\n               <mat-select class=\"typea\" id=\"Revisit\">\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"a\" mat-raised-button (click)=\"openBottomSheet()\">First Visit</mat-option>\n                  <mat-option value=\"b\" id=\"FollowUp\" mat-raised-button (click)=\"openBottomSheet1()\">Cross Consultation\n                  </mat-option>\n                  <mat-option value=\"a\" mat-raised-button (click)=\"openBottomSheet1()\">Daycare Dialysis</mat-option>\n                  <mat-option value=\"a\" mat-raised-button (click)=\"openBottomSheet1()\">Pshycology Visit</mat-option>\n                  <mat-option value=\"a\" mat-raised-button (click)=\"openBottomSheet()\">Pshychiatry First Visit\n                  </mat-option>\n                  <mat-option value=\"a\" mat-raised-button (click)=\"openBottomSheet1()\">Dermatology Procedure\n                  </mat-option>\n               </mat-select>\n            </mat-form-field>\n         </div>\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Referring Branch</mat-label>\n               <mat-select>\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"option1\">Branch1</mat-option>\n                  <mat-option value=\"option2\">Branch2</mat-option>\n                  <mat-option value=\"option1\">Branch3</mat-option>\n                  <mat-option value=\"option2\">Branch4</mat-option>\n\n               </mat-select>\n            </mat-form-field>\n         </div>\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Referring Department</mat-label>\n               <mat-select>\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"option1\">Cardiology</mat-option>\n                  <mat-option value=\"option2\">Account & Finance</mat-option>\n                  <mat-option value=\"option3\">Dental</mat-option>\n                  <mat-option value=\"option3\">ENT</mat-option>\n                  <mat-option value=\"option3\">Nephrology</mat-option>\n                  <mat-option value=\"option3\">Neurology</mat-option>\n                  <mat-option value=\"option3\">Radiology</mat-option>\n                  <mat-option value=\"option3\">Physiotherapy</mat-option>\n               </mat-select>\n            </mat-form-field>\n         </div>\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Referring Consultant</mat-label>\n               <mat-select>\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"option1\">Consultant1</mat-option>\n                  <mat-option value=\"option2\">Consultant2</mat-option>\n                  <mat-option value=\"option1\">Consultant3</mat-option>\n                  <mat-option value=\"option2\">Consultant4</mat-option>\n                  <mat-option value=\"option1\">Consultant5</mat-option>\n                  <mat-option value=\"option2\">Consultant6</mat-option>\n\n               </mat-select>\n            </mat-form-field>\n         </div>\n         <div class=\"col-md-3\">\n            <mat-form-field style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Discount Remarks</mat-label>\n               <mat-select>\n                  <mat-option>--Select--</mat-option>\n\n                  <mat-option value=\"option1\">Doctor Advised</mat-option>\n\n               </mat-select>\n            </mat-form-field>\n         </div>\n\n         <!-- <div class=\"col-md-1\"></div> -->\n         <div class=\"col-md-3\" style=\"color: white;\">\n\n            <mat-checkbox>Printed Case Sheet</mat-checkbox>\n         </div>\n         <div class=\"col-md-6\">\n            <div class=\"md-form form-sm\" style=\"color: white;\" appearance=\"outline\">\n               Payment Type : &nbsp;\n          \n            <mat-radio-group aria-label=\"Select an option\">\n               <mat-radio-button value=\"1\" checked=\"checked\">Cash&nbsp;&nbsp; &nbsp;\n               </mat-radio-button>\n               <mat-radio-button value=\"2\">Plan</mat-radio-button>\n            </mat-radio-group>  </div>\n         </div>\n            \n         <div class=\"col-md-12\">\n            <mat-form-field id=\"ea\" style=\"width: 100% !important;\" appearance=\"outline\">\n               <mat-label style=\"color: white;\">Remarks</mat-label>\n               <textarea style=\"color: white;\" matInput placeholder=\"Remarks\"></textarea>\n            </mat-form-field>\n         </div>\n\n      </div>\n\n\n   </div>\n</div>\n<!-- <div class=\"row\">\n   <div class=\"col-md-9\"></div>\n   <div class=\"col-md-3 card\" id=\"creation\" style=\"color: white; background-color: #004d79 ; display: none !important;\">\n      <div class=\"row\">\n\n         <div class=\"col-md-10\" style=\"width: 300px;\"> Encounter is Created succesfully </div>\n         <div class=\"col-md-1\">\n            <img src=\"../assets/icons/highlight_off-24px.svg\" alt=\"backbutton\"\n               style=\"padding-top: 0px !important;padding-right: 0px !important;\">\n         </div>\n      </div>\n   </div>\n</div> -->\n<!-- <div class=\"row\">\n<div class=\"col-md-8\"></div>\n   <div class=\"col-md-3 card\" id=\"creation\" style=\"color: white; background-color: #004d79 ; display: none !important;\">\n         <div class=\"col-md-10\" style=\"width: 300px;\"> Encounter is Created succesfully </div>\n   </div>\n   </div> -->\n   <div class=\"card\" id=\"creation\" style=\"width: 300px; float: right;text-align: center; color: white; background-color: #004d79 ; display: none !important;\">\n          Encounter is Created succesfully </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-encounter.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-encounter.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/material.css\" />\r\n<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"mdb.css\" /> -->\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/style.css\" />\r\n<style>\r\n    .mat-bottom-sheet-container::-webkit-scrollbar {\r\n        width: 0 !important\r\n    }\r\n\r\n    label {\r\n        color: rgb(0, 0, 0) !important;\r\n    }\r\n\r\n    .cardhead {\r\n        padding-top: 3px;\r\n        position: relative;\r\n        color: rgb(0, 0, 0);\r\n        display: flex;\r\n\r\n        flex-direction: column;\r\n        padding-bottom: -8px;\r\n        min-width: 0;\r\n        word-wrap: break-word;\r\n        background-color: #22fbe9 !important;\r\n        background-clip: border-box;\r\n        border: 1px solid rgba(0, 0, 0, .125);\r\n        border-radius: .25rem;\r\n        margin-left: -26px;\r\n        width: 330px;\r\n        padding-left: 27px;\r\n        height: 33px;\r\n        border-radius: 0px !important;\r\n        text-transform: uppercase;\r\n        padding-bottom: 7px;\r\n        padding-top: 7px;\r\n    }\r\n\r\n    #creation {\r\n        text-align: center;\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n        width: 100%;\r\n    }\r\n</style>\r\n<div id=\"bottomsheetA\">\r\n    <div class=\"card cardhead\" id=\"\">\r\n        Payment Details\r\n    </div>\r\n\r\n    <div class=\"card-body\" style=\"padding-bottom: 6px;\" id=\"\">\r\n        <div class=\"col-md col-sm col-lg\" style=\"padding-bottom: 6px;\">\r\n            <div class=\"row\" style=\"color: rgb(255, 255, 255); padding-bottom: 6px;\">\r\n\r\n\r\n\r\n                <div class=\"card\"\r\n                    style=\"padding-top: 10px; padding-bottom: 10px;margin-left: 20px; background-color: transparent;    padding-left: 0px;  margin-right: 20px; margin-top: 1px;\">\r\n\r\n\r\n                    <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n                        <mat-radio-button class=\"example-margin col-md-2\" value=\"after\">Cash\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin col-md-2\" value=\"before\">Cheque\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin col-md-3\" value=\"after1\">Credit/Debit Card\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin col-md-3\" value=\"before1\">Bank Transfer\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin col-md-2\" value=\"after2\">M-Pesa\r\n                        </mat-radio-button>\r\n\r\n                    </mat-radio-group>\r\n                </div>\r\n\r\n                <table style=\"color: rgb(255, 255, 255); width: 100%;\">\r\n\r\n                    <tbody>\r\n                        <tr>\r\n\r\n                            <td>Service Name</td>\r\n                            <td>CONSULTATION SERVICE</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Service Price</td>\r\n                            <td>450.00</td>\r\n                        </tr>\r\n                        <!-- <tr>\r\n                        <td>Discount Percentage</td>\r\n                        <td>\r\n                            <input class=\"form-control\" type=\"text\"\r\n                                style=\"width: 125px;background-color:transparent;height: 20px; box-shadow: none; color: rgb(255, 255, 255); border: none; border-bottom: 1.5px solid #ffffffc7;border-radius: 0;\" />\r\n                        </td>\r\n                    </tr> -->\r\n                        <tr>\r\n                            <td>Patient Amount</td>\r\n                            <td>450.00</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Net Amount</td>\r\n                            <td>450.00</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>RoundOff Amount</td>\r\n                            <td>0.00</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Payable Amount</td>\r\n                            <td> 450.0\r\n\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td></td>\r\n                            <td>\r\n                                Net Amount &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                450.00\r\n                                <br>\r\n                                RoundOff Amount &nbsp;&nbsp;&nbsp; 0.00 <br>\r\n                                Payable Amount &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 450.0\r\n                            </td>\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n                <div style=\"text-align: center;width: 100%;line-height: 30px !important;\">\r\n                    <!-- <button id=\"regbutton\" type=\"button\"  style=\"width: 220px;text-align: center;\"\r\n                               class=\"btn btn-rounded button glass clear-b\">Create Encounter</button> -->\r\n                    <mat-button-toggle id=\"btn\"\r\n                        style=\"      margin-bottom: 20px;  margin-top: 30px;height: 40px;line-height: 30px !important;width: 170px;text-align: center; background-color: #004d79; font-size: 18px;color: white;\">\r\n                        Create Encounter</mat-button-toggle>\r\n                </div>\r\n\r\n                <br><br>\r\n                <!-- <div class=\"card\" id=\"creation\" style=\"color: white; background-color: #004d79 ; display: none !important;\">\r\n              <div style=\"width: 300px;\">  Encounter is Created succesfully</div>\r\n            </div> -->\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-encounter1.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-encounter1.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/material.css\" />\r\n<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"mdb.css\" /> -->\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/style.css\" />\r\n\r\n\r\n<style>\r\n        .mat-bottom-sheet-container::-webkit-scrollbar { width: 0 !important }\r\n        .cardhead{\r\n  padding-top: 3px;\r\n    position: relative;\r\n    color: rgb(0, 0, 0);\r\n    display: flex;\r\n \r\n    flex-direction: column;\r\n    padding-bottom: -8px;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #22fbe9 !important;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: .25rem;\r\n    margin-left: -26px;\r\n    width: 330px;\r\n    padding-left: 27px;\r\n    height: 33px;\r\n    border-radius: 0px !important;\r\n    text-transform: uppercase;\r\n    padding-bottom: 7px;\r\n    padding-top: 7px;\r\n}\r\n\r\n</style>\r\n\r\n<div class=\"card cardhead\">\r\n    Payment Details\r\n</div>\r\n<div class=\"card-body shadow-sm cardBody\" style=\"padding-bottom: 6px;\">\r\n    <div class=\"col-md col-sm col-lg\" style=\"padding-bottom: 6px;\">\r\n        <div class=\"row\" style=\"color: rgb(255, 255, 255); padding-bottom: 6px;\">\r\n\r\n\r\n                <div class=\"card\" style=\"padding-top: 10px; padding-bottom: 10px;margin-left: 20px; background-color: transparent;    padding-left: 0px;  margin-right: 20px; margin-top: 1px;\">\r\n\r\n\r\n                    <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n                       <mat-radio-button class=\"example-margin col-md-2\" value=\"after\">Cash\r\n                       </mat-radio-button>\r\n                       <mat-radio-button class=\"example-margin col-md-2\" value=\"before\">Cheque\r\n                       </mat-radio-button>\r\n                       <mat-radio-button class=\"example-margin col-md-3\" value=\"after1\">Credit/Debit Card\r\n                       </mat-radio-button>\r\n                       <mat-radio-button class=\"example-margin col-md-3\" value=\"before1\">Bank Transfer\r\n                       </mat-radio-button>\r\n                       <mat-radio-button class=\"example-margin col-md-2\" value=\"after2\">M-Pesa\r\n                       </mat-radio-button>\r\n        \r\n                    </mat-radio-group>\r\n                 </div>\r\n\r\n            <table style=\"color: rgb(255, 255, 255); width: 100%;\">\r\n\r\n                <tbody>\r\n                    <tr>\r\n\r\n                        <td>Service Name</td>\r\n                        <td>-</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Service Price</td>\r\n                        <td>-</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Discount Percentage</td>\r\n                        <td>-</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Discount Amount</td>\r\n                        <td>-</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Service Tax</td>\r\n                        <td>-</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Patient Amount</td>\r\n                        <td>Net Amount  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    0.00 <br>\r\n                            RoundOff Amount &nbsp;&nbsp;&nbsp;  0.00 <br>\r\n                            Payable Amount &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  0.00</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n\r\n                     <div style=\"text-align: center;width: 100%;line-height: 30px !important;\">\r\n                            <!-- <button id=\"regbutton\" type=\"button\"  style=\"width: 220px;text-align: center;\"\r\n                                           class=\"btn btn-rounded button glass clear-b\">Create Encounter</button> -->\r\n                            <mat-button-toggle id=\"btn\"\r\n                                style=\"      margin-bottom: 20px;  margin-top: 30px;height: 40px;line-height: 30px !important;width: 170px;text-align: center; background-color: #004d79; font-size: 18px;color: white;\">\r\n                                Create Encounter</mat-button-toggle>\r\n                        </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<style>\r\n\r\n\r\n</style>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



// import { BottomSheetEncounter } from './app.component/BottomSheetEncounter'
const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardhead{\r\n  padding-top: 3px;\r\n    position: relative;\r\n    color: rgb(0, 0, 0);\r\n    display: flex;\r\n \r\n    flex-direction: column;\r\n    padding-bottom: -8px;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #22fbe9 !important;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: .25rem;\r\n    margin-left: -26px;\r\n    width: 330px;\r\n    padding-left: 27px;\r\n    height: 33px;\r\n    border-radius: 0px !important;\r\n    text-transform: uppercase;\r\n    padding-bottom: 7px;\r\n    padding-top: 7px;\r\n}\r\n#creation{\r\n  /* text-align: center; */\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  \r\n}\r\n.cardmain{\r\n  float: center;\r\n  /* width: 1000px;\r\n  height: 450px; */\r\n      background-color: #9e8484;\r\n      padding-right: 19px;\r\n      padding-left: 15px;\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      padding-top: 14px;\r\n      margin-top: 100px;\r\n      background-image: linear-gradient(to top, rgb(46, 155, 206) , rgb(7, 92, 117));\r\n  }\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.4em 0px !important;}\r\n::ng-deep .mat-form-field-label-wrapper { top: -1.5em; }\r\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\ntransform: translateY(-1.1em) scale(.75);\r\nwidth: 133.33333%;\r\n}\r\nlabel{\r\n  color: white !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7O0lBRWIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7QUFFdEI7QUFFQTtFQUNFLGFBQWE7RUFDYjtrQkFDZ0I7TUFDWix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsOEVBQThFO0VBQ2xGO0FBRUEseURBQXlELDZCQUE2QixDQUFDO0FBQ3pGLDBDQUEwQyxXQUFXLEVBQUU7QUFFdkQ7QUFDQSx3Q0FBd0M7QUFDeEMsaUJBQWlCO0FBQ2pCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkaGVhZHtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLThweDtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmZiZTkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTI2cHg7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxufVxyXG4jY3JlYXRpb257XHJcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIFxyXG59XHJcblxyXG4uY2FyZG1haW57XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuICAvKiB3aWR0aDogMTAwMHB4O1xyXG4gIGhlaWdodDogNDUwcHg7ICovXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZTg0ODQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE5cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoNDYsIDE1NSwgMjA2KSAsIHJnYig3LCA5MiwgMTE3KSk7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDt9XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbndpZHRoOiAxMzMuMzMzMzMlO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, BottomSheetEncounter, BottomSheetEncounter1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetEncounter", function() { return BottomSheetEncounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetEncounter1", function() { return BottomSheetEncounter1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");



let AppComponent = class AppComponent {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
        this.regtype = 'General';
        //checked = false;
        this.useDefault = false;
        this.title = 'Encounter';
        this.disabled = false;
        this.foods = [
            { value: '0', viewValue: '--Select--' },
            { value: '1', viewValue: 'Revisit' },
            { value: '2', viewValue: 'Discharge Free FollowUp' }
        ];
    }
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetEncounter, {
            panelClass: 'custom-width'
        });
    }
    openBottomSheet1() {
        this._bottomSheet.open(BottomSheetEncounter1, {
            panelClass: 'custom-width'
        });
    }
    triggerEvent(event) {
        //     if(event.checked==true){
        //         this.regtype="Quick";
        //         $('.RegistrationQuick').show();
        //         $('.MultiCarouselGeneral').hide();
        //         $('.quick').addClass('activequick');
        //         $('.RegName').addClass('quickname');
        //     }
        //     else{
        //         this.regtype="General";
        //         $('.MultiCarouselGeneral').show();
        //         $('.RegistrationQuick').hide();
        //         $('.quick').removeClass('activequick');
        //         $('.RegName').removeClass('quickname');
        //     }
        //     console.log('toggle', event.checked);
        //     this.useDefault = event.checked;
    }
    ngOnInit() {
        $("#creation").click(function () {
            $("#creation").hide();
        });
        $("#Revisit").click(function () {
            $('mat-option').click(function () {
                var reg = $(this).attr('id');
                // $("#regbutton").hide();
                // $("#regbutton1").show(200);
                // $("#container2").show(300);
            });
        });
        // $("#gr").change(function () {
        //   alert("jgvbfsdg");
        //   $("#regbutton").hide();
        //   // $("#regbutton1").show(200);
        //   $("#container2").show(300);
        // });
        $('.FollowUp').click(function () {
            $("#regbutton").hide();
            $("#regbutton1").show(200);
            $("#container2").show(200);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

let BottomSheetEncounter = class BottomSheetEncounter {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
        this.labelPosition = 'after';
    }
    ngOnInit() {
        $("#btn").click(function () {
            alert("(DEMO) Encounter is created Succesful");
        });
        $("#createbutton").click(function () {
            $("#creation").show(300);
            // $("#bottomsheetA").hide(300);
            // $('.cdk-overlay-dark-backdrop').hide();
            // $('.cdk-overlay-backdrop-showing').hide();
        });
    }
};
BottomSheetEncounter.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }
];
BottomSheetEncounter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bottom-sheet-encounter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bottom-sheet-encounter.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-encounter.html")).default,
    })
], BottomSheetEncounter);

let BottomSheetEncounter1 = class BottomSheetEncounter1 {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
        this.labelPosition = 'after';
        this.data = [
            { label: 'Cash', checked: false },
            { label: 'Cheque', checked: false },
            { label: 'Credit/Debit', checked: true },
            { label: 'Bank Transfer', checked: false },
            { label: 'M-Pesa', checked: false }
        ];
    }
    ngOnInit() {
        $("#btn").click(function () {
            alert("(DEMO) Encounter is created Succesful");
        });
        $("#createbutton").click(function () {
            $("#creation").show(300);
            // $("#bottomsheetA").hide(300);
            // $('.cdk-overlay-dark-backdrop').hide();
            // $('.cdk-overlay-backdrop-showing').hide();
        });
    }
    onChange(event, index, item) {
        item.checked = !item.checked;
        this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
        console.log(index, event, item);
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
};
BottomSheetEncounter1.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }
];
BottomSheetEncounter1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bottom-sheet-encounter1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bottom-sheet-encounter1.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-sheet-encounter1.html")).default,
    })
], BottomSheetEncounter1);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetEncounter"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetEncounter1"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"]
        ],
        providers: [],
        entryComponents: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetEncounter"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetEncounter1"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Diagnosis_Encounter2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map