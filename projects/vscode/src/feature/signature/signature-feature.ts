import {
  CancellationToken,
  ExtensionContext,
  MarkdownString,
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
import {CommaNode} from '../../../../core/analyzer/lexical/node/comma/comma-node';
import {IdNode} from '../../../../core/analyzer/lexical/node/id/id-node';
import {OpenNode} from '../../../../core/analyzer/lexical/node/open/open-node';
import {DeclarationSemantic} from '../../../../core/analyzer/semantic/node/declaration/declaration-semantic';
import {$Semantic, semanticIs} from '../../../../core/analyzer/semantic/node/semantic-node';
import {IdTypeSemantic} from '../../../../core/analyzer/semantic/node/type/id/id-type-semantic';
import {IdValueSemantic} from '../../../../core/analyzer/semantic/node/value/id/id-value-semantic';
import {ItemNode} from '../../../../core/analyzer/syntax/group/item-node';
import {$Node, Node, hasSemantic, is, isGroupNode} from '../../../../core/analyzer/syntax/node';
import {InvokeNode} from '../../../../core/analyzer/syntax/node/invoke/invoke-node';
import {Integer, Nothing, nothing} from '../../../../lib/types';
import {LANGUAGE_NAME} from '../../config';
import {findNodeByPositionInSyntax, getDocumentSyntax, typeSemanticToString} from '../../util';

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
        return getSignatureHelp(declaration, invokeParameterIndex.parameterIndex);
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

function getIdNodeDeclaration(node: IdNode): DeclarationSemantic | Nothing {
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

function getSignatureHelp(declaration: DeclarationSemantic, parameterIndex: Integer): SignatureHelp {
  const signatureHelp = new SignatureHelp();
  const signature = getSignatureInformation(declaration);

  signatureHelp.activeSignature = 0;
  signatureHelp.activeParameter = parameterIndex;
  signatureHelp.signatures = [signature];

  return signatureHelp;
}

function getSignatureInformation(declaration: DeclarationSemantic): SignatureInformation {
  const description = declaration.documentation?.setPadding(0)?.trim() ?? '';
  const parametersNames =
    declaration.parameters
      ?.map((x) => `${x?.name ?? ''}: ${typeSemanticToString(x?.type) ?? ''}`)
      ?.join(', ') ?? '';

  const descriptionMarkdown = new MarkdownString(description);
  const signature = new SignatureInformation(`${declaration.name}(${parametersNames})`, descriptionMarkdown);

  signature.parameters = declaration.parameters?.map((x) => getParameterInformation(x)) ?? [];

  return signature;
}

function getParameterInformation(parameter: DeclarationSemantic | Nothing): ParameterInformation {
  if (!parameter || !parameter.documentation) {
    return new ParameterInformation(parameter?.name ?? '');
  }

  const documentation = new MarkdownString(`**${parameter.name}**: ${parameter.documentation}`);
  return new ParameterInformation(parameter.name, documentation);
}
