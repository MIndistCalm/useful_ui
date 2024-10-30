// map
export const arrayMap = <T>(
  arr: T[],
  callback: (item: T, index: number) => T
) => {
  if (!Array.isArray(arr) || typeof callback !== "function") return;

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
  if (!Array.isArray(arr) || typeof callback !== "function") return;

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
  if (!Array.isArray(arr) || typeof callback !== "function") return;

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
  if (!Array.isArray(arr) || typeof callback !== "function") return;

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
  if (!Array.isArray(arr) || typeof callback !== "function") return;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return i;
    }
  }
};

export const arrayForEach = <T>(
  arr: T[],
  callback: (item: T, index?: number) => void
) => {
  if (!Array.isArray(arr) || typeof callback !== "function") return;

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};

export const arraySome = <T>(
  arr: T[],
  callback: (item: T, index?: number) => boolean
) => {
  if (!Array.isArray(arr) || typeof callback !== "function") return;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return true;
    }
  }

  return false;
};

export const arrayEvery = <T>(
  arr: T[],
  callback: (item: T, index?: number) => boolean
) => {
  if (!Array.isArray(arr) || typeof callback !== "function") return;
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  return true;
};
