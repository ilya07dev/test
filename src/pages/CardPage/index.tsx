import { UseGetCards } from "@src/libs";
import { ICard } from "@src/libs/types";
import { useParams } from "react-router-dom";

export function CardPage() {
  const { id } = useParams();
  const { data } = UseGetCards(1);
  const card = data.items.find((el: ICard) => el.id === id);
  return (
    <section className=" bg-gray-800 min-h-screen flex justify-center items-center text-center">
      <article>
        <h2 className="text-[50px]">{card!.title}</h2>
        <span className="text-xl">{card!.address}</span>
      </article>
    </section>
  );
}
