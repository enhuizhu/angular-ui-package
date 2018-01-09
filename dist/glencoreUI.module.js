import { NgModule } from '@angular/core';
import { TestDirective } from './directives/test.directive';
var GlencoreUIModule = (function () {
    function GlencoreUIModule() {
    }
    GlencoreUIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [TestDirective],
                    declarations: [TestDirective],
                },] },
    ];
    GlencoreUIModule.ctorParameters = function () { return []; };
    return GlencoreUIModule;
}());
export { GlencoreUIModule };
//# sourceMappingURL=glencoreUI.module.js.map