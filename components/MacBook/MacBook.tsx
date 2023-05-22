import React, { ReactNode } from "react";

type Props = {
  image: any;
};

const MacBook = ({ image }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="css-mb with-glare w-[40rem]">
        <div className="mb-display-position">
          <div className="mb-display">
            <div className="mb-screen-position">
              <div className="mb-screen">{image}</div>
            </div>
          </div>
        </div>
        <div className="mb-body"></div>
        <div className="mb-bottom-cover"></div>
      </div>
    </div>
  );
};

export default MacBook;
