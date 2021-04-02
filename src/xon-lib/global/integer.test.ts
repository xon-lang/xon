// import { NameType, NamingService } from '../../naming-service/naming-service';
import { parseExpression } from '../../parse';
// import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
// import { IndexExpressionTree } from '../../tree/expression/index-expression/index-expression.tree';
// import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
// import { ExpressionStatementTree } from '../../tree/statement/expression-statement/expression-statement.tree';
// import { ArrayTypeTree } from '../../tree/type/array-type/array-type.tree';
import { getTypeDefinition } from '../../tree/type/get-lib-type.util';
import { PlainTypeTree } from '../../tree/type/plain-type/plain-type.tree';

test('integer + integer', () => {
  const code = '1 + 16XA';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.getType() as PlainTypeTree).name).toBe('Integer');
  expect((getTypeDefinition(tree.getType()).inheritanceType as PlainTypeTree).name).toBe('Number');
});

// eslint-disable-next-line jest/no-commented-out-tests
// test('index + literal', () => {
//   const code = `
// val = [1, 2, 3]
// val[1] + 2`;
//   const tree = parseProgram(code);

//   const valInfo = NamingService.instance.find('val');
//   expect(valInfo.name).toBe('val');
//   expect(valInfo.nameType).toBe(NameType.Assignment);
//   expect(((valInfo.type as ArrayTypeTree).itemType as PlainTypeTree).name).toBe('Integer');

//   const operatorExpression = (tree.statements[1] as ExpressionStatementTree)
//     .value as OperatorExpressionTree;
//   expect(operatorExpression).toBeInstanceOf(OperatorExpressionTree);

//   const { left, right } = operatorExpression;
//   expect((left as IndexExpressionTree).object).toBeInstanceOf(IdExpressionTree);
//   expect((left as IndexExpressionTree).object.getType()).toBeInstanceOf(ArrayTypeTree);
//   expect(((left as IndexExpressionTree).object.getType() as ArrayTypeTree).itemType).toBeInstanceOf(
//     PlainTypeTree,
//   );
//   expect(
//     (((left as IndexExpressionTree).object.getType() as ArrayTypeTree).itemType as PlainTypeTree)
//       .name,
//   ).toBe('Integer');
//   expect(right).toBeInstanceOf(LiteralExpressionTree);
//   expect((right as LiteralExpressionTree).getType()).toBeInstanceOf(PlainTypeTree);

//   expect(operatorExpression.getType().toString()).toBe('Integer');
//   expect((operatorExpression.getType() as PlainTypeTree).name).toBe('TestIndex');
// });
