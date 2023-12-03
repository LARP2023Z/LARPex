export type FuckPrivateFields<T> = {
  [P in keyof T]: T[P];
};
