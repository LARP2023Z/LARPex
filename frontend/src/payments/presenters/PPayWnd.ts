import { Dispatch } from "react";
import { PayActionId, VMPayWnd } from "../viewModels/VMPayWnd";

export class PPayWnd {
  vmpw!: VMPayWnd;
  uv!: Dispatch<PayActionId>;
  injectDataHandle(vmpw: VMPayWnd, uv: Dispatch<PayActionId>) {
    this.vmpw = vmpw;
    this.uv = uv;
  }
}
