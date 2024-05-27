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
import {$Node, Node, hasSemantic, is, isGroupNode} from '../../../../core/parser/node/node';
import {InvokeNode} from '../../../../core/parser/node/syntax/invoke/invoke-node';
import {IdNode} from '../../../../core/parser/node/token/id/id-node';
import {Nothing, nothing} from '../../../../lib/types';
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
    const node = getInvokeNode(nodeAtPosition);

    if (!hasSemantic(node)) {
      return nothing;
    }

    const signatureHelp = new SignatureHelp();

    signatureHelp.activeParameter = 1;
    signatureHelp.activeSignature = 0;

    node.semantic.
    if (is<IdNode>(node.instance, $Node.ID)) {
      const signature = new SignatureInformation('', 'signature doc');
      signature.parameters = [
        new ParameterInformation('p1', 'param doc 1'),
        new ParameterInformation('p2', 'param doc 2'),
      ];
      signatureHelp.signatures = [signature];
    }

    return signatureHelp;
  }
}

function getInvokeNode(nodeAtPosition: Node | Nothing): InvokeNode | Nothing {
  if (!nodeAtPosition) {
    return nothing;
  }

  if (isGroupNode(nodeAtPosition.parent) && is<InvokeNode>(nodeAtPosition.parent.parent, $Node.INVOKE)) {
    return nodeAtPosition.parent.parent;
  }

  return nothing;
}
