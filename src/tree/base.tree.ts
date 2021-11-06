import { ParserRuleContext } from 'antlr4ts';
import { SourceReference } from './source-reference';

export abstract class BaseTree {
  sourceReference?: SourceReference;

  constructor(public ctx?: ParserRuleContext) {
    if (!ctx) return;

    this.sourceReference = SourceReference.fromContext(ctx);
  }

  toPlain(object?: unknown): unknown {
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

  toJson(): string {
    const tabWidth = 2;
    return JSON.stringify(this.toPlain(), null, tabWidth);
  }

  toString(): string {
    return null;
  }
}
