import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "@src/routers";

import { Like } from "../icons/Like";

import { ICard } from "@src/libs/types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import cn from "classnames";

interface IProps {
  item: ICard;
  id: string;
}

export function Card({ item, id }: IProps) {
  const [like, setLike] = useState(false);
  return (
    <article className="relative">
      {item.seen && (
        <span
          className={cn(
            "absolute top-5 left-1/2 translate-x-[-50%] z-10",
            "text-[12px] text-[#2C2C2C] py-[5px] px-2 bg-white rounded-lg"
          )}
        >
          Просмотрено
        </span>
      )}
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Link to={routes.card.link(id)}>
            <img
              className="w-full h-[400px] rounded-xl"
              src="https://avatars.mds.yandex.net/i?id=5f2a9db6db38499f95967fa5bc6c658e15f4c2e7-9234735-images-thumbs&n=13"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={routes.card.link(id)}>
            <img
              className="w-full h-[400px] rounded-xl"
              src="https://avatars.mds.yandex.net/i?id=70d1a55cf8df2200019fc27072eabb9d4c3c54a7-9050759-images-thumbs&n=13"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={routes.card.link(id)}>
            <img
              className="w-full h-[400px] rounded-xl"
              src="https://avatars.mds.yandex.net/i?id=9928bcef8455ae97a0a336eac7bca5e64b06b41f-9029247-images-thumbs&n=13"
              alt=""
            />
          </Link>
        </SwiperSlide>
      </Swiper>
      <div
        className={cn(
          "flex justify-between items-center mt-3",
          "text-[#2C2C2C] text-[22px]"
        )}
      >
        {item.price}
        <Like
          onClick={() => setLike(!like)}
          className={cn(
            "text-[#C7C7C7] hover:text-[#A4A4A4] duration-500 cursor-pointer",
            like && "text-[#00A0AB]"
          )}
        />
      </div>
      <p className="text-[#2C2C2C]">{item.title}</p>
      <div
        className={cn(
          "flex justify-between items-center",
          "text-[#8F8F8F] text-[12px]"
        )}
      >
        <span className="">{item.address}</span>
        <span>{item.createdAt}</span>
      </div>
    </article>
  );
}
