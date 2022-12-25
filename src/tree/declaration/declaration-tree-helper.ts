import { DeclarationContext, MultipleDeclarationContext, SingleDeclarationContext } from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { MultipleDeclarationTree } from '~/tree/declaration/multiple/multiple-declaration-tree';
import { SingleDeclarationTree } from '~/tree/declaration/single/single-declaration-tree';

export function getDeclarationTree(ctx: DeclarationContext): DeclarationTree {
  if (ctx instanceof MultipleDeclarationContext) return new MultipleDeclarationTree(ctx);
  if (ctx instanceof SingleDeclarationContext) return new SingleDeclarationTree(ctx);

  Issue.errorFromContext(ctx, `Declaration tree not found for "${ctx.constructor.name}"`);
}

export const isSingleDeclaration = (declaration: DeclarationTree): declaration is SingleDeclarationTree =>
  declaration instanceof SingleDeclarationTree;

export const isMultipleDeclaration = (declaration: DeclarationTree): declaration is MultipleDeclarationTree =>
  declaration instanceof MultipleDeclarationTree;
