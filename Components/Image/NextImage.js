import classNames from "classnames";
import Image from "next/image";

const NextImage = ({ styleName, src }) => {
  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className={styleName}
    >
      <Image objectFit="cover" layout="fill" src={src} />
    </div>
  );
};

export default NextImage;
