import { useState } from "react";

const useClient = (initialIndex, data) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const totalItems = data.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return {
    currentIndex,
    goToNext,
    goToPrev,
    currentItem: data[currentIndex],
  };
};

export default useClient;
