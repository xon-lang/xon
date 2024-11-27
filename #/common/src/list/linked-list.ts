import {Nothing} from '#/common';

export type LinkedListNode<T> = {
  data: T;
  prev: LinkedListNode<T> | Nothing;
  next: LinkedListNode<T> | Nothing;
};

export type LinkedList<T> = {
  firstNode: LinkedListNode<T>;
  lastNode: LinkedListNode<T>;
  nodes: LinkedListNode<T>[];
};
