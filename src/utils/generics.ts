export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface Todo2 {
  title: string;
  completed: boolean;
}

export type pickIt = 'title' | 'completed';
export type omitIt = 'id' | 'completed';
export type excludeIt = 'id' | 'completed';
// Pick
export type myPick<T, K extends keyof T> = { [P in K]: T[P] };

// Record
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type myRecord<K extends keyof any, T> = { [P in K]: T };

// Exclude
export type myExclude<T, U> = T extends U ? never : T;

// Omit
export type myOmit<T, K extends keyof T> = {
  [P in myExclude<keyof T, K>]: T[P];
};

// Примеры
export type pickedTodo = myPick<Todo, pickIt>;
export type recordedTodo = myRecord<pickIt, Todo>;
export type omitedTodo = myOmit<Todo, omitIt>;
