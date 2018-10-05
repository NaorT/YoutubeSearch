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
var firebase_handler_service_1 = require("../firebase-handler/firebase-handler.service");
var rxjs_1 = require("rxjs");
var PlaylistService = /** @class */ (function () {
    function PlaylistService(firebaseService) {
        this.firebaseService = firebaseService;
    }
    PlaylistService.prototype.getItemObserver = function (collectionName, qoury) {
        return this.firebaseService.getItemObserver(collectionName, qoury);
    };
    PlaylistService.prototype.setItem = function (collectionName, item) {
        this.firebaseService.setItem(collectionName, item);
    };
    PlaylistService.prototype.validatePinCode = function (pinCode) {
        return this.firebaseService.validatePinCode(pinCode);
    };
    PlaylistService.prototype.addUserToListeners = function (pinCode, userId) {
        var _this = this;
        return new rxjs_1.Observable(function (o) {
            var list = _this.firebaseService.validatePinCode(pinCode);
            list.subscribe(function (querySnapshot) {
                querySnapshot.forEach(function (documentSnapshot) {
                    var data = documentSnapshot.data();
                    data.listeners.push(userId);
                    _this.firebaseService.editPlaylist(data.id, data);
                    o.next();
                    o.complete();
                });
            });
        });
    };
    PlaylistService.prototype.removeUserFromList = function (playlist, userId) {
        var _this = this;
        return new rxjs_1.Observable(function (o) {
            playlist.listeners.splice(playlist.listeners.indexOf(userId), 1);
            if (playlist.listeners.length <= 0) {
                _this.firebaseService.deleteList(playlist.id);
            }
            else {
                _this.firebaseService.editPlaylist(playlist.id, playlist);
            }
            o.next();
            o.complete();
        });
    };
    PlaylistService.prototype.addVideoTolist = function (list) {
        this.firebaseService.editPlaylist(list.id, list);
    };
    PlaylistService.prototype.addVideoToLocallist = function (list, video) {
        for (var _i = 0, _a = list.videos; _i < _a.length; _i++) {
            var listVideo = _a[_i];
            if (listVideo.id.videoId === video.id.videoId) {
                return false;
            }
        }
        list.videos.push(video);
        return true;
    };
    PlaylistService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [firebase_handler_service_1.FirebaseHandlerService])
    ], PlaylistService);
    return PlaylistService;
}());
exports.PlaylistService = PlaylistService;
//# sourceMappingURL=playlist.service.js.map