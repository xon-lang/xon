import { ParserRuleContext } from 'antlr4ts';

export abstract class BaseTree {
  public ctx?: ParserRuleContext;

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
}
