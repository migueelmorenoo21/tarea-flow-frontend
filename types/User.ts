export interface User {
  id: string;
  name: string;
  email: string;
  isCompany: boolean;
  plan: string;
  createdAt: string;
  bio?: string;
  profesion?: string;
  pais?: string;
}
