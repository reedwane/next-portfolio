import classNames from "classnames";
import Image from "next/image";
import styles from "./Logo.module.scss";

const Logo = ({ style }) => {
  return (
    <div className="flex-btw">
      <div className={classNames(styles.logoContainer, style)}>
        <Image layout="fill" src="/logo.png" alt="reedwane" />
      </div>
      <p className="bold medium-text">Reedwane</p>
    </div>
  );
};

export default Logo;
