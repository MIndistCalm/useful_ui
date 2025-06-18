/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TDocument {
  id: number;
  title: string;
  company: {
    companyId: number;
    companyName: string;
  };
}

export interface TCompany {
  companyId: number;
  companyName: string;
  documents: { id: number; title: string }[];
}

export const documnets: TDocument[] = [
  {
    id: 1,
    title: 'Document 1',
    company: { companyId: 1, companyName: 'Company 1' },
  },
  {
    id: 2,
    title: 'Document 2',
    company: { companyId: 2, companyName: 'Company 1' },
  },
  {
    id: 3,
    title: 'Document 3',
    company: { companyId: 3, companyName: 'Company 3' },
  },
  {
    id: 4,
    title: 'Document 4',
    company: { companyId: 4, companyName: 'Company 5' },
  },
  {
    id: 5,
    title: 'Document 5',
    company: { companyId: 5, companyName: 'Company 5' },
  },
];

// convertToCompany
export const convertToCompany = (docs: TDocument[]) => {
  return docs.reduce((acc, doc) => {
    const {
      company: { companyId, companyName },
      ...documnetInfo
    } = doc;

    const findedCompany = acc.find(
      (company) => company.companyName === companyName
    );

    if (!findedCompany) {
      acc.push({ companyId, companyName, documents: [documnetInfo] });
      return acc;
    }

    findedCompany.documents.push(documnetInfo);

    return acc;
  }, [] as TCompany[]);
};

// Напишите функцию objectsAndArrays, которая:
// - Принимает объект, где ключи — строки, а значения — любые.
// - Возвращает массив ключей, заменяя ключ 'first' на строку "formatted key".

export const object = {
  first: 'first value',
  second: 2,
  third: { a: 1 },
};

export const objectsAndArrays = (obj: Record<string, any>) => {
  return Object.keys(obj).map((item) =>
    item === 'first' ? 'formated key' : item
  );
};

//Вам дана готовая реализация функции useMutation, которая возвращает массив с двумя элементами:
// функцию mutate и объект состояния state.
// Ваша задача:
// - Извлечь функцию mutate из результата вызова useMutation.
// - Получить результат выполнения функции mutate и вернуть его из функции destruct

// export const destruct = () => {
//   const { mutate } = useMutation();

//   return mutate();
// };

// Напишите асинхронную функцию, которая:
// - Принимает число.
// - Возвращает промис:
// - Если число чётное, промис должен вернуть true.
// - Если число нечётное, промис должен вернуть false.
// - В случае ошибки промис должен вернуть -1

// export const asyncFunc = async (num: number) => {
//   try {
//     return num % 2 == 0 ? true : false;
//   } catch {
//     return -1;
//   }
// };

// Напишите свою функцию deepCopy

// export const deepCopy = (obj: any) => {
//   const result = {};

//   const objType = typeof obj;

//   if (
//     objType !== 'object' ||
//     objType == undefined ||
//     obj === null ||
//     Array.isArray(obj) ||
//     objType == 'function'
//   ) {
//     return obj;
//   }

//   const keys = Object.keys(obj);

//   keys.forEach((key) => {
//     result[key] = deepCopy(obj[key]);
//   });

//   return result;
// };
