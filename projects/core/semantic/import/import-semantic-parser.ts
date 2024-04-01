import {dirname, join, resolve} from 'path';
import {SyntaxResult} from '../../../core/parser/syntax-context';
import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {Nothing, String2, nothing} from '../../lib/core';
import {$Node, is} from '../../parser/node/node';
import {ImportNode} from '../../parser/node/syntax/import/import-node';
import {parseSyntax} from '../../parser/syntax';
import {TextResource, textResourceFromFilePath} from '../../util/resource/text/text-resource';
import {DeclarationManager} from '../declaration-manager';
import {$Semantic, semanticParse} from '../semantic';
import {SemanticContext} from '../semantic-context';
import {ImportSemantic} from './import-semantic';

const LIB_FOLDER = resolve(__dirname, '../../lib');

export function syntaxImportsParse(context: SemanticContext, syntax: SyntaxResult) {
  for (const statement of syntax.statements) {
    if (is<ImportNode>(statement.item, $Node.IMPORT)) {
      importNodeParse(context, statement.item);
    }
  }
}

export function importNodeParse(context: SemanticContext, node: ImportNode): Nothing {
  const reference = context.createReference(node.location);
  const location = normalizeImportString(node.location.value, context.resource.location);
  const resource = textResourceFromFilePath(location);

  if (!resource) {
    context.issueManager.addError(node.location.range, ISSUE_MESSAGE.cannotFindResource(location));

    return;
  }

  const semantic: ImportSemantic = {
    $: $Semantic.IMPORT,
    reference,
    resource,
  };

  node.location.semantic = semantic;

  const syntax = parseSyntax(resource);
  const {declarationManager} = semanticParse(syntax);

  if (!context.declarationManager.imports) {
    context.declarationManager.imports = [];
  }

  context.declarationManager.imports.push(declarationManager);
}

export function declarationManagerFromImportString(importString: String2): DeclarationManager | Nothing {
  const location = normalizeImportString(importString);
  const resource = textResourceFromFilePath(location);

  if (!resource) {
    return nothing;
  }

  const syntax = parseSyntax(resource);
  const {declarationManager} = semanticParse(syntax);

  return declarationManager;
}

function normalizeImportString(location: String2, targetSourceLocation?: String2 | Nothing): String2 {
  const locationWithExtension = location + '.xon';

  if (location.startsWith('/') || location.startsWith('.')) {
    if (targetSourceLocation) {
      return join(dirname(targetSourceLocation), locationWithExtension);
    }

    return locationWithExtension;
  }

  // todo handle additional extension or other formats (json, other data files...)
  return join(LIB_FOLDER, locationWithExtension);
}
function sourceFromResource(resource: TextResource) {
  throw new Error('Function not implemented.');
}
