import {Nothing} from '../types';

export interface LinkedListNode<T> {
  data: T;
  next: LinkedListNode | Nothing;
}
