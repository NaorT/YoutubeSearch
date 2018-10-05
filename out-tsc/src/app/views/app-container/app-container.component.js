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
var youtube_service_1 = require("../../services/youtube/youtube.service");
var user_service_1 = require("../../services/user/user.service");
var playlist_service_1 = require("../../services/playlist/playlist.service");
var AppContainerComponent = /** @class */ (function () {
    function AppContainerComponent(userService, youtubeService, playlistService) {
        this.userService = userService;
        this.youtubeService = youtubeService;
        this.playlistService = playlistService;
    }
    AppContainerComponent.prototype.ngOnInit = function () {
        this.userService.initUserData();
    };
    AppContainerComponent.prototype.joinPlaylist = function ($event) {
        this.playlistService.addUserToListeners($event, this.userService.getCurrentUser().id).subscribe(function (o) {
            console.log('great');
        });
        // this.youtubeService.joinPlaylist(event).
    };
    AppContainerComponent.prototype.searchVideos = function ($event) {
        var _this = this;
        if ($event) {
            this.youtubeService.searchVideos($event).subscribe(function (results) {
                console.log(results['items']);
                _this.searchResults = results['items'];
            });
        }
        else {
            this.searchResults = undefined;
        }
    };
    AppContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-app-container',
            templateUrl: './app-container.component.html',
            styleUrls: ['./app-container.component.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            youtube_service_1.YoutubeService,
            playlist_service_1.PlaylistService])
    ], AppContainerComponent);
    return AppContainerComponent;
}());
exports.AppContainerComponent = AppContainerComponent;
//# sourceMappingURL=app-container.component.js.map