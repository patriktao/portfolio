import { useState, useRef } from "react";

const ImageSlide2: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [mouseDownAt, setMouseDownAt] = useState<number>(0);
  const [prevPercentage, setPrevPercentage] = useState<number>(0);

  const handleOnDown = (e: MouseEvent) => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(Number(trackRef.current?.dataset.percentage));
  };

  const handleOnMove = (e: MouseEvent) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = parseFloat(String(mouseDownAt)) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(String(prevPercentage)) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    trackRef.current!.dataset.percentage = nextPercentage.toString();

    trackRef.current!.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const images = trackRef.current!.getElementsByClassName("image");
    for (const image of Array.from(images)) {
      (image as HTMLElement).animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  /* -- Had to add extra lines for touch events -- */

  const handleMouseDown = (e: MouseEvent) => handleOnDown(e);
  const handleTouchStart = (e: TouchEvent) => handleOnDown(e.touches[0]);
  const handleMouseUp = (e: MouseEvent) => handleOnUp(e);
  const handleTouchEnd = (e: TouchEvent) => handleOnUp(e.touches[0]);
  const handleMouseMove = (e: MouseEvent) => handleOnMove(e);
  const handleTouchMove = (e: TouchEvent) => handleOnMove(e.touches[0]);

  return (
    <div
      ref={trackRef}
      id="image-track"
      data-mouse-down-at="0"
      data-prev-percentage="0"
    >
      <img
        className="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable={false}
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        draggable={false}
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwa"
        draggable={false}
      />
    </div>
  );
};

export default ImageSlide2;
