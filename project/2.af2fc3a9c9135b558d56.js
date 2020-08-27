(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/app/pipeline/dialog-content.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pipeline/dialog-content.component.ts ***!
  \******************************************************/
/*! exports provided: TicketDialogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDialogContent", function() { return TicketDialogContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");




// tslint:disable-next-line: component-class-suffix
let TicketDialogContent = /*@__PURE__*/ (() => {
    class TicketDialogContent {
        constructor(dialogRef, 
        // @Optional() is used to prevent error if no data is passed
        data) {
            this.dialogRef = dialogRef;
            this.data = data;
            //  console.log(data);
            this.local_data = Object.assign({}, data);
            this.action = this.local_data.action;
        }
        doAction() {
            this.dialogRef.close({ event: this.action, data: this.local_data });
        }
        closeDialog() {
            this.dialogRef.close({ event: 'Cancel' });
        }
    }
    TicketDialogContent.ɵfac = function TicketDialogContent_Factory(t) { return new (t || TicketDialogContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8)); };
    TicketDialogContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketDialogContent, selectors: [["dialog-content"]], decls: 0, vars: 0, template: function TicketDialogContent_Template(rf, ctx) { }, encapsulation: 2 });
    return TicketDialogContent;
})();


/***/ }),

/***/ "./src/app/pipeline/pipeline-contract-detail/pipeline-contract-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pipeline/pipeline-contract-detail/pipeline-contract-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PipelineContractDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineContractDetailComponent", function() { return PipelineContractDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













function PipelineContractDetailComponent_mat_option_53_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const rep_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rep_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rep_r1, " ");
    }
}
let PipelineContractDetailComponent = /*@__PURE__*/ (() => {
    class PipelineContractDetailComponent {
        constructor() {
            this.reps = ['rep1', 'rep2'];
            this.panelOpenState = false;
            this.step = 0;
        }
        ngOnInit() { }
        setStep(index) {
            this.step = index;
        }
        nextStep() {
            this.step++;
        }
        prevStep() {
            this.step--;
        }
    }
    PipelineContractDetailComponent.ɵfac = function PipelineContractDetailComponent_Factory(t) { return new (t || PipelineContractDetailComponent)(); };
    PipelineContractDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelineContractDetailComponent, selectors: [["app-pipeline-contract-detail"]], decls: 351, vars: 8, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["label", "Profile & Status"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "oh", "text-center", "little-profile"], ["mat-card-image", "", "height", "100", "src", "assets/images/background/profile-bg.jpg", "alt", "Photo of a Shiba Inu"], [1, "pro-img"], ["src", "assets/images/users/4.jpg", "width", "100", "alt", "user"], [1, "m-b-0"], [1, "m-t-0"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-10"], ["fxFlex.gt-sm", "30%", "fxFlex.gt-xs", "30%", "fxFlex", "100", 2, "margin-right", "20px"], ["fxFlex.gt-md", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "First Name"], ["matInput", "", "placeholder", "Last Name"], ["matInput", "", "placeholder", "Contact Number"], ["fxFlex.gt-sm", "100%", "fxFlex.gt-xs", "100%", "fxFlex", "100"], ["matInput", "", "placeholder", "Address"], ["matInput", "", "placeholder", "City"], ["matInput", "", "placeholder", "State"], ["matInput", "", "placeholder", "Zipcode"], [2, "padding", "0"], ["placeholder", "Agents"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-10", "p-t-1", "p-b-1"], ["matInput", "", "placeholder", "Notes"], ["fxFlex.gt-sm", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "timeline"], [1, "timeline-badge", "success"], ["alt", "user", "src", "assets/images/users/1.jpg", "alt", "img", 1, "img-responsive"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "timeline-title"], [1, "text-muted"], [1, "fa", "fa-clock-o"], [1, "timeline-inverted"], [1, "timeline-badge", "warning"], ["alt", "user", "src", "assets/images/users/2.jpg", "alt", "img", 1, "img-responsive"], [1, "timeline-badge", "danger"], [1, "fa", "fa-bomb"], [1, "fa", "fa-file"], [1, "timeline-badge", "info"], [1, "fa", "fa-save"], ["label", "Proposal"], [1, "basic-form"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["placeholder", "How would you like to build your system?"], ["value", "option"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-1"], ["fxFlex.gt-sm", "17%", "fxFlex.gt-xs", "17%", "fxFlex", "100"], ["matInput", "", "placeholder", "Bill/Kwh"], ["fxFlex.gt-sm", "15", "fxFlex.gt-xs", "15%", "fxFlex", "100"], ["matInput", "", "placeholder", "Enter Annual Bill/Kwh"], ["matInput", "", "placeholder", "Enter System Size Watts/Kwh", "type", "email"], ["matInput", "", "placeholder", "How would you like to input contract price?"], ["matInput", "", "placeholder", "Rate"], ["mat-raised-button", "", "color", "primary"], ["label", "Back Office"], [1, "example-headers-align"], ["hideToggle", "true", 3, "expanded", "opened"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["mat-button", "", "color", "primary", 3, "click"], ["matInput", "", "placeholder", "Country"], ["mat-button", "", "color", "warn", 3, "click"], ["label", "Chat Box"], ["matInput", "", "placeholder", "Some text value"], ["matInput", "", "placeholder", "EmailId", "type", "email"], ["matInput", "", "placeholder", "Password", "type", "password"], ["placeholder", "Select"], ["matInput", "", "placeholder", "Textarea"], [3, "value"]], template: function PipelineContractDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Martin Mondragon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Status: OnHold");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-content", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PipelineContractDetailComponent_mat_option_53_Template, 2, 2, "mat-option", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "textarea", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Contract");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "small", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Signed Aggrement ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "03-17-2020");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h4", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Acceptance");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "small", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Welcome Call ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "03-17-2020");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Design");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "small", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Start Date ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "04-03-2020");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Completed Date: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "N/A");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Permit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Installation");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-tab", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Proposal: Build System");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "form", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-select", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-option", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Option");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-option", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Option2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-option", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Option3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Enter 12-Month Bill/Kwh");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "input", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "input", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "input", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "input", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "button", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Update Profile ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "mat-tab", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Accordion");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "mat-card-subtitle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Expansion panel");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-accordion", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "mat-expansion-panel", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PipelineContractDetailComponent_Template_mat_expansion_panel_opened_216_listener() { return ctx.setStep(0); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Default Information ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "mat-panel-description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Type your name and age ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "account_circle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "input", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "input", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "mat-action-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "button", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_229_listener() { return ctx.nextStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " Next ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "mat-expansion-panel", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PipelineContractDetailComponent_Template_mat_expansion_panel_opened_231_listener() { return ctx.setStep(1); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Contract Status ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-panel-description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " Type the country name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "mat-action-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "button", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_242_listener() { return ctx.prevStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " Previous ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "button", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_244_listener() { return ctx.nextStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " Next ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "mat-expansion-panel", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PipelineContractDetailComponent_Template_mat_expansion_panel_opened_246_listener() { return ctx.setStep(2); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " Holds ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "mat-panel-description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " Type the country name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "input", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "mat-action-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "button", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_257_listener() { return ctx.prevStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " Previous ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "button", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_259_listener() { return ctx.nextStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Next ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "mat-expansion-panel", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PipelineContractDetailComponent_Template_mat_expansion_panel_opened_261_listener() { return ctx.setStep(3); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Installer Adders ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "mat-panel-description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Type the country name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "input", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-action-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "button", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_272_listener() { return ctx.prevStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Previous ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "button", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_274_listener() { return ctx.nextStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " Next ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "mat-expansion-panel", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PipelineContractDetailComponent_Template_mat_expansion_panel_opened_276_listener() { return ctx.setStep(4); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " In-House Adders ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "mat-panel-description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Type the country name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "input", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "mat-action-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "button", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_287_listener() { return ctx.prevStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Previous ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "button", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_289_listener() { return ctx.nextStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Next ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "mat-expansion-panel", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PipelineContractDetailComponent_Template_mat_expansion_panel_opened_291_listener() { return ctx.setStep(5); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Installer Commisions ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "mat-panel-description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " Type the country name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "input", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "mat-action-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "button", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_302_listener() { return ctx.prevStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " Previous ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "button", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_304_listener() { return ctx.nextStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " Next ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "mat-expansion-panel", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PipelineContractDetailComponent_Template_mat_expansion_panel_opened_306_listener() { return ctx.setStep(6); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "mat-expansion-panel-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "mat-panel-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " Payroll Commisions ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "mat-panel-description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Type the country name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "input", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "mat-action-row");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "button", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_317_listener() { return ctx.prevStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " Previous ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "button", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineContractDetailComponent_Template_button_click_319_listener() { return ctx.nextStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " Next ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "mat-tab", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Chat Box");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "form", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "input", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "input", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "input", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "mat-select", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "mat-option", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Option");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "mat-option", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Option2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "mat-option", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Option3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "textarea", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "button", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " Update Profile ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reps);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](163);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 6);
            }
        }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelActionRow"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n\n\n\n\n\n\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option.mat-option-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #1e88e5;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #3f51b5;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #e91e63;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after {\n  color: #fafafa;\n}\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #1e88e5;\n}\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #3f51b5;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #e91e63;\n}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  background: #b0b0b0;\n}\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-elevation-z0[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z1[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z2[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z3[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z4[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z5[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z6[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z7[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z9[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z10[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z11[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z12[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z13[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z14[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z15[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z16[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z17[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z18[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z19[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z20[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z21[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z22[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z23[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z24[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-theme-loaded-marker[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover) {\n  background: white;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #1e88e5;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  outline: solid 1px;\n  border-radius: 0;\n}\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: white;\n}\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #e91e63;\n}\n.mat-badge[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%] {\n  transition: none;\n}\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%] {\n  transform: none;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -8px;\n}\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -8px;\n}\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -16px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -16px;\n}\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -16px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -16px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -8px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -8px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -8px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -8px;\n}\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -11px;\n}\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -11px;\n}\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -22px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -22px;\n}\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -22px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -22px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -11px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -11px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -11px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -11px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -14px;\n}\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -14px;\n}\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -28px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -28px;\n}\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -28px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -28px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -14px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -14px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -14px;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -14px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%] {\n  color: inherit;\n  background: transparent;\n}\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n.mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: black;\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*='mat-elevation-z']), .mat-flat-button[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not([class*='mat-elevation-z']), .mat-mini-fab[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*='mat-elevation-z']), .mat-mini-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*='mat-elevation-z']), .mat-mini-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button-toggle-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee;\n}\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  border: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%] {\n  line-height: 48px;\n}\n.mat-card[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-checkmark[_ngcontent-%COMP%] {\n  fill: #fafafa;\n}\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%] {\n  stroke: #fafafa !important;\n}\n.mat-checkbox-mixedmark[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #1e88e5;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #3f51b5;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #e91e63;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover {\n  opacity: 0.54;\n}\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after {\n  background: black;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-table[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%] {\n  background: inherit;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-calendar-arrow[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.54);\n}\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-table-header[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-calendar-body-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-body-cell-content[_ngcontent-%COMP%], .mat-date-range-input-separator[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .mat-form-field-disabled[_ngcontent-%COMP%]   .mat-date-range-input-separator[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-calendar-body-in-preview[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.24);\n}\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(30, 136, 229, 0.2);\n}\n.mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, [dir='rtl'][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(30, 136, 229, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, [dir='rtl'][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(30, 136, 229, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.4);\n}\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(63, 81, 181, 0.2);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir='rtl'][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir='rtl'][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(63, 81, 181, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.4);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before {\n  background: rgba(233, 30, 99, 0.2);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir='rtl'][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to right, rgba(233, 30, 99, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir='rtl'][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before {\n  background: linear-gradient(to left, rgba(233, 30, 99, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after {\n  background: #a8dab5;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background: #46a35e;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.4);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content-touch[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-datepicker-toggle-active[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-date-range-input-inner[disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-dialog-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-vertical[_ngcontent-%COMP%] {\n  border-right-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled='true']), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled='true']), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled='true']) {\n  background: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled='true']) {\n    background: white;\n  }\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-expansion-panel-header[aria-disabled='true'][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-expansion-panel-header[aria-disabled='true'][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled='true'][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 48px;\n}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #1e88e5;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #3f51b5;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: transparent;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.06);\n}\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-icon.mat-accent[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-icon.mat-warn[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #1e88e5;\n}\n.mat-input-element[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #3f51b5;\n}\n.mat-form-field.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #e91e63;\n}\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #e91e63;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-list-item-disabled[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n}\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-menu-panel[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-paginator[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-paginator-container[_ngcontent-%COMP%] {\n  min-height: 56px;\n}\n.mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #bbdefb;\n}\n.mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #bbdefb;\n}\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #1e88e5;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #c5cae9;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #c5cae9;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #3f51b5;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #f8bbd0;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #f8bbd0;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #e91e63;\n}\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #1e88e5;\n}\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #3f51b5;\n}\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #e91e63;\n}\n.mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #1e88e5;\n}\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #3f51b5;\n}\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #e91e63;\n}\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-select-placeholder[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-select-panel[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-select-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #1e88e5;\n}\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer[_ngcontent-%COMP%] {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir='rtl'][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.54);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.54);\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.54);\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa;\n}\n.mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(30, 136, 229, 0.2);\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.2);\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(233, 30, 99, 0.2);\n}\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-step-header[_ngcontent-%COMP%]:hover {\n    background: none;\n  }\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #e91e63;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  border-left-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%] {\n  height: 72px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%], .mat-vertical-stepper-header[_ngcontent-%COMP%] {\n  padding: 24px 24px;\n}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  top: -16px;\n  bottom: -16px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::before {\n  top: 36px;\n}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  top: 36px;\n}\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #757575;\n}\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-group[class*='mat-background-'][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*='mat-background-'][_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top: none;\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3);\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(248, 187, 208, 0.3);\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: white;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(248, 187, 208, 0.3);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: white;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #1e88e5;\n  color: white;\n}\n.mat-toolbar.mat-accent[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: white;\n}\n.mat-toolbar.mat-warn[_ngcontent-%COMP%] {\n  background: #e91e63;\n  color: white;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: currentColor;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: currentColor;\n}\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n  min-height: 64px;\n}\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: 64px;\n}\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n    min-height: 56px;\n  }\n  .mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n    height: 56px;\n  }\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  background: rgba(97, 97, 97, 0.9);\n}\n.mat-tree[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tree-node[_ngcontent-%COMP%] {\n  min-height: 48px;\n}\n.mat-snack-bar-container[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n\n\n\n\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.timeline[_ngcontent-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #f2f4f8;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid rgba(120, 130, 140, 0.13);\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -8px;\n  border-top: 8px solid transparent;\n  border-right: 0 solid rgba(120, 130, 140, 0.13);\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(120, 130, 140, 0.13);\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -7px;\n  border-top: 7px solid transparent;\n  border-right: 0 solid #ffffff;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid #ffffff;\n}\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  overflow: hidden;\n}\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: right;\n}\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  right: auto;\n  left: -8px;\n  border-right-width: 8px;\n  border-left-width: 0;\n}\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  right: auto;\n  left: -7px;\n  border-right-width: 7px;\n  border-left-width: 0;\n}\n.timeline-badge.primary[_ngcontent-%COMP%] {\n  background-color: #7460ee;\n}\n.timeline-badge.success[_ngcontent-%COMP%] {\n  background-color: #26c6da;\n}\n.timeline-badge.warning[_ngcontent-%COMP%] {\n  background-color: #ffb22b;\n}\n.timeline-badge.danger[_ngcontent-%COMP%] {\n  background-color: #fc4b6c;\n}\n.timeline-badge.info[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n}\n.timeline-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: inherit;\n  font-weight: 400;\n}\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .timeline-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n@media (max-width: 767px) {\n  \n  ul.timeline[_ngcontent-%COMP%]:before {\n    left: 40px;\n  }\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    width: calc(100% - 90px);\n  }\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    float: right;\n  }\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n.little-profile[_ngcontent-%COMP%]   .pro-img[_ngcontent-%COMP%], .little-profile[_ngcontent-%COMP%]   .pro-img[_ngcontent-%COMP%]:first-child {\n  margin-top: -100px;\n  margin-bottom: 20px;\n}\n.little-profile[_ngcontent-%COMP%]   .pro-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .little-profile[_ngcontent-%COMP%]   .pro-img[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n  border-radius: 100%;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}"] });
    return PipelineContractDetailComponent;
})();


/***/ }),

/***/ "./src/app/pipeline/pipeline-overview/pipeline-overview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pipeline/pipeline-overview/pipeline-overview.component.ts ***!
  \***************************************************************************/
/*! exports provided: PipelineOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineOverviewComponent", function() { return PipelineOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _dialog_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-content.component */ "./src/app/pipeline/dialog-content.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");













function PipelineOverviewComponent_th_54_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PipelineOverviewComponent_td_55_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r14 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", element_r14.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.creator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.title);
    }
}
function PipelineOverviewComponent_th_57_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PipelineOverviewComponent_td_58_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r15 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r15.title);
    }
}
function PipelineOverviewComponent_th_60_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PipelineOverviewComponent_td_61_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r16 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.assignee);
    }
}
function PipelineOverviewComponent_th_63_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PipelineOverviewComponent_td_64_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PipelineOverviewComponent_th_66_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Site Survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PipelineOverviewComponent_td_67_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r18 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r18.product);
    }
}
function PipelineOverviewComponent_th_69_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function PipelineOverviewComponent_td_70_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const element_r19 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r19.date);
    }
}
function PipelineOverviewComponent_tr_71_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
    }
}
function PipelineOverviewComponent_tr_72_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
    }
}
const tickets = [
    {
        id: 77,
        creator: 'Eric Pratt',
        title: 'Elegant Theme Side Menu show OnClick',
        assignee: 'Alice Bohr',
        status: 'In Progress',
        labelbg: 'warning',
        product: '2018-04-01',
        date: '2018-05-01',
        imagePath: 'assets/images/users/2.jpg'
    },
    {
        id: 78,
        creator: 'Steve',
        title: 'Xtreme theme dropdown issue',
        assignee: 'Jonathan',
        status: 'Open',
        labelbg: 'success',
        product: '2018-04-03',
        date: '2018-05-03',
        imagePath: 'assets/images/users/4.jpg'
    },
    {
        id: 79,
        creator: 'Mark',
        title: 'Header issue in material admin',
        assignee: 'Smith J',
        status: 'Closed',
        labelbg: 'danger',
        product: '2018-04-02',
        date: '2018-05-02',
        imagePath: 'assets/images/users/3.jpg'
    },
    {
        id: 80,
        creator: 'John Doe',
        title: 'Sidebar issue in Nice admin',
        assignee: 'Vincent',
        status: 'In Progress',
        labelbg: 'warning',
        product: '2018-04-06',
        date: '2018-05-06',
        imagePath: 'assets/images/users/5.jpg'
    },
    {
        id: 81,
        creator: 'Jennifer',
        title: 'Elegant Theme Side Menu show OnClick',
        assignee: 'Chris Martin',
        status: 'Open',
        labelbg: 'success',
        product: '2018-04-04',
        date: '2018-05-04',
        imagePath: 'assets/images/users/6.jpg'
    },
    {
        id: 82,
        creator: 'Harper',
        title: 'Header issue in admin pro admin',
        assignee: 'James F',
        status: 'Closed',
        labelbg: 'danger',
        product: '2018-03-03',
        date: '2018-05-03',
        imagePath: 'assets/images/users/7.jpg'
    },
    {
        id: 83,
        creator: 'Billy John',
        title: 'Elegant Theme Side Menu OnClick',
        assignee: 'Jonathan',
        status: 'In Progress',
        labelbg: 'warning',
        product: '2018-02-05',
        date: '2018-05-05',
        imagePath: 'assets/images/users/3.jpg'
    },
    {
        id: 84,
        creator: 'Allen Brook',
        title: 'adminpress Theme Side Menu not opening',
        assignee: 'Smith J',
        status: 'Open',
        labelbg: 'success',
        product: '2018-02-04',
        date: '2018-05-04',
        imagePath: 'assets/images/users/6.jpg'
    },
    {
        id: 85,
        creator: 'Olivia Hart',
        title: 'Charts not proper in xtreme admin',
        assignee: 'Markus',
        status: 'Closed',
        labelbg: 'danger',
        product: '2018-03-02',
        date: '2018-05-02',
        imagePath: 'assets/images/users/5.jpg'
    },
    {
        id: 86,
        creator: 'Luis Orys',
        title: 'Psd not availabel with package',
        assignee: 'Jane',
        status: 'Closed',
        labelbg: 'danger',
        product: '2018-01-03',
        date: '2018-05-03',
        imagePath: 'assets/images/users/8.jpg'
    }
];
let PipelineOverviewComponent = /*@__PURE__*/ (() => {
    class PipelineOverviewComponent {
        constructor(dialog) {
            this.dialog = dialog;
            this.table = Object.create(null);
            this.totalCount = -1;
            this.Closed = -1;
            this.Inprogress = -1;
            this.Open = -1;
            this.displayedColumns = [
                'creator',
                'title',
                'assignee',
                'status',
                'product',
                'date'
            ];
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](tickets);
        }
        openDialog(action, obj) {
            obj.action = action;
            const dialogRef = this.dialog.open(_dialog_content_component__WEBPACK_IMPORTED_MODULE_2__["TicketDialogContent"], {
                data: obj
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result.event === 'Add') {
                    this.addRowData(result.data);
                }
                else if (result.event === 'Update') {
                    this.updateRowData(result.data);
                }
                else if (result.event === 'Delete') {
                    this.deleteRowData(result.data);
                }
            });
        }
        addRowData(row_obj) {
            const d = new Date();
            this.dataSource.data.push({
                id: d.getTime(),
                creator: row_obj.creator,
                title: row_obj.title,
                assignee: row_obj.assignee,
                status: row_obj.status,
                labelbg: row_obj.labelbg,
                product: row_obj.product,
                date: row_obj.date
            });
            this.table.renderRows();
        }
        updateRowData(row_obj) {
            this.dataSource.data = this.dataSource.data.filter((value, key) => {
                if (value.id === row_obj.id) {
                    value.creator = row_obj.creator;
                    value.title = row_obj.title;
                    value.assignee = row_obj.assignee;
                    value.status = row_obj.status;
                    value.labelbg = row_obj.labelbg;
                    value.product = row_obj.product;
                    value.date = row_obj.date;
                }
                return true;
            });
        }
        deleteRowData(row_obj) {
            this.dataSource.data = this.dataSource.data.filter((value, key) => {
                return value.id !== row_obj.id;
            });
        }
        ngOnInit() {
            this.totalCount = this.dataSource.data.length;
            this.Open = this.btnCategoryClick('Open');
            this.Closed = this.btnCategoryClick('Closed');
            this.Inprogress = this.btnCategoryClick('In Progress');
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](tickets);
        }
        applyFilter(filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        btnCategoryClick(val) {
            this.dataSource.filter = val.trim().toLowerCase();
            return this.dataSource.filteredData.length;
        }
    }
    PipelineOverviewComponent.ɵfac = function PipelineOverviewComponent_Factory(t) { return new (t || PipelineOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
    PipelineOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelineOverviewComponent, selectors: [["ng-component"]], viewQuery: function PipelineOverviewComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            }
        }, decls: 73, vars: 8, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "20", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "box", "p-20", "bg-info", "text-center", 3, "click"], [1, "font-light", "text-white", "m-0"], [1, "text-white", "m-0"], [1, "box", "p-20", "bg-warning", "text-center", 3, "click"], [1, "box", "p-20", "bg-success", "text-center", 3, "click"], [1, "box", "p-20", "bg-danger", "text-center", 3, "click"], [1, "box", "p-20", "bg-purple", "text-center", 3, "click"], ["fxFlex", "100"], ["fxLayout", "row wrap", 1, "align-items-center"], ["fxFlex.gt-md", "25", "fxFlex.gt-lg", "25", "fxFlex", "100"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], ["fxFlex.gt-md", "75", 1, "text-right"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "table-responsive"], ["mat-table", "", 1, "table", "pipeline-client-list", "no-wrap", 3, "dataSource"], ["matColumnDef", "creator"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "assignee"], ["matColumnDef", "status"], ["matColumnDef", "product"], ["matColumnDef", "date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "routerLink", "/pipeline/contract/3", "routerLinkActive", "router-link-active", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "d-flex"], [1, "mat-card-avatar", 3, "src"], [1, "m-l-15"], [1, "font-bold", "m-b-0", "m-t-0"], ["color", "warn", "mode", "determinate", "value", "60"], ["mat-header-row", ""], ["mat-row", "", "routerLink", "/pipeline/contract/3", "routerLinkActive", "router-link-active"]], template: function PipelineOverviewComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineOverviewComponent_Template_div_click_3_listener() { return ctx.btnCategoryClick(""); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total Contracts");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineOverviewComponent_Template_div_click_10_listener() { return ctx.btnCategoryClick("In Progress"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pending Install");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineOverviewComponent_Template_div_click_17_listener() { return ctx.btnCategoryClick("Open"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "In Queue");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineOverviewComponent_Template_div_click_24_listener() { return ctx.btnCategoryClick("Closed"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "On Hold");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineOverviewComponent_Template_div_click_31_listener() { return ctx.btnCategoryClick(""); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "All Clients");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PipelineOverviewComponent_Template_input_keyup_43_listener($event) { return ctx.applyFilter($event.target.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelineOverviewComponent_Template_button_click_45_listener() { return ctx.openDialog("Add", {}); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Add Contract ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "table", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, PipelineOverviewComponent_th_54_Template, 2, 0, "th", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, PipelineOverviewComponent_td_55_Template, 8, 3, "td", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, PipelineOverviewComponent_th_57_Template, 2, 0, "th", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, PipelineOverviewComponent_td_58_Template, 2, 1, "td", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59, 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, PipelineOverviewComponent_th_60_Template, 2, 0, "th", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PipelineOverviewComponent_td_61_Template, 2, 1, "td", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62, 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PipelineOverviewComponent_th_63_Template, 2, 0, "th", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, PipelineOverviewComponent_td_64_Template, 2, 0, "td", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PipelineOverviewComponent_th_66_Template, 2, 0, "th", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, PipelineOverviewComponent_td_67_Template, 2, 1, "td", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, PipelineOverviewComponent_th_69_Template, 2, 0, "th", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, PipelineOverviewComponent_td_70_Template, 2, 1, "td", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, PipelineOverviewComponent_tr_71_Template, 1, 0, "tr", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, PipelineOverviewComponent_tr_72_Template, 1, 0, "tr", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalCount);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Inprogress);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Open);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Closed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalCount);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"]], styles: [".pipeline-client-list[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .pipeline-client-list[_ngcontent-%COMP%]   td.mat-footer-cell[_ngcontent-%COMP%], .pipeline-client-list[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}"] });
    return PipelineOverviewComponent;
})();


/***/ }),

/***/ "./src/app/pipeline/pipeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/pipeline/pipeline.component.ts ***!
  \************************************************/
/*! exports provided: PipelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineComponent", function() { return PipelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let PipelineComponent = /*@__PURE__*/ (() => {
    class PipelineComponent {
    }
    PipelineComponent.ɵfac = function PipelineComponent_Factory(t) { return new (t || PipelineComponent)(); };
    PipelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelineComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function PipelineComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".pipeline-client-list[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .pipeline-client-list[_ngcontent-%COMP%]   td.mat-footer-cell[_ngcontent-%COMP%], .pipeline-client-list[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}"] });
    return PipelineComponent;
})();


/***/ }),

/***/ "./src/app/pipeline/pipeline.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pipeline/pipeline.module.ts ***!
  \*********************************************/
/*! exports provided: PipelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineModule", function() { return PipelineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _pipeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipeline.component */ "./src/app/pipeline/pipeline.component.ts");
/* harmony import */ var _pipeline_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipeline.routing */ "./src/app/pipeline/pipeline.routing.ts");
/* harmony import */ var _dialog_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-content.component */ "./src/app/pipeline/dialog-content.component.ts");
/* harmony import */ var _pipeline_contract_detail_pipeline_contract_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipeline-contract-detail/pipeline-contract-detail.component */ "./src/app/pipeline/pipeline-contract-detail/pipeline-contract-detail.component.ts");
/* harmony import */ var _pipeline_overview_pipeline_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipeline-overview/pipeline-overview.component */ "./src/app/pipeline/pipeline-overview/pipeline-overview.component.ts");












let PipelineModule = /*@__PURE__*/ (() => {
    class PipelineModule {
    }
    PipelineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipelineModule });
    PipelineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipelineModule_Factory(t) { return new (t || PipelineModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pipeline_routing__WEBPACK_IMPORTED_MODULE_6__["PipelineRoutes"])
            ]] });
    return PipelineModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipelineModule, { declarations: [_pipeline_component__WEBPACK_IMPORTED_MODULE_5__["PipelineComponent"],
            _dialog_content_component__WEBPACK_IMPORTED_MODULE_7__["TicketDialogContent"],
            _pipeline_contract_detail_pipeline_contract_detail_component__WEBPACK_IMPORTED_MODULE_8__["PipelineContractDetailComponent"],
            _pipeline_overview_pipeline_overview_component__WEBPACK_IMPORTED_MODULE_9__["PipelineOverviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
})();


/***/ }),

/***/ "./src/app/pipeline/pipeline.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/pipeline/pipeline.routing.ts ***!
  \**********************************************/
/*! exports provided: PipelineRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineRoutes", function() { return PipelineRoutes; });
/* harmony import */ var _pipeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipeline.component */ "./src/app/pipeline/pipeline.component.ts");
/* harmony import */ var _pipeline_contract_detail_pipeline_contract_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipeline-contract-detail/pipeline-contract-detail.component */ "./src/app/pipeline/pipeline-contract-detail/pipeline-contract-detail.component.ts");
/* harmony import */ var _pipeline_overview_pipeline_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipeline-overview/pipeline-overview.component */ "./src/app/pipeline/pipeline-overview/pipeline-overview.component.ts");



const PipelineRoutes = [
    {
        path: '',
        component: _pipeline_component__WEBPACK_IMPORTED_MODULE_0__["PipelineComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'overview'
            },
            {
                path: 'overview',
                component: _pipeline_overview_pipeline_overview_component__WEBPACK_IMPORTED_MODULE_2__["PipelineOverviewComponent"]
            },
            {
                path: 'contract/:id',
                component: _pipeline_contract_detail_pipeline_contract_detail_component__WEBPACK_IMPORTED_MODULE_1__["PipelineContractDetailComponent"]
            }
        ]
    }
];


/***/ })

}]);