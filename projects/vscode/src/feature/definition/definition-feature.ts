import {
  CancellationToken,
  Definition,
  DefinitionProvider,
  ExtensionContext,
  languages,
  Location,
  OutputChannel,
  Position,
  ProviderResult,
  TextDocument,
  Uri,
} from 'vscode';
import {nothing} from '../../../../core/lib/core';
import {$Node, is} from '../../../../core/parser/node/node';
import {IdNode} from '../../../../core/parser/node/token/id/id-node';
import {OperatorNode} from '../../../../core/parser/node/token/operator/operator-node';
import {$Semantic, parseSemantic, semanticIs} from '../../../../core/semantic/semantic';
import {DeclarationTypeSemantic} from '../../../../core/semantic/type/declaration/declaration-type-semantic';
import {LANGUAGE_NAME} from '../../config';
import {convertRange, findNodeBytPositionInSyntax, getDocumentSyntax} from '../../util';

export function configureDefinitionFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerDefinitionProvider(LANGUAGE_NAME, new LanguageDefinitionProvider(channel)),
  );
}

class LanguageDefinitionProvider implements DefinitionProvider {
  constructor(private channel: OutputChannel) {}

  provideDefinition(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Definition> {
    const syntax = getDocumentSyntax(document);
    parseSemantic(syntax);

    const node = findNodeBytPositionInSyntax(syntax, position);

    if (is<IdNode>(node, $Node.ID) || is<OperatorNode>(node, $Node.OPERATOR)) {
      if (semanticIs<DeclarationTypeSemantic>(node.semantic, $Semantic.DECLARATION_TYPE)) {
        return navigateToDeclaration(node.semantic);
      }
    }

    return nothing;
  }
}

function navigateToDeclaration(semantic: DeclarationTypeSemantic): ProviderResult<Definition> {
  const {reference} = semantic.declaration;

  if (reference.source.location) {
    const uri = Uri.parse(reference.source.location);
    const range = convertRange(reference.range);

    return new Location(uri, range);
  }

  return nothing;
}
