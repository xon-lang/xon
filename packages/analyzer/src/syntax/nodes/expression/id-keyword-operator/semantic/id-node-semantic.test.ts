import {
  $IdNode,
  $IdTypeSemantic,
  $MemberNode,
  $NominalTypeDeclarationSemantic,
  AnalyzerDiagnostic,
  collapseMemberNode,
  IdNode,
  IdTypeSemantic,
  MemberNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  newNominalTypeDeclarationSemantic,
  newSemanticContext,
  nonHiddenNodeGenerator,
  parseIdKeywordOperatorNode,
} from '#analyzer';
import {ArrayData, newArrayData, newText, newTextRange, newTextReference, newUri, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Id node semantics', () => {
  const text = newText('A');
  const {semantic} = getIdNode(text);

  expect(is(semantic, $IdTypeSemantic())).toBe(true);
  expect(is((semantic as IdTypeSemantic).declaration, $NominalTypeDeclarationSemantic())).toBe(true);
  expect((semantic as IdTypeSemantic).declaration?.name.toNativeString()).toBe('A');
});

function getIdNode(text: Text): IdNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseIdKeywordOperatorNode(context) as IdNode;
  const semanticContext = newSemanticContext();
  semanticContext.scope.add(
    newNominalTypeDeclarationSemantic(newTextReference(newUri(newText()), newTextRange()), newText('A')),
  );
  node.semantify!(semanticContext);

  expect(node).toBeTruthy();
  expect(is(node, $IdNode())).toBe(true);

  return node;
}

// Diagnostics
test('No errors', () => {
  const text = newText('abc.def');
  const diagnostics = memberNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Identifier expect', () => {
  const text = newText('abc.');
  const diagnostics = memberNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Identifier expect');
});

function memberNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseMemberNode(context).collapse(nodes, 0)?.node as MemberNode;

  expect(node).toBeTruthy();
  expect(is(node, $MemberNode())).toBe(true);

  return context.diagnostic.items;
}
