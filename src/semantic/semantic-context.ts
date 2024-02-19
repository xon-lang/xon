import { Issue } from '../issue/issue';
import { Nothing, String2 } from '../lib/core';
import { Source } from '../source/source';
import { SourceReference, sourceReference } from '../source/source-reference';
import { Node } from '../syntax/node/node';
import { DeclarationSemantic } from './semantic';

export interface SemanticContext {
  parent: SemanticContext | Nothing;
  source: Source;
  // hidden: Node[];
  issues: Issue[];
  declarations: Record<String2, DeclarationSemantic[]>;

  createChildContext: () => SemanticContext;
  createReference: (node: Node) => SourceReference;
  addDeclaration: (declaration: DeclarationSemantic) => void;
  findDeclarations: (name: String2) => DeclarationSemantic[];
}

export function semanticContext(
  parent: SemanticContext | Nothing,
  source: Source,
  issues: Issue[] = [],
): SemanticContext {
  return {
    parent,
    source,
    issues,
    declarations: {},

    createChildContext(): SemanticContext {
      return semanticContext(this, this.source, this.issues);
    },

    createReference(node: Node): SourceReference {
      return sourceReference(this.source, node.range.start);
    },

    addDeclaration(declaration: DeclarationSemantic): void {
      if (!this.declarations[declaration.name]) {
        this.declarations[declaration.name] = [];
      }

      this.declarations[declaration.name].push(declaration);
    },

    findDeclarations(name: String2): DeclarationSemantic[] {
      return this.declarations[name] ?? this.parent?.findDeclarations(name) ?? [];
    },
  };
}
