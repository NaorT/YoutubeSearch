"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var drag_and_drop_service_1 = require("./drag-and-drop.service");
describe('DragAndDropService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [drag_and_drop_service_1.DragAndDropService]
        });
    });
    it('should be created', testing_1.inject([drag_and_drop_service_1.DragAndDropService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=drag-and-drop.service.spec.js.map