export const isPalindrome = (str: string) => {
  const localStr = str.toLowerCase().replace(/[^a-z0-9а-яА-ЯA-Z]/g, '');

  return localStr === localStr.split('').reverse().join('');
};

export const reverseEveryWords = (str: string) => {
  if (!str) return;

  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
};

export const reverseEveryWords2 = (str: string) => {
  if (!str) return;

  return str
    .split(' ')
    .reduce((acc, word) => {
      return acc + word.split('').reverse().join('') + ' ';
    }, '')
    .trimEnd();
};

export const clearClassName = (className: (string | undefined)[]): string => {
  return className.filter(String).join(' ');
};
