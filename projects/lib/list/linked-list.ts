import {Array2, Nothing} from '../types';

export interface LinkedListNode<T> {
  data: T;
  prev: LinkedListNode<T> | Nothing;
  next: LinkedListNode<T> | Nothing;
}

export interface LinkedList<T> {
  firstNode: LinkedListNode<T>;
  lastNode: LinkedListNode<T>;
  nodes: Array2<LinkedListNode<T>>;
}
