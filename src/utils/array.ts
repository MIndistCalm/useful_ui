// map
export const arrayMap = <T>(
  arr: T[],
  callback: (item: T, index: number) => T
) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') return;

  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }

  return result;
};
// reduce
export const arrayReduce = <T>(
  arr: T[],
  callback: (acc: T, item: T, index?: number) => T,
  initialValue: T
) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') return;

  let resultValue = initialValue;

  for (let i = 0; i < arr.length; i++) {
    resultValue = callback(resultValue, arr[i], i);
  }

  return resultValue;
};
// filter
export const arrayFilter = <T>(
  arr: T[],
  callback: (item: T, index?: number) => boolean
) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') return;

  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};
//  find
export const arrayFind = <T>(
  arr: T[],
  callback: (item: T, index?: number) => boolean
) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') return;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return arr[i];
    }
  }
};
// findIndex
export const arrayFindIndex = <T>(
  arr: T[],
  callback: (item: T, index?: number) => boolean
) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') return;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return i;
    }
  }
};
// forEach o(n)
export const arrayForEach = <T>(
  arr: T[],
  callback: (item: T, index?: number) => void
) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') return;

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};
// some o(n)
export const arraySome = <T>(
  arr: T[],
  callback: (item: T, index?: number) => boolean
) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') return;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return true;
    }
  }

  return false;
};
// every o(n)
export const arrayEvery = <T>(
  arr: T[],
  callback: (item: T, index?: number) => boolean
) => {
  if (!Array.isArray(arr) || typeof callback !== 'function') return;
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  return true;
};
// o(n*n)
export const removeDuplicates = <T>(arr: T[]) => {
  if (!Array.isArray(arr)) return;

  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
};
// o(n)
export const removeDuplicates2 = <T>(arr: T[]) => {
  if (!Array.isArray(arr)) return;

  return [...new Set(arr)];
};

// o(n)
export const removeDuplicates3 = <T extends string | number | symbol>(
  arr: T[]
) => {
  if (!Array.isArray(arr)) return;

  const mapa = {} as Record<T, boolean>;

  return arr.reduce((acc, cur) => {
    if (!mapa[cur]) {
      mapa[cur] = true;
      acc.push(cur);
    }
    return acc;
  }, [] as T[]);
};
