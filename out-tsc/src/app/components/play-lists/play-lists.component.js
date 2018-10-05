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
var forms_1 = require("@angular/forms");
var user_service_1 = require("../../services/user/user.service");
var M = require("../../models");
var playlist_service_1 = require("../../services/playlist/playlist.service");
var PlayListsComponent = /** @class */ (function () {
    function PlayListsComponent(playlistService, userService) {
        this.playlistService = playlistService;
        this.userService = userService;
        this.selected = new forms_1.FormControl(0);
    }
    PlayListsComponent.prototype.ngOnInit = function () {
        this.getPlaylist();
    };
    PlayListsComponent.prototype.getPlaylist = function () {
        this.playlists = this.playlistService.getItemObserver(M.CollectionName.playlist, this.userService.getCurrentUser().id);
    };
    PlayListsComponent = __decorate([
        core_1.Component({
            selector: 'app-play-lists',
            templateUrl: './play-lists.component.html',
            styleUrls: ['./play-lists.component.scss']
        }),
        __metadata("design:paramtypes", [playlist_service_1.PlaylistService,
            user_service_1.UserService])
    ], PlayListsComponent);
    return PlayListsComponent;
}());
exports.PlayListsComponent = PlayListsComponent;
//# sourceMappingURL=play-lists.component.js.map