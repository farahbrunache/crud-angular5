webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animate-number.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimateNumberDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as animateNumber from "jquery.animateNumber";
var AnimateNumberDirective = /** @class */ (function () {
    function AnimateNumberDirective(el) {
        this.el = el;
    }
    AnimateNumberDirective.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement).animateNumber({
            number: this.count
        });
        // $(this.el.nativeElement).css("color", "yellow");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("appAnimateNumber"),
        __metadata("design:type", Number)
    ], AnimateNumberDirective.prototype, "count", void 0);
    AnimateNumberDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[appAnimateNumber]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], AnimateNumberDirective);
    return AnimateNumberDirective;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-header {\n  background: #3f51b5;\n  color: white;\n  padding: 10px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"globals.loading\">\n    <mat-progress-bar class=\"\" [color]=\"'accent'\" [mode]=\"'indeterminate'\">\n    </mat-progress-bar>\n</div>\n<nav class=\"navbar-header\">\n    <a mat-button class=\"home\" routerLink=\"/\">\n        <span>Pokemons</span>\n    </a>\n    <a mat-button routerLink=\"pokemons/add\">Add+</a>\n    <a mat-button [href]=\"resetLink\" target=\"_blank\">Reset</a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_service__ = __webpack_require__("../../../../../src/app/globals.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(globals) {
        this.globals = globals;
        this.title = "app";
        this.resetLink = 'http://super-crud.herokuapp.com/reset';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globals_service__["a" /* GlobalsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_material_custom_material_module__ = __webpack_require__("../../../../../src/app/custom-material/custom-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pokemon_list_pokemon_list_component__ = __webpack_require__("../../../../../src/app/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pokemon_detail_pokemon_detail_component__ = __webpack_require__("../../../../../src/app/pokemon-detail/pokemon-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__globals_service__ = __webpack_require__("../../../../../src/app/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pokemon_add_pokemon_add_component__ = __webpack_require__("../../../../../src/app/pokemon-add/pokemon-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hover_effect_directive__ = __webpack_require__("../../../../../src/app/hover-effect.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__animate_number_directive__ = __webpack_require__("../../../../../src/app/animate-number.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__pokemon_list_pokemon_list_component__["a" /* PokemonListComponent */], __WEBPACK_IMPORTED_MODULE_9__pokemon_detail_pokemon_detail_component__["a" /* PokemonDetailComponent */], __WEBPACK_IMPORTED_MODULE_12__pokemon_add_pokemon_add_component__["a" /* PokemonAddComponent */], __WEBPACK_IMPORTED_MODULE_13__hover_effect_directive__["a" /* HoverEffectDirective */], __WEBPACK_IMPORTED_MODULE_14__animate_number_directive__["a" /* AnimateNumberDirective */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__custom_material_custom_material_module__["a" /* CustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__routing_module__["a" /* RoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__pokemon_service__["a" /* PokemonService */], __WEBPACK_IMPORTED_MODULE_11__globals_service__["a" /* GlobalsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/custom-material/custom-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/globals.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalsService = /** @class */ (function () {
    function GlobalsService() {
        this.loading = false;
    }
    GlobalsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], GlobalsService);
    return GlobalsService;
}());



/***/ }),

/***/ "../../../../../src/app/hover-effect.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoverEffectDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoverEffectDirective = /** @class */ (function () {
    function HoverEffectDirective(el) {
        this.el = el;
    }
    HoverEffectDirective.prototype.onmouseenter = function () {
        this.setOpacity(this.opacVal || this.defaultOpacVal || 0.1);
    };
    HoverEffectDirective.prototype.onmouseleave = function () {
        this.setOpacity(1);
    };
    HoverEffectDirective.prototype.setOpacity = function (opacity) {
        this.el.nativeElement.style.opacity = opacity;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('appHoverEffect'),
        __metadata("design:type", Number)
    ], HoverEffectDirective.prototype, "opacVal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], HoverEffectDirective.prototype, "defaultOpacVal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HoverEffectDirective.prototype, "onmouseenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HoverEffectDirective.prototype, "onmouseleave", null);
    HoverEffectDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[appHoverEffect]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], HoverEffectDirective);
    return HoverEffectDirective;
}());



/***/ }),

/***/ "../../../../../src/app/pokemon-add/pokemon-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>add new pokemon</h2>\n<div>\n  <form #pokemonForm=\"ngForm\" (ngSubmit)=\"addPokemon()\">\n    <mat-form-field>\n      <input type=\"text\" #name matInput placeholder=\"name\" required [(ngModel)]=\"pokemon.name\" name=\"name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"text\" matInput placeholder=\"evolves from\" [(ngModel)]=\"pokemon.evolves_from\" name=\"evolves_from\">\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"text\" matInput placeholder=\"image url\" [(ngModel)]=\"pokemon.image\" name=\"image\">\n    </mat-form-field>\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"pokemonForm.invalid\">Save</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pokemon-add/pokemon-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pokemon-add/pokemon-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokemon__ = __webpack_require__("../../../../../src/app/pokemon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_service__ = __webpack_require__("../../../../../src/app/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PokemonAddComponent = /** @class */ (function () {
    function PokemonAddComponent(location, pokemonSvc, globals) {
        this.location = location;
        this.pokemonSvc = pokemonSvc;
        this.globals = globals;
    }
    PokemonAddComponent.prototype.ngOnInit = function () {
        this.pokemon = new __WEBPACK_IMPORTED_MODULE_2__pokemon__["a" /* Pokemon */]("");
    };
    PokemonAddComponent.prototype.addPokemon = function () {
        var _this = this;
        this.globals.loading = true;
        // this.pokemon["pokedex"] = "099";
        this.pokemonSvc.addPokemon(this.pokemon).subscribe(function () {
            _this.globals.loading = false;
            _this.goBack();
        });
    };
    PokemonAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    PokemonAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "pokemon-add",
            template: __webpack_require__("../../../../../src/app/pokemon-add/pokemon-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pokemon-add/pokemon-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */],
            __WEBPACK_IMPORTED_MODULE_3__globals_service__["a" /* GlobalsService */]])
    ], PokemonAddComponent);
    return PokemonAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pokemon-detail/pokemon-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pokemon\">\n\n  <h2>{{ pokemon.name | uppercase }} Details</h2>\n  <img [src]=\"pokemon.image\">\n  <div>\n    <span>id: </span>{{pokemon._id}}</div>\n  <div>\n\n  <form #pokemonForm=\"ngForm\" (ngSubmit)=\"updatePokemon()\">\n    <mat-form-field>\n      <input type=\"text\" #name matInput placeholder=\"name\" required [(ngModel)]=\"pokemon.name\" name=\"name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"text\" matInput placeholder=\"evolves from\" [(ngModel)]=\"pokemon.evolves_from\" name=\"evolves_from\">\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"text\" matInput placeholder=\"image url\" [(ngModel)]=\"pokemon.image\" name=\"image\">\n    </mat-form-field>\n    <button type=\"submit\" mat-raised-button color=\"primary\">Update</button>\n    <!-- <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"resetData(); pokemonForm.reset()\">Reset</button> -->\n  </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pokemon-detail/pokemon-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pokemon-detail/pokemon-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_service__ = __webpack_require__("../../../../../src/app/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PokemonDetailComponent = /** @class */ (function () {
    function PokemonDetailComponent(location, route, pokemonSvc, globals) {
        this.location = location;
        this.route = route;
        this.pokemonSvc = pokemonSvc;
        this.globals = globals;
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
        this.getPokemonDetails();
    };
    PokemonDetailComponent.prototype.getPokemonDetails = function () {
        var _this = this;
        this.globals.loading = true;
        var id = this.route.snapshot.paramMap.get("id");
        this.pokemonSvc.getPokemonById(id).subscribe(function (data) {
            _this.pokemon = data;
            _this.globals.loading = false;
        });
    };
    PokemonDetailComponent.prototype.updatePokemon = function () {
        var _this = this;
        this.globals.loading = true;
        this.pokemonSvc.updatePokemon(this.pokemon).subscribe(function () {
            _this.globals.loading = false;
            _this.goBack();
        });
    };
    PokemonDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PokemonDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "pokemon-detail",
            template: __webpack_require__("../../../../../src/app/pokemon-detail/pokemon-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pokemon-detail/pokemon-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__pokemon_service__["a" /* PokemonService */],
            __WEBPACK_IMPORTED_MODULE_3__globals_service__["a" /* GlobalsService */]])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pokemon-list/pokemon-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"count-container\">\n  <div *ngIf=\"globals.loading\">searching for pokemons...</div>\n  <div class=\"success-msg\" *ngIf=\"!globals.loading\">\n    <span>found </span>\n    <span class=\"count\" [appAnimateNumber]=\"pokemons.length\"></span>\n    <span> pokemons!!!</span>\n  </div>\n</mat-card>\n<mat-grid-list cols=\"4\" rowHeight=\"500\">\n  <mat-grid-tile *ngFor=\"let each of pokemons\">\n\n    <mat-card [appHoverEffect]=\"hoverOpacity\" defaultOpacVal=\"0.8\">\n      <mat-card-header>\n        <img mat-card-avatar [src]=\"each.image\">\n        <mat-card-title>{{each.name | uppercase}}</mat-card-title>\n        <mat-card-subtitle>{{each.pokedex}}</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image [src]=\"each.image\" [alt]=\"each.name\">\n      <mat-card-content>\n      </mat-card-content>\n      <mat-card-actions>\n        <a mat-button routerLink=\"detail/{{each._id}}\">Details</a>\n        <button mat-mini-fab color=\"warn\" (click)=\"deletePokemon(each)\" title=\"delete\">X</button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/pokemon-list/pokemon-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card-image {\n  height: 250px;\n  width: 320px; }\n\n.count-container {\n  text-align: center; }\n\n.count-container .success-msg {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.count-container .success-msg .count {\n      font-size: 2em;\n      padding: 0 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pokemon-list/pokemon-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_service__ = __webpack_require__("../../../../../src/app/pokemon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_service__ = __webpack_require__("../../../../../src/app/globals.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";



var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent(
        // private cdr: ChangeDetectorRef,
        pokemonService, globals) {
        this.pokemonService = pokemonService;
        this.globals = globals;
        this.hoverOpacity = 0.5;
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        this.getPokemons();
    };
    // ngAfterViewInit() {
    //   this.getPokemons();
    // }
    PokemonListComponent.prototype.getPokemons = function () {
        var _this = this;
        this.globals.loading = true;
        setTimeout(function () {
            _this.pokemonService.getPokemons().subscribe(function (data) {
                _this.pokemons = data;
                _this.globals.loading = false;
                // this.cdr.detectChanges();
            });
        });
    };
    PokemonListComponent.prototype.deletePokemon = function (pokemon) {
        var _this = this;
        this.globals.loading = true;
        this.pokemonService.deletePokemon(pokemon["_id"]).subscribe(function () {
            _this.getPokemons();
            // this.globals.loading = false;
        });
    };
    PokemonListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "pokemon-list",
            template: __webpack_require__("../../../../../src/app/pokemon-list/pokemon-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pokemon-list/pokemon-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pokemon_service__["a" /* PokemonService */],
            __WEBPACK_IMPORTED_MODULE_2__globals_service__["a" /* GlobalsService */]])
    ], PokemonListComponent);
    return PokemonListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pokemon.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.baseUrl = "https://super-crud.herokuapp.com/pokemon";
    }
    PokemonService.prototype.getPokemons = function () {
        return this.http
            .get(this.baseUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (data) { return data["pokemons"]; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getPokemons", [])));
    };
    PokemonService.prototype.getPokemonById = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.http
            .get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getPokemonById = " + id)));
    };
    PokemonService.prototype.updatePokemon = function (pokemon) {
        var url = this.baseUrl + "/" + pokemon["_id"];
        return this.http
            .put(url, pokemon)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("updatePokemon")));
    };
    PokemonService.prototype.deletePokemon = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.http
            .delete(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("deletePokemon")));
    };
    PokemonService.prototype.addPokemon = function (pokemon) {
        return this.http
            .post(this.baseUrl, pokemon)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("addPokemon")));
    };
    PokemonService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    PokemonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PokemonService);
    return PokemonService;
}());



/***/ }),

/***/ "../../../../../src/app/pokemon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pokemon; });
var Pokemon = /** @class */ (function () {
    function Pokemon(name, _id, pokedex, evolves_from, image, __v) {
    }
    return Pokemon;
}());



/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokemon_list_pokemon_list_component__ = __webpack_require__("../../../../../src/app/pokemon-list/pokemon-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pokemon_detail_pokemon_detail_component__ = __webpack_require__("../../../../../src/app/pokemon-detail/pokemon-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pokemon_add_pokemon_add_component__ = __webpack_require__("../../../../../src/app/pokemon-add/pokemon-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "pokemons",
        component: __WEBPACK_IMPORTED_MODULE_2__pokemon_list_pokemon_list_component__["a" /* PokemonListComponent */]
    },
    {
        path: "pokemons/detail/:id",
        component: __WEBPACK_IMPORTED_MODULE_3__pokemon_detail_pokemon_detail_component__["a" /* PokemonDetailComponent */]
    },
    {
        path: "pokemons/add",
        component: __WEBPACK_IMPORTED_MODULE_4__pokemon_add_pokemon_add_component__["a" /* PokemonAddComponent */]
    },
    {
        path: "",
        redirectTo: "/pokemons",
        pathMatch: "full"
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map