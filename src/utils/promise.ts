// Свой promise.all
export const promiseAll = <T>(promises: Promise<T>[]) => {
  return new Promise<T[]>((resolve) => {
    const result: T[] = [];
    let count = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          result[index] = value;
          count++;

          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((reject) => {
          reject(reject);
        });
    });
  });
};

function resolveAfter2Seconds(x: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

export async function add1(x: number) {
  const a = await resolveAfter2Seconds(20); // 2
  const b = await resolveAfter2Seconds(30); // 2
  return x + (a as number) + (b as number);
}

export async function add2(x: number) {
  const promise_a = await resolveAfter2Seconds(20);
  const promise_b = await resolveAfter2Seconds(30);
  return x + ((await promise_a) as number) + ((await promise_b) as number);
}
