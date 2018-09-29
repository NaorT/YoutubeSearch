"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var net_service_1 = require("./net.service");
describe('NetService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [net_service_1.NetService]
        });
    });
    it('should be created', testing_1.inject([net_service_1.NetService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=net.service.spec.js.map