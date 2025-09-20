import {AnalyzerContext, ModuleNode, newModuleNode, parseStatements} from '#analyzer';

export function parseModule(context: AnalyzerContext): ModuleNode {
  const {statements} = parseStatements(context);

  return newModuleNode(statements);
}
