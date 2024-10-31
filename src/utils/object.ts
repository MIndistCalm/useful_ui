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
    title: "Document 1",
    company: { companyId: 1, companyName: "Company 1" },
  },
  {
    id: 2,
    title: "Document 2",
    company: { companyId: 2, companyName: "Company 1" },
  },
  {
    id: 3,
    title: "Document 3",
    company: { companyId: 3, companyName: "Company 3" },
  },
  {
    id: 4,
    title: "Document 4",
    company: { companyId: 4, companyName: "Company 5" },
  },
  {
    id: 5,
    title: "Document 5",
    company: { companyId: 5, companyName: "Company 5" },
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
