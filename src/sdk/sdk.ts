/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Diag } from "./diag.js";
import { Health } from "./health.js";

export class CriblControlPlane extends ClientSDK {
  private _diag?: Diag;
  get diag(): Diag {
    return (this._diag ??= new Diag(this._options));
  }

  private _health?: Health;
  get health(): Health {
    return (this._health ??= new Health(this._options));
  }
}
