// import {
//   $DeclarationNode,
//   $ImportNode,
//   SemanticAnalyzer,
//   StatementNode,
//   importValueSemanticParse,
//   returnStatementSemanticParse,
//   statementDeclarationsParse,
//   valueSemanticParse,
// } from '#analyzer';
// import {ArrayData, nothing} from '#common';
// import {is} from '#typing';

// export function statementsParse(analyzer: SemanticAnalyzer, statements: ArrayData<StatementNode>): void {
//   if (statements.isEmpty()) {
//     return;
//   }

//   for (const statement of statements) {
//     if (is(statement.value, $ImportNode())) {
//       importValueSemanticParse(analyzer, statement.value);
//     }
//   }

//   const declarationNodes = statements.filterMap((x) => (is(x.value, $DeclarationNode()) ? x.value : nothing));
//   statementDeclarationsParse(analyzer, declarationNodes);

//   for (const statement of statements) {
//     for (const node of statement.children) {
//       if (is(node, $ImportNode())) {
//         continue;
//       }

//       if (is(node, $ReturnNode())) {
//         returnStatementSemanticParse(analyzer, node);

//         continue;
//       }

//       valueSemanticParse(analyzer, node);
//     }
//   }

//   // todo fix it if needed
//   analyzer.pushDeclarationScope();

//   for (const statement of statements) {
//     statementsParse(analyzer, statement.body);
//   }

//   analyzer.popDeclarationScope();
// }
