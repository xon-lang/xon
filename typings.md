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
[Number] String ->
  x is Function<[Number], String>
```

## Literal

```ts
123   -> x is 123::type   -> x is Integer<123>
"abc" -> x is "abc"::type -> x is String<"abc">
```

## Expression must return a predicate

```ts
// declaration
true -> x == true

// pow
2^3  -> x == 2^3

// range
in 1..5 -> x in 1..5
```
