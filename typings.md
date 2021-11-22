# Typings

## `is` operator decomposition

```js
x is String -> x::type.is<String>()
```

## ID

```js
String -> x is String
```

## Union

```js
null || String -> x is String || x == null
```

## Nullable

```js
String? -> null || String
```

## Array

```js
String[] -> xx is Array<String>
```

## Function

```js
(Integer, Char) String
  -> x is Function<[Integer, Char], String>
```

## Literal

```js
123   -> x == 123
'abc' -> x == 'abc'
```
