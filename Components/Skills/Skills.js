import classNames from "classnames";
import NextImage from "Components/Image/NextImage";
import { skillContent } from "Configs/skillsConfig";
import { useState } from "react";
import { BsCaretRight } from "react-icons/bs";
import styles from "./skills.module.scss";

const Stack = ({ stack }) => {
  const [overStack, setOverStack] = useState(false);

  return (
    <li
      key={stack.name}
      onMouseEnter={() => setOverStack(true)}
      onMouseLeave={() => setOverStack(false)}
      className={classNames("flex-center", {
        [styles.scale]: overStack,
      })}
    >
      <span>
        <stack.icon size={30} />
      </span>
      <p className="">{stack.name}</p>
    </li>
  );
};

const Skills = () => {
  const { desc, stacks } = skillContent;

  return (
    <section id="skills" className="content">
      <div className={styles.body}>
        <h2>Skills</h2>
        <div className={classNames("flex-center", styles.desc)}>
          <NextImage
            src={"/assets/my_picture.webp"}
            styleName={styles.myImage}
          />

          <div className={classNames(styles.content)}>
            <p className="normal-text">{desc}</p>
          </div>

          <div className={styles.stacks}>
            <p className="bold large-text">My Stacks</p>

            <ul className={classNames(styles.stacklist, "flex-center")}>
              {stacks.map((stack) => (
                <Stack stack={stack} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
