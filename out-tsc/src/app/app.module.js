"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var ngx_drag_scroll_1 = require("ngx-drag-scroll");
var animations_1 = require("@angular/platform-browser/animations");
var site_header_component_1 = require("./components/site-header/site-header.component");
var play_lists_component_1 = require("./components/play-lists/play-lists.component");
var forms_1 = require("@angular/forms");
var icon_1 = require("@angular/material/icon");
var tabs_1 = require("@angular/material/tabs");
var form_field_1 = require("@angular/material/form-field");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var toolbar_1 = require("@angular/material/toolbar");
var dialog_1 = require("@angular/material/dialog");
var material_3 = require("@angular/material");
var material_4 = require("@angular/material");
var material_5 = require("@angular/material");
var angular_font_awesome_1 = require("angular-font-awesome");
var video_serach_results_component_1 = require("./components/video-serach-results/video-serach-results.component");
var join_list_popup_component_1 = require("./components/join-list-popup/join-list-popup.component");
var fire_1 = require("@angular/fire");
var environment_1 = require("../environments/environment");
var firestore_1 = require("@angular/fire/firestore");
var ngx_Flip_1 = require("ngx-Flip");
var add_list_tab_component_1 = require("./components/add-list-tab/add-list-tab.component");
var app_container_component_1 = require("./views/app-container/app-container.component");
var ngx_youtube_player_1 = require("ngx-youtube-player");
var play_list_item_component_1 = require("./components/play-list-item/play-list-item.component");
var http_1 = require("@angular/common/http");
var search_results_component_1 = require("./components/search-results/search-results.component");
var search_results_item_component_1 = require("./components/search-results-item/search-results-item.component");
var menu_1 = require("@angular/material/menu");
var ngx_drag_drop_1 = require("ngx-drag-drop");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                site_header_component_1.SiteHeaderComponent,
                play_lists_component_1.PlayListsComponent,
                video_serach_results_component_1.VideoSerachResultsComponent,
                join_list_popup_component_1.JoinListPopupComponent,
                add_list_tab_component_1.AddListTabComponent,
                app_container_component_1.AppContainerComponent,
                play_list_item_component_1.PlayListItemComponent,
                search_results_component_1.SearchResultsComponent,
                search_results_item_component_1.SearchResultsItemComponent
            ],
            imports: [
                ngx_youtube_player_1.YoutubePlayerModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                firestore_1.AngularFirestoreModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                http_1.HttpClientModule,
                ngx_drag_scroll_1.DragScrollModule,
                ngx_Flip_1.FlipModule,
                ngx_drag_drop_1.DndModule,
                // angular matireal
                material_2.MatButtonModule,
                material_2.MatCheckboxModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                tabs_1.MatTabsModule,
                form_field_1.MatFormFieldModule,
                material_1.MatInputModule,
                dialog_1.MatDialogModule,
                material_3.MatStepperModule,
                material_4.MatRadioModule,
                material_5.MatCardModule,
                menu_1.MatMenuModule,
            ],
            entryComponents: [
                join_list_popup_component_1.JoinListPopupComponent,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map