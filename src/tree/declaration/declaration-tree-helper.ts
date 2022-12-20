import {
  DeclarationContext,
  DefinitionDeclarationContext,
  DestructureDeclarationContext,
  OperatorDeclarationContext,
  ParameterDeclarationContext,
} from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { DefinitionDeclarationTree } from '~/tree/declaration/definition/definition-declaration-tree';
import { DestructureDeclarationTree } from '~/tree/declaration/destructure/destructure-declaration-tree';
import { OperatorDeclarationTree } from '~/tree/declaration/operator/operator-declaration-tree';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';

export function getDeclarationTree(ctx: DeclarationContext): DeclarationTree {
  if (ctx instanceof DestructureDeclarationContext) return new DestructureDeclarationTree(ctx);
  if (ctx instanceof ParameterDeclarationContext) return new ParameterDeclarationTree(ctx);
  if (ctx instanceof OperatorDeclarationContext) return new OperatorDeclarationTree(ctx);
  if (ctx instanceof DefinitionDeclarationContext) return new DefinitionDeclarationTree(ctx);

  Issue.errorFromContext(ctx, `Declaration tree not found for "${ctx.constructor.name}"`);
}

export const isDefinitionDeclaration = (declaration: DeclarationTree): declaration is DefinitionDeclarationTree =>
  declaration instanceof DefinitionDeclarationTree;
