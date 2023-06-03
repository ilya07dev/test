import { Card } from "@src/components/Card";
import { Skeleton } from "@src/components/Sceleton";

import { UseGetCards } from "@src/libs";
import { ICard } from "@src/libs/types";

import cn from "classnames";

export function MainPage() {
  const { data, isLoading, isError } = UseGetCards(1);

  if (isLoading)
    return (
      <>
        {new Array(20).fill(0, 1).map((_: number) => (
          <Skeleton key={_} />
        ))}
      </>
    );

  if (isError) return <span>wrong</span>;

  return (
    <main className="p-5 md:py-[35px] xl:px-[150px]">
      <section
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
          "mt-6 gap-x-6 gap-y-10"
        )}
      >
        {data.items.map((el: ICard) => (
          <Card key={el.id} id={el.id} item={el} />
        ))}
      </section>
    </main>
  );
}
