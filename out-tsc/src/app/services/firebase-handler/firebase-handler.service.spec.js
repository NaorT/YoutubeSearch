"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var firebase_handler_service_1 = require("./firebase-handler.service");
describe('FirebaseHandlerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [firebase_handler_service_1.FirebaseHandlerService]
        });
    });
    it('should be created', testing_1.inject([firebase_handler_service_1.FirebaseHandlerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=firebase-handler.service.spec.js.map