"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var youtube_service_1 = require("./youtube.service");
describe('YoutubeService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [youtube_service_1.YoutubeService]
        });
    });
    it('should be created', testing_1.inject([youtube_service_1.YoutubeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=youtube.service.spec.js.map