export type SearchParamsType = {
  search?: string;
  minRating?: number;
  maxRating?: number;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
  orderBy?: string;
  sort?: string;
  [key: string]: string | number | boolean | undefined;
};
