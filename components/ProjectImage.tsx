import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
  src: StaticImageData;
  title: string;
}

const ProjectImage = ({ src, title }: Props) => {
  return (
    <Image
      alt={title}
      className="max-w-lg border-2 border-neutral-600 rounded-lg"
      src={src}
    />
  );
};

export default ProjectImage;
