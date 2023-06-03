import { ReactElement } from "react";

export type RoutesType = "main" | "card";

export interface IRoute {
  title: string;
  path: string;
  icon?: ReactElement;
  link: (...args: any[]) => string;
  children?: Record<string, IRoute>;
  disabled?: boolean;
}

export const routes: Record<RoutesType, IRoute> = {
  main: {
    title: "main",
    path: "/",
    link: () => "/",
  },
  card: {
    title: "card",
    path: "/card/:id",
    link: (id: string) => `/card/${id}`,
  },
} as const;
