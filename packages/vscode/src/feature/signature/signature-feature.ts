import {
  $AttributeDeclarationSemantic,
  $CommaNode,
  $DeclarationSemantic,
  $FunctionTypeSemantic,
  $GroupItemNode,
  $GroupNode,
  $GroupOpenNode,
  $IdNode,
  $IdTypeSemantic,
  $IdValueSemantic,
  $InvokeNode,
  AttributeDeclarationSemantic,
  DeclarationSemantic,
  IdNode,
  InvokeNode,
  Node,
} from '#analyzer';
import {Integer, nothing, Nothing} from '#common';
import {is} from '#typing';
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
    const nodeAtPosition = semantic.syntaxAnalyzer.findNodeAtPosition(
      convertVscodePosition(document, position),
    );
    const invokeParameterIndex = getInvokeNodeAndParameterIndex(nodeAtPosition);

    if (!invokeParameterIndex?.invokeNode.semantic) {
      return nothing;
    }

    if (is(invokeParameterIndex.invokeNode.instance, $IdNode())) {
      const declaration = getIdNodeDeclaration(invokeParameterIndex.invokeNode.instance);

      if (is(declaration, $AttributeDeclarationSemantic())) {
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

  if (is(nodeAtPosition, $GroupOpenNode())) {
    if (is(nodeAtPosition.parent, $GroupNode()) && is(nodeAtPosition.parent.parent, $InvokeNode())) {
      return {
        invokeNode: nodeAtPosition.parent.parent,
        parameterIndex: 0,
      };
    }
  }

  if (is(nodeAtPosition, $CommaNode())) {
    if (
      is(nodeAtPosition.parent, $GroupItemNode()) &&
      is(nodeAtPosition.parent.parent, $GroupNode()) &&
      is(nodeAtPosition.parent.parent.parent, $InvokeNode())
    ) {
      return {
        invokeNode: nodeAtPosition.parent.parent.parent,
        parameterIndex: nodeAtPosition.parent.parent.items.firstItemIndex(nodeAtPosition.parent) ?? -1,
      };
    }
  }

  return nothing;
}

function getIdNodeDeclaration(node: IdNode): DeclarationSemantic | Nothing {
  if (is(node.semantic, $IdTypeSemantic()) || is(node.semantic, $IdValueSemantic())) {
    return node.semantic.declaration;
  }

  if (is(node.semantic, $DeclarationSemantic())) {
    return node.semantic;
  }

  return nothing;
}

function getSignatureHelp(declaration: AttributeDeclarationSemantic, parameterIndex: Integer): SignatureHelp {
  const signatureHelp = new SignatureHelp();
  const signature = getSignatureInformation(declaration);

  signatureHelp.activeSignature = 0;
  signatureHelp.activeParameter = parameterIndex;
  signatureHelp.signatures = [signature];

  return signatureHelp;
}

function getSignatureInformation(declaration: AttributeDeclarationSemantic): SignatureInformation {
  const declarationHeader = declarationSemanticHeaderToString(declaration)?.toNativeString() ?? '';

  const description = declaration.documentation?.setPadding(0)?.trim().toNativeString() ?? '';
  const descriptionMarkdown = new MarkdownString(description);
  const signature = new SignatureInformation(declarationHeader, descriptionMarkdown);

  if (is(declaration.type, $FunctionTypeSemantic())) {
    signature.parameters =
      declaration.type.parameters?.map((x) => getParameterInformation(x))?.toNativeArray() ?? [];
  }

  return signature;
}

function getParameterInformation(parameter: DeclarationSemantic | Nothing): ParameterInformation {
  if (!parameter || !parameter.documentation) {
    return new ParameterInformation(parameter?.name.toNativeString() ?? '');
  }

  const documentation = new MarkdownString(
    `**${parameter.name.toNativeString()}**: ${parameter.documentation.toNativeString()}`,
  );
  return new ParameterInformation(parameter.name.toNativeString(), documentation);
}
