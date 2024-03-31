// function typeCollapse(
//   context: SyntaxContext,
//   index: Integer,
//   left: Node | Nothing,
//   operator: OperatorNode,
//   right: Node | Nothing,
// ): CollapseResult {
//   if (!left || is<OperatorNode>(left, $Node.OPERATOR)) {
//     return nothing;
//   }

//   const rightNode = right && !is<OperatorNode>(right, $Node.OPERATOR) ? right : nothing;

//   if (is<InvokeNode>(left, $Node.GROUP) && left.open.text === GROUP_OPEN) {
//     const node = parametersTypeCollapse(left, operator, rightNode);

//     return {spliceIndex, node};
//   }

//   if (is<GroupNode>(left, $Node.GROUP)) {
//     const node = groupTypeCollapse(context, left, operator, rightNode);

//     return {spliceIndex, deleteCount: 3, node};
//   }

//   return nothing;
// }

// function invokeTypeCollapse(
//   context: SyntaxContext,
//   index: Integer,
//   invoke: InvokeNode,
//   operator: OperatorNode,
//   type: Node | Nothing,
// ): CollapseResult {
//   if (is<GroupNode>(invoke.instance, $Node.GROUP) && invoke.instance.open.text === OBJECT_OPEN) {
//     for (const item of invoke.instance.items) {
//       if (is<IdNode>(item.value, $Node.ID)) {
//         item.value = idToDeclaration(item.value);
//       }
//     }

//     for (const item of invoke.group.items) {
//       if (is<IdNode>(item.value, $Node.ID)) {
//         item.value = idToDeclaration(item.value);
//       }
//     }

//     const node = functionNode(invoke.group, invoke.instance, operator, type, nothing, nothing);

//     return {spliceIndex: index - 1, node};
//   }

//   return nothing;
// }

// function groupTypeCollapse(
//   context: SyntaxContext,
//   index: Integer,
//   group: GroupNode,
//   operator: OperatorNode,
//   type: Node | Nothing,
// ): CollapseResult {
//   for (const item of group.items) {
//     if (is<IdNode>(item.value, $Node.ID)) {
//       item.value = idToDeclaration(item.value);
//     }
//   }

//   const node = functionNode(nothing, group, operator, type, nothing, nothing);

//   return {spliceIndex: index - 1, node};
// }
