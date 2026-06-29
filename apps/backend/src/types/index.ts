export type Nullable<T> = T | null
export type JSONValue = string | number | boolean | null | JSONValue[] | Record<string, JSONValue>
