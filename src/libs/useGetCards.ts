import axios from "axios";
import { useQuery } from "react-query";
import { ICard } from "./types";

function QueryCards(page: number) {
  return [
    `card-from-${page}`,
    async () => {
      const { data } = await axios.get(
        `https://testguru.ru/frontend-test/api/v1/items?page=${page}`
      );
      return data;
    },
  ];
}

interface useTokensDataReturn {
  data: {
    items: ICard[];
  };
  isLoading: boolean;
  isError: boolean;
}
export function UseGetCards(page: number): useTokensDataReturn {
  const [key, queryData] = QueryCards(page);
  const { data, isLoading, isError } = useQuery(key, queryData);
  return { data, isLoading, isError };
}
