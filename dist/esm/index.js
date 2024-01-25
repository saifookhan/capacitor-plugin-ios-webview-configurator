var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Plugins } from "@capacitor/core";
const { WebviewConfiguratorPlugin } = Plugins;
export function setBackForwardNavigationGestures(enable) {
    try {
        WebviewConfiguratorPlugin.setBackForwardNavigationGestures({ enable });
    }
    catch (error) { }
}
export function getBackForwardNavigationGesturesState() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield WebviewConfiguratorPlugin.getBackForwardNavigationGesturesState()
                .data;
        }
        catch (error) { }
    });
}
export function setWebviewBounce(enable) {
    try {
        WebviewConfiguratorPlugin.setWebviewBounce({ enable });
    }
    catch (error) { }
}
//# sourceMappingURL=index.js.map