# Typings

## `is` operator decomposition

```ts
x is String -> x::type.is<String>()
```

## ID

```ts
String -> x is String
```

## Union

```ts
null || String -> x is String || x == null
```

## Nullable

```ts
String? -> null || String
```

## Array

```typescript
String[] ->
  x is Array && x.size == 0 || x is Array<String>
```

## Tuple

```ts
[Number, String] ->
  x is Tuple<[Number, String]>
```

## Function

```ts
(Number, Boolean) String ->
  x is Function<[Number, Boolean], String>
```

## Indexer

```ts
[Number, Boolean] String ->
  x is Function<[Number, Boolean], String>
```

## Literal

```ts
123   -> x == 123
'abc' -> x == 'abc'
```
