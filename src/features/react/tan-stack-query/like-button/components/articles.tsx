"use client";
import { ARTICLES } from "../constants/articles";
import { LikeButton } from "./like-button";
import { useLikeButton } from "./like-button/hooks";

export const Articles = () => {
  return (
    <div className="flex flex-col gap-6">
      {ARTICLES.map((article) => (
        <article
          key={article.id}
          className="flex items-center gap-2 p-2 border border-deepMocha rounded-md"
        >
          <h2 className="text-lg font-bold">{article.title}</h2>

          <LikeButton initialLikeCount={article.likes} />
        </article>
      ))}
    </div>
  );
};
