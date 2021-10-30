import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { IdToken } from '../../../tree/id-token';
import { TypeTree } from '../../../tree/type/type.tree';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionHandler } from '../expression/expression-handler';
import { MetadataHandler } from '../metadata-handler';
import { TypeHandler } from '../type/type-handler';

export class DeclarationHandler extends MetadataHandler {
  handle(declaration: {
    id: IdToken;
    type?: TypeTree;
    value?: ExpressionTree;
    typeMetadata: TypeMetadata;
  }) {
    declaration.id.declarationLink = declaration.id.sourceReference;
    if (declaration.type) new TypeHandler(this.scope).handle(declaration.type);
    if (declaration.value) new ExpressionHandler(this.scope).handle(declaration.value);
    declaration.typeMetadata = declaration.type?.typeMetadata || declaration.value.typeMetadata;
    this.scope.addDeclaration(declaration);
  }
}
