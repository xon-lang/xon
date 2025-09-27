import {ModuleNode} from '#analyzer';
import {newCharacter, Text} from '#common';
import {translateTypescriptStatements, TypescriptStatementSeparator} from '#translator';

export function translateTypescriptModule(node: ModuleNode): Text {
  const body = translateTypescriptStatements(node.children, TypescriptStatementSeparator.Semicolon);

  if (body.isEmpty()) {
    return body;
  }

  return body.addLastItem(newCharacter('\n'));
}
