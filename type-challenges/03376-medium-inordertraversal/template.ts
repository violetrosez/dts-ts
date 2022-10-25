interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// 为啥需要这个括号
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// 条件类型作用于联合类型时，会变成分布式
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];
