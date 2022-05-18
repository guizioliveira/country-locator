export type Country = {
  code: string;
  name: string;
  capital: string;
  currency: string;
  continent: {
    code: string;
    name: string;
  };
  languages: Array<{
    name: string;
  }>;
};
