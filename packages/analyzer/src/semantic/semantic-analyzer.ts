// import {
//   $AnalyzerType,
//   declarationManagerFromImportString,
//   DeclarationScope,
//   DEFAULT_SEMANTIC_CONFIG,
//   newDeclarationScope,
//   SemanticAnalyzerConfig,
//   StatementNode,
//   statementsParse,
//   SyntaxAnalyzer,
//   syntaxFromResource,
// } from '#analyzer';
// import {ArrayData, newArrayData, Nothing, nothing, TextResource} from '#common';
// import {AnalyzerDiagnosticManager} from '#diagnostic';
// import {Model} from '#typing';

// export type SemanticAnalyzer = Model & {
//   syntaxAnalyzer: SyntaxAnalyzer;
//   resource: TextResource;
//   config: SemanticAnalyzerConfig;
//   diagnosticManager: AnalyzerDiagnosticManager;
//   declarationManager: DeclarationScope;
//   statements: ArrayData<StatementNode>;

//   pushDeclarationScope(): void;
//   popDeclarationScope(): void;
// };

// export const $SemanticAnalyzer = () => $AnalyzerType<SemanticAnalyzer>('SemanticAnalyzer');

// export function createSemanticAnalyzer(
//   syntaxAnalyzer: SyntaxAnalyzer,
//   semanticConfig?: Partial<SemanticAnalyzerConfig> | Nothing,
// ): SemanticAnalyzer {
//   const config = {...DEFAULT_SEMANTIC_CONFIG, ...semanticConfig};

//   const imports =
//     semanticConfig?.defaultImports?.filterMap((x) => declarationManagerFromImportString(x)) ??
//     newArrayData<DeclarationScope>();

//   const semanticAnalyzer: SemanticAnalyzer = {
//     $: $SemanticAnalyzer(),
//     syntaxAnalyzer: syntaxAnalyzer,
//     resource: syntaxAnalyzer.resource,
//     diagnosticManager: syntaxAnalyzer.diagnosticManager,
//     statements: syntaxAnalyzer.statements,
//     declarationManager: newDeclarationScope(nothing, imports),
//     config,

//     pushDeclarationScope(): void {
//       this.declarationManager = newDeclarationScope(this.declarationManager);
//     },

//     popDeclarationScope(): void {
//       if (this.declarationManager.parent) {
//         this.declarationManager = this.declarationManager.parent;
//       } else {
//         throw new Error('Not implemented');
//       }
//     },
//   };

//   statementsParse(semanticAnalyzer, semanticAnalyzer.statements);

//   return semanticAnalyzer;
// }

// export function semanticFromResource(
//   resource: TextResource,
//   semanticConfig?: Partial<SemanticAnalyzerConfig> | Nothing,
// ): SemanticAnalyzer {
//   const syntaxAnalyzer = syntaxFromResource(resource);

//   return createSemanticAnalyzer(syntaxAnalyzer, semanticConfig);
// }
