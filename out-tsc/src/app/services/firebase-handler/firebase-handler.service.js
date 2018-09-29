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
var firestore_1 = require("@angular/fire/firestore");
require("rxjs/add/operator/map");
var FirebaseHandlerService = /** @class */ (function () {
    function FirebaseHandlerService(asf) {
        this.asf = asf;
    }
    FirebaseHandlerService.prototype.getItemObserver = function (collectionName, id) {
        return this.asf.collection('playlist', function (ref) { return ref.where('listeners', 'array-contains', id); }).valueChanges();
    };
    FirebaseHandlerService.prototype.setItem = function (collectionName, item) {
        this.asf.doc(collectionName + "/" + item.id).set(item);
    };
    FirebaseHandlerService.prototype.editPlaylist = function (playlistId, newPlayList) {
        this.asf.doc("playlist/" + playlistId).set(newPlayList, { merge: true });
    };
    FirebaseHandlerService.prototype.deleteList = function (listId) {
        this.asf.doc("playlist/" + listId).delete();
    };
    FirebaseHandlerService.prototype.validatePinCode = function (pinCode) {
        return this.asf.collection('playlist', function (ref) { return ref.where('pin_code', '==', pinCode); }).get();
    };
    FirebaseHandlerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], FirebaseHandlerService);
    return FirebaseHandlerService;
}());
exports.FirebaseHandlerService = FirebaseHandlerService;
//# sourceMappingURL=firebase-handler.service.js.map