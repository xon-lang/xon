import { ParserRuleContext } from 'antlr4ts';
import { SourceReference } from './source-reference';

export abstract class BaseTree {
  public ctx?: ParserRuleContext;
  _sourceReference: SourceReference;
  get sourceReference() {
    if (this._sourceReference) {
      this._sourceReference = SourceReference.fromContext(this.ctx);
    }
    return this._sourceReference;
  }

  public toPlain(object?: unknown): unknown {
    const entries = Object.entries(object || this)
      .filter(([k, v]) => typeof v !== 'function' && v !== null && v !== undefined && k !== 'ctx')
      .map(([k, v]) => {
        if (Array.isArray(v)) return [k, v.map(this.toPlain)];
        if (typeof v === 'object' || v instanceof BaseTree) return [k, this.toPlain(v)];
        return [k, v];
      });

    const treeType = (object || this).constructor.name.replace(/Tree$/, '');
    return { treeType, ...Object.fromEntries(entries) };
  }

  public toJson(): string {
    const tabWidth = 2;
    return JSON.stringify(this.toPlain(), null, tabWidth);
  }

  public toString(): string {
    return null;
  }
}
