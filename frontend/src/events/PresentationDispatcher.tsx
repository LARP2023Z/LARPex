import {Dispatch} from "react";
import {ScreenId} from "./types/ScreenId";

export class PresentationDispatcher {
    gUpdateView!: Dispatch<ScreenId>;

    injectGlobalUpdateView(guv: Dispatch<ScreenId>) {
        this.gUpdateView = guv;
    }
}
