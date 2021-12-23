import { ParserRuleContext } from 'antlr4ts';
import { Issue } from '../issue-service/issue';
import { SourceReference } from './source-reference';

export abstract class Node {
  abstract ctx: ParserRuleContext;
  abstract toString(): string;

  _sourceReference: SourceReference;
  get sourceReference(): SourceReference {
    if (this._sourceReference) return this._sourceReference;
    return (this._sourceReference = SourceReference.fromContext(this.ctx));
  }

  toPlain(object?: unknown): unknown {
    const entries = Object.entries(object || this)
      .filter(([k, v]) => typeof v !== 'function' && v !== null && v !== undefined && k !== 'ctx')
      .map(([k, v]) => {
        if (Array.isArray(v)) return [k, v.map(this.toPlain)];
        if (typeof v === 'object' || v instanceof Node) return [k, this.toPlain(v)];
        return [k, v];
      });

    const nodeType = (object || this).constructor.name.replace(/Node$/, '');
    return { nodeType, ...Object.fromEntries(entries) };
  }

  toJson(): string {
    const tabWidth = 2;
    return JSON.stringify(this.toPlain(), null, tabWidth);
  }

  raiseError(message: string): never {
    throw Issue.errorFromContext(this.ctx, message);
  }
}
