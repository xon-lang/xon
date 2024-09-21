import {Integer, nothing, Nothing} from '#common';
import {AttributeValueDeclarationSemantic, DeclarationSemantic, IdNode, InvokeNode, Node} from '#core';
import {$, hasSemantic, is} from '#typing';
import {
  convertVscodePosition,
  declarationSemanticHeaderToString,
  getDocumentSemantic,
  LANGUAGE_NAME,
} from '#vscode';
import {
  CancellationToken,
  ExtensionContext,
  languages,
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
} from 'vscode';

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
    const semantic = getDocumentSemantic(document, this.channel);
    const nodeAtPosition = semantic.syntaxAnalyzer.findNode(convertVscodePosition(document, position));
    const invokeParameterIndex = getInvokeNodeAndParameterIndex(nodeAtPosition);

    if (!hasSemantic(invokeParameterIndex?.invokeNode)) {
      return nothing;
    }

    if (is(invokeParameterIndex.invokeNode.instance, $.IdNode)) {
      const declaration = getIdNodeDeclaration(invokeParameterIndex.invokeNode.instance);

      if (is(declaration, $.AttributeValueDeclarationSemantic)) {
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

  if (is(nodeAtPosition, $.OpenNode)) {
    if (is(nodeAtPosition.parent, $.GroupNode) && is(nodeAtPosition.parent.parent, $.InvokeNode)) {
      return {
        invokeNode: nodeAtPosition.parent.parent,
        parameterIndex: 0,
      };
    }
  }

  if (is(nodeAtPosition, $.CommaNode)) {
    if (
      is(nodeAtPosition.parent, $.ItemNode) &&
      is(nodeAtPosition.parent.parent, $.GroupNode) &&
      is(nodeAtPosition.parent.parent.parent, $.InvokeNode)
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
  if (is(node.semantic, $.IdTypeSemantic) || is(node.semantic, $.IdValueSemantic)) {
    return node.semantic.declaration;
  }

  if (is(node.semantic, $.DeclarationSemantic)) {
    return node.semantic;
  }

  return nothing;
}

function getSignatureHelp(
  declaration: AttributeValueDeclarationSemantic,
  parameterIndex: Integer,
): SignatureHelp {
  const signatureHelp = new SignatureHelp();
  const signature = getSignatureInformation(declaration);

  signatureHelp.activeSignature = 0;
  signatureHelp.activeParameter = parameterIndex;
  signatureHelp.signatures = [signature];

  return signatureHelp;
}

function getSignatureInformation(declaration: AttributeValueDeclarationSemantic): SignatureInformation {
  const declarationHeader = declarationSemanticHeaderToString(declaration) ?? '';

  const description = declaration.documentation?.setPadding(0)?.trim() ?? '';
  const descriptionMarkdown = new MarkdownString(description);
  const signature = new SignatureInformation(declarationHeader, descriptionMarkdown);

  if (is(declaration.type, $.FunctionTypeSemantic)) {
    signature.parameters = declaration.type.parameters?.map((x) => getParameterInformation(x)) ?? [];
  }

  return signature;
}

function getParameterInformation(parameter: DeclarationSemantic | Nothing): ParameterInformation {
  if (!parameter || !parameter.documentation) {
    return new ParameterInformation(parameter?.name ?? '');
  }

  const documentation = new MarkdownString(`**${parameter.name}**: ${parameter.documentation}`);
  return new ParameterInformation(parameter.name, documentation);
}
