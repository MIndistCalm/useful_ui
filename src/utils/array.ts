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
