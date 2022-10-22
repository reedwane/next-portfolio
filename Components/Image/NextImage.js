import classNames from "classnames";
import Image from "next/image";

const NextImage = ({ src, ...props }) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }} {...props}>
      <Image objectFit="cover" layout="fill" src={src} />
    </div>
  );
};

export default NextImage;
