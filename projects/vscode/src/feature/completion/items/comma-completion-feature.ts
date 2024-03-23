// import { DeclarationTree, ImportValueMetadata, Tree } from '@xon/core';
// import {
//   CancellationToken,
//   CompletionContext,
//   CompletionItem,
//   CompletionItemKind,
//   CompletionItemProvider,
//   CompletionList,
//   OutputChannel,
//   Position,
//   ProviderResult,
//   TextDocument,
// } from 'vscode';
// import { documentToDocumentTree, findNodeByPosition } from '../../util';

// export class CommaCompletionItemProvider implements CompletionItemProvider {
//   constructor(private channel: OutputChannel) {}

//   provideCompletionItems(
//     document: TextDocument,
//     position: Position,
//     _token: CancellationToken,
//     _context: CompletionContext
//   ): ProviderResult<Array2<CompletionItem> | CompletionList<CompletionItem>> {
//     const documentInfo = documentToDocumentTree(document);
//     if (!documentInfo) return null;

//     const shiftPosition = new Position(
//       position.line,
//       Math.max(0, position.character - 2)
//     );
//     const node = findNodeByPosition(documentInfo.tree, shiftPosition);
//     if (!node) return null;
//     const parameter = this.closestDestructureParameter(node);
//     if (
//       parameter?.destructure.length &&
//       parameter.value?.metadata instanceof ImportValueMetadata
//     ) {
//       const declarations =
//         parameter.value.metadata
//           .importScope()
//           ?.declarations.filter(
//             (x) => !parameter.destructure.find((z) => z.name?.text === x.name)
//           ) || [];
//       return declarations
//         .filter((x) => x.name)
//         .map((x) => new CompletionItem(x.name!, CompletionItemKind.Property));
//     }
//     return null;
//   }

//   closestDestructureParameter(node: Tree): DeclarationTree | null {
//     if (node instanceof DeclarationTree && node.destructure.length) {
//       return node;
//     }
//     if (
//       node.parent instanceof DeclarationTree &&
//       node.parent.destructure.length
//     ) {
//       return node.parent;
//     }
//     if (
//       node.parent?.parent instanceof DeclarationTree &&
//       node.parent.parent.destructure.length
//     ) {
//       return node.parent.parent;
//     }
//     return null;
//   }
// }
