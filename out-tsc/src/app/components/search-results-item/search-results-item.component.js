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
var M = require("../../models");
var user_service_1 = require("../../services/user/user.service");
var playlist_service_1 = require("../../services/playlist/playlist.service");
var drag_and_drop_service_1 = require("../../services/drag-and-drop/drag-and-drop.service");
var SearchResultsItemComponent = /** @class */ (function () {
    function SearchResultsItemComponent(playlistService, userService, dragAndDropService) {
        this.playlistService = playlistService;
        this.userService = userService;
        this.dragAndDropService = dragAndDropService;
        this.dragable = false;
        this.cardFliped = false;
        this.flipDiv = false;
        this.draggable = {
            // note that data is handled with JSON.stringify/JSON.parse
            // only set simple data or POJO's as methods will be lost 
            data: this.video,
            effectAllowed: 'linkMove',
            disable: false,
            handle: false
        };
    }
    SearchResultsItemComponent.prototype.ngOnInit = function () {
        this.draggable.data = this.video;
        this.draggable.disable = this.dragable;
        this.getPlaylist();
    };
    SearchResultsItemComponent.prototype.getPlaylist = function () {
        this.playlists = this.playlistService.getItemObserver(M.CollectionName.playlist, this.userService.getCurrentUser().id);
    };
    SearchResultsItemComponent.prototype.addToList = function (list) {
        if (this.playlistService.addVideoToLocallist(list, this.video)) {
            this.playlistService.addVideoTolist(list);
        }
    };
    SearchResultsItemComponent.prototype.flipCard = function () {
        var _this = this;
        this.flipDiv = true;
        setTimeout(function () {
            _this.flipDiv = false;
        }, 3500);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SearchResultsItemComponent.prototype, "video", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SearchResultsItemComponent.prototype, "dragable", void 0);
    SearchResultsItemComponent = __decorate([
        core_1.Component({
            selector: 'app-search-results-item',
            templateUrl: './search-results-item.component.html',
            styleUrls: ['./search-results-item.component.scss']
        }),
        __metadata("design:paramtypes", [playlist_service_1.PlaylistService,
            user_service_1.UserService,
            drag_and_drop_service_1.DragAndDropService])
    ], SearchResultsItemComponent);
    return SearchResultsItemComponent;
}());
exports.SearchResultsItemComponent = SearchResultsItemComponent;
//# sourceMappingURL=search-results-item.component.js.map