"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var material_1 = require("@angular/material");
var join_list_popup_component_1 = require("../join-list-popup/join-list-popup.component");
var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent(dialog) {
        this.dialog = dialog;
        this.joinPlaylistClicked = new core_1.EventEmitter();
        this.searchVideo = new core_1.EventEmitter();
        this.searchVid$ = new rxjs_1.Subject();
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchVid$.pipe(operators_1.debounceTime(300)).subscribe(function (search) {
            _this.searchVideo.emit(search);
        });
    };
    SiteHeaderComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(join_list_popup_component_1.JoinListPopupComponent, {
            width: '300px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.joinPlaylistClicked.emit(result);
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SiteHeaderComponent.prototype, "joinPlaylistClicked", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SiteHeaderComponent.prototype, "searchVideo", void 0);
    SiteHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-site-header',
            templateUrl: './site-header.component.html',
            styleUrls: ['./site-header.component.scss']
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());
exports.SiteHeaderComponent = SiteHeaderComponent;
//# sourceMappingURL=site-header.component.js.map