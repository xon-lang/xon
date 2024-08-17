import {Nothing} from '../types';

export interface LinkedListNode<T> {
  data: T;
  prev: LinkedListNode<T> | Nothing;
  next: LinkedListNode<T> | Nothing;
}

export interface LinkedList<T> {
  firstNode: LinkedListNode<T>;
  lastNode: LinkedListNode<T>;
  nodes: LinkedListNode<T>[];
}
