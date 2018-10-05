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
var playlist_service_1 = require("../../services/playlist/playlist.service");
var user_service_1 = require("../../services/user/user.service");
var drag_and_drop_service_1 = require("../../services/drag-and-drop/drag-and-drop.service");
var PlayListItemComponent = /** @class */ (function () {
    // player: YT.Player;
    function PlayListItemComponent(playlistService, userService, dragAndDropService) {
        this.playlistService = playlistService;
        this.userService = userService;
        this.dragAndDropService = dragAndDropService;
    }
    PlayListItemComponent.prototype.ngOnInit = function () {
        require('./playlist');
    };
    PlayListItemComponent.prototype.removeTab = function () {
        this.playlistService.removeUserFromList(this.playlist, this.userService.getCurrentUser().id).subscribe();
    };
    PlayListItemComponent.prototype.onDragover = function ($event) {
    };
    PlayListItemComponent.prototype.onDrop = function ($event) {
        if (this.playlistService.addVideoToLocallist(this.playlist, $event.data)) {
            this.playlistService.addVideoTolist(this.playlist);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlayListItemComponent.prototype, "playlist", void 0);
    PlayListItemComponent = __decorate([
        core_1.Component({
            selector: 'app-play-list-item',
            templateUrl: './play-list-item.component.html',
            styleUrls: ['./play-list-item.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [playlist_service_1.PlaylistService,
            user_service_1.UserService,
            drag_and_drop_service_1.DragAndDropService])
    ], PlayListItemComponent);
    return PlayListItemComponent;
}());
exports.PlayListItemComponent = PlayListItemComponent;
//# sourceMappingURL=play-list-item.component.js.map