import { useState } from "react";

type UseLikeButtonProps = {
  initialLikeCount: number;
};

export const useLikeButton = ({ initialLikeCount }: UseLikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isPending, setIsPending] = useState(false);

  const handleLike = async () => {
    if (isPending) return;

    const prevLiked = isLiked;
    const prevLikeCount = likeCount;
    setIsLiked(!prevLiked);

    setLikeCount((prev) => (prevLiked ? prevLikeCount - 1 : prevLikeCount + 1));

    setIsPending(true);
    try {
      await fakeMutation();
    } catch {
      setLikeCount(prevLikeCount);
      setIsLiked(prevLiked);
    } finally {
      setIsPending(false);
    }
  };

  return {
    isLiked,
    likeCount,
    handleLike,
  };
};

const fakeMutation = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve(true) : reject();
    }, 1000);
  });
