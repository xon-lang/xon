import {
  CancellationToken,
  ExtensionContext,
  OutputChannel,
  ParameterInformation,
  Position,
  ProviderResult,
  SignatureHelp,
  SignatureHelpContext,
  SignatureHelpProvider,
  SignatureInformation,
  TextDocument,
  languages,
} from 'vscode';
import {CommaNode} from '../../../../core/analyzer/lexical/token/comma/comma-node';
import {IdNode} from '../../../../core/analyzer/lexical/token/id/id-node';
import {OpenNode} from '../../../../core/analyzer/lexical/token/open/open-node';
import {DeclarationSemantic} from '../../../../core/analyzer/semantic/declaration/declaration-semantic';
import {$Semantic, semanticIs} from '../../../../core/analyzer/semantic/semantic';
import {IdTypeSemantic} from '../../../../core/analyzer/semantic/type/id/id-type-semantic';
import {IdValueSemantic} from '../../../../core/analyzer/semantic/value/id/id-value-semantic';
import {ItemNode} from '../../../../core/analyzer/syntax/group/item-node';
import {$Node, Node, hasSemantic, is, isGroupNode} from '../../../../core/analyzer/syntax/node';
import {InvokeNode} from '../../../../core/analyzer/syntax/node/invoke/invoke-node';
import {Integer, Nothing, nothing} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {findNodeByPositionInSyntax, getDocumentSyntax} from '../../util';

export function configureSignatureFeature(context: ExtensionContext, channel: OutputChannel) {
  context.subscriptions.push(
    languages.registerSignatureHelpProvider(LANGUAGE_NAME, new LanguageSignatureProvider(channel), '(', ','),
  );
}

class LanguageSignatureProvider implements SignatureHelpProvider {
  constructor(private channel: OutputChannel) {}

  provideSignatureHelp(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: SignatureHelpContext,
  ): ProviderResult<SignatureHelp> {
    const syntax = getDocumentSyntax(document, this.channel);
    const nodeAtPosition = findNodeByPositionInSyntax(syntax, position);
    const invokeParameterIndex = getInvokeNodeAndParameterIndex(nodeAtPosition);

    if (!hasSemantic(invokeParameterIndex?.invokeNode)) {
      return nothing;
    }

    if (is<IdNode>(invokeParameterIndex.invokeNode.instance, $Node.ID)) {
      const declaration = getIdNodeDeclaration(invokeParameterIndex.invokeNode.instance);

      if (declaration) {
        const signatureHelp = new SignatureHelp();
        const documentation = declaration.documentation?.setPadding(0) ?? '';
        const signature = new SignatureInformation('fff(p1, p2)', documentation);

        signatureHelp.activeSignature = 0;
        signatureHelp.activeParameter = invokeParameterIndex.parameterIndex;

        signature.parameters = [
          new ParameterInformation('p1', 'param doc 1'),
          new ParameterInformation('p2', 'param doc 2'),
        ];

        signatureHelp.signatures = [signature];

        return signatureHelp;
      }
    }

    return nothing;
  }
}

function getInvokeNodeAndParameterIndex(
  nodeAtPosition: Node | Nothing,
): {invokeNode: InvokeNode; parameterIndex: Integer} | Nothing {
  if (!nodeAtPosition) {
    return nothing;
  }

  if (is<OpenNode>(nodeAtPosition, $Node.OPEN)) {
    if (isGroupNode(nodeAtPosition.parent) && is<InvokeNode>(nodeAtPosition.parent.parent, $Node.INVOKE)) {
      return {
        invokeNode: nodeAtPosition.parent.parent,
        parameterIndex: 0,
      };
    }
  }

  if (is<CommaNode>(nodeAtPosition, $Node.COMMA)) {
    // todo fix complexity of 'parent.parent.parent...'
    if (
      is<ItemNode>(nodeAtPosition.parent, $Node.ITEM) &&
      isGroupNode(nodeAtPosition.parent.parent) &&
      is<InvokeNode>(nodeAtPosition.parent.parent.parent, $Node.INVOKE)
    ) {
      return {
        invokeNode: nodeAtPosition.parent.parent.parent,
        parameterIndex: nodeAtPosition.parent.parent.items.indexOf(nodeAtPosition.parent),
      };
    }
  }

  return nothing;
}

export function getIdNodeDeclaration(node: IdNode): DeclarationSemantic | Nothing {
  if (
    semanticIs<IdTypeSemantic>(node.semantic, $Semantic.ID_TYPE) ||
    semanticIs<IdValueSemantic>(node.semantic, $Semantic.ID_VALUE)
  ) {
    return node.semantic.declaration;
  }

  if (semanticIs<DeclarationSemantic>(node.semantic, $Semantic.DECLARATION)) {
    return node.semantic;
  }

  return nothing;
}
