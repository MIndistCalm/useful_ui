///--------------------------------------------------------------------------------------
/// print directory structure
///--------------------------------------------------------------------------------------

interface Directory {
  name: string;
  children?: Directory[];
}

const data: Directory = {
  name: 'root',
  children: [
    {
      name: 'dir1',
      children: [
        {
          name: 'dir2',
          children: [
            {
              name: 'file1',
            },
            {
              name: 'file2',
            },
          ],
        },
        {
          name: 'file3',
        },
      ],
    },
    {
      name: 'dir1',
      children: [
        {
          name: 'dir2',
          children: [
            {
              name: 'file1',
            },
            {
              name: 'file2',
            },
          ],
        },
        {
          name: 'file3',
        },
      ],
    },
  ],
};

function printDirectoryStructure() {
  const stack = [{ node: data, level: 0 }];

  while (stack.length) {
    const { node, level } = stack.pop() || {};

    console.log(' '.repeat((level || 0) * 2) + node?.name);

    if (node?.children) {
      for (const child of node.children) {
        stack.push({ node: child, level: (level || 0) + 1 });
      }
    }
  }
}

// console.log(printDirectoryStructure());

///--------------------------------------------------------------------------------------

///--------------------------------------------------------------------------------------
/// Алгоритмичкие задачи
///--------------------------------------------------------------------------------------
// Задача:
// Реализовать функцию findPath,
// которая находит путь от корня
// до указанного файла или директории.
// Если элемент не найден, вернуть null.
interface FileSystemNode {
  name: string;
  type: 'file' | 'directory';
  children?: FileSystemNode[];
}

const fileSystem: FileSystemNode = {
  name: 'root',
  type: 'directory',
  children: [
    {
      name: 'documents',
      type: 'directory',
      children: [
        {
          name: 'work',
          type: 'directory',
          children: [
            {
              name: 'report.txt',
              type: 'file',
            },
          ],
        },
      ],
    },
    {
      name: 'photos',
      type: 'directory',
      children: [
        {
          name: 'vacation.jpg',
          type: 'file',
        },
      ],
    },
  ],
};

const findPath = (
  fileSystem: FileSystemNode,
  path: string
): string[] | null => {
  const stack = [{ node: fileSystem, path }];

  return null;
};

findPath(fileSystem, 'report.txt');
// Вернёт: ["root", "documents", "work", "report.txt"]

findPath(fileSystem, 'photos');
// Вернёт: ["root", "photos"]

findPath(fileSystem, 'nonexistent.txt');
// Вернёт: null

// Напишите функцию, которая принимает массив чисел и возвращает новый массив:
// условия:
// 1. Все отрицательные числа преобразованы в положительные
// 3. Все числа округлены до целых
// 2. где все элементы отсортированы по возрастанию
// 4. Все дубликаты удалены

// Пример:
const input = [3.7, -2.1, 3.7, 4.2, -1.8, 4.2, 5.0, -3.3];

// Ожидаемый результат:
// [1, 2, 3, 4, 5]

const tranformToInteger = (num: number): number => {
  return Number(num.toString().split('.')[0]);
};

function sortUniquePositiveCeil(arr: number[]): number[] {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr[0]];

  const result: number[] = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      const first = Math.abs(result[i]);
      const second = Math.abs(result[j]);

      if (first > second) {
        const temp = first;
        result[i] = second;
        result[j] = temp;
      }
    }
  }

  const transformedToInteger = result.map(tranformToInteger);

  return [...new Set(transformedToInteger)];
}

// console.log(sortUniquePositiveCeil(input));

// Напишите функцию, которая принимает строку, содержащую числа и буквы,
// и возвращает новую строку, где:
// 1. Все числа умножены на 2
// 2. Все буквы преобразованы в верхний регистр
// 3. Все пробелы удалены
// 4. Все специальные символы удалены

// Пример:
const inputstr = '@ a1b2 c3!d4@e5';

// Ожидаемый результат:
// "A2B4C6D8E10"
// "A2B4C6D8E10"

function transformString(str: string): string {
  if (!str) return '';
  const result = str.split('').filter((s) => s !== ' ');

  if (typeof str === 'string') {
    for (let i = 0; i < result.length; i++) {
      const char = result[i];

      if (!isNaN(parseInt(char))) {
        result[i] = String(parseInt(char) * 2);
      } else if (char >= 'a' && char <= 'z') {
        result[i] = char.toUpperCase();
      } else {
        result[i] = '';
      }
    }
  }

  return result.join('');
}

// Напишите функцию, которая проверяет, правильно ли расставлены скобки в строке.
// Скобки могут быть трех типов: (), [], {}
// Строка может содержать любые другие символы

// Примеры:
const examples = [
  '()', // true
  '()[]{}', // true
  '(]', // false
  '([)]', // false
  '{[]}', // true
  '(((', // false
  ')))', // false
  'a(b)c[d]e{f}', // true
  '', // true
];

function isBalanced(str: string): boolean {
  // Создаем стек для хранения открывающих скобок
  const stack: string[] = [];

  // Создаем объект с парами скобок
  const brackets: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // Создаем множество закрывающих скобок для быстрой проверки
  const closingBrackets = new Set([')', ']', '}']);

  // Проходим по каждому символу в строке
  for (const char of str) {
    // Если это открывающая скобка
    if (char in brackets) {
      stack.push(char);
    }
    // Если это закрывающая скобка
    else if (closingBrackets.has(char)) {
      // Если стек пуст, значит нет соответствующей открывающей скобки
      if (stack.length === 0) {
        return false;
      }

      // Берем последнюю открывающую скобку из стека
      const lastOpen = stack.pop()!;

      // Проверяем, соответствует ли она текущей закрывающей
      if (brackets[lastOpen] !== char) {
        return false;
      }
    }
  }

  // В конце стек должен быть пустым
  return stack.length === 0;
}

console.log(examples.map(isBalanced));

// function br(input) {
//   const map = {
//     '[': ']',
//     '{': '}',
//     '(': ')',
//   };
//   var waiting = [];
//   for (var i = 0; i < input.length; i++) {
//     var ch = input[i];
//     if (map[ch]) {
//       waiting.push(map[ch]);
//     } else if (waiting[waiting.length - 1] === ch) {
//       waiting.pop();
//     } else {
//       return -1;
//     }
//   }
//   return waiting.reverse().join('');
// }

// console.log(br('{([])[{()'), '}]}');
// console.log(br('(()){]}'), -1);
///--------------------------------------------------------------------------------------
