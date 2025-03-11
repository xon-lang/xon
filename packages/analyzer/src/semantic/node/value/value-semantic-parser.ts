// import {
//   charValueSemanticTryParse,
//   idValueSemanticTryParse,
//   integerValueSemanticTryParse,
//   invokeValueSemanticTryParse,
//   memberValueSemanticTryParse,
//   Node,
//   SemanticAnalyzer,
//   stringValueSemanticTryParse,
//   unknownValueFromNode,
//   ValueSemantic,
// } from '#analyzer';
// import {ArrayData, newArrayData, Nothing} from '#common';

// type ValueSemanticTryParseFn = (analyzer: SemanticAnalyzer, node: Node) => ValueSemantic | Nothing;

// export function valueSemanticParse(analyzer: SemanticAnalyzer, node: Node): ValueSemantic {
//   const semantic =
//     parsers().firstMap((parse) => parse(analyzer, node)) ?? unknownValueFromNode(analyzer, node);
//   node.semantic = semantic;

//   return semantic;
// }

// function parsers(): ArrayData<ValueSemanticTryParseFn> {
//   return newArrayData([
//     integerValueSemanticTryParse,
//     charValueSemanticTryParse,
//     stringValueSemanticTryParse,
//     idValueSemanticTryParse,
//     memberValueSemanticTryParse,
//     invokeValueSemanticTryParse,
//   ]);
// }
