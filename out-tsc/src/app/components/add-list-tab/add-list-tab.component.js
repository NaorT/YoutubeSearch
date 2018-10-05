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
var M = require("../../models");
var user_service_1 = require("../../services/user/user.service");
var playlist_service_1 = require("../../services/playlist/playlist.service");
var uuidv1 = require('uuid/v1');
var AddListTabComponent = /** @class */ (function () {
    function AddListTabComponent(_formBuilder, playlistService, userService) {
        this._formBuilder = _formBuilder;
        this.playlistService = playlistService;
        this.userService = userService;
        this.isEditable = true;
    }
    AddListTabComponent.prototype.ngOnInit = function () {
        this.initView();
    };
    AddListTabComponent.prototype.initView = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', forms_1.Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', forms_1.Validators.required]
        });
        this.initPlaylist();
    };
    AddListTabComponent.prototype.initPlaylist = function () {
        this.playlist = {
            pin_code: undefined,
            id: undefined,
            created_at: undefined,
            created_by: undefined,
            organization: undefined,
            name: undefined,
            genre: undefined,
            isEditeable: true,
            videos: [],
            listeners: [],
            created_by_id: undefined
        };
    };
    AddListTabComponent.prototype.savePlaylist = function (stepper) {
        var _this = this;
        this.playlist.pin_code = Math.random()
            .toString()
            .substr(2, 6);
        this.playlistService.validatePinCode(this.playlist.pin_code).subscribe(function (value) {
            if (value && value.length > 0) {
                _this.savePlaylist(stepper);
            }
            else {
                _this.playlist.created_at = new Date().getTime();
                _this.playlist.created_by_id = _this.userService.getCurrentUser().id;
                _this.playlist.listeners.push(_this.userService.getCurrentUser().id);
                _this.playlist.id = uuidv1();
                _this.playlist.isEditeable = _this.checkBox.toLowerCase() === 'yes';
                _this.playlistService.setItem(M.CollectionName.playlist, _this.playlist);
                _this.initPlaylist();
                stepper.reset();
            }
        });
    };
    AddListTabComponent.prototype.onDragover = function ($event) {
    };
    AddListTabComponent.prototype.onDrop = function ($event) {
        this.playlistService.addVideoToLocallist(this.playlist, $event.data);
    };
    AddListTabComponent = __decorate([
        core_1.Component({
            selector: 'app-add-list-tab',
            templateUrl: './add-list-tab.component.html',
            styleUrls: ['./add-list-tab.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            playlist_service_1.PlaylistService,
            user_service_1.UserService])
    ], AddListTabComponent);
    return AddListTabComponent;
}());
exports.AddListTabComponent = AddListTabComponent;
//# sourceMappingURL=add-list-tab.component.js.map