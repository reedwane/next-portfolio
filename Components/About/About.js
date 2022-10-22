import NextImage from "Components/Image/NextImage";
import styles from "./about.module.scss";
import { SiNextdotjs, SiGmail } from "react-icons/si";
import { FaReact, FaSass, FaLinkedinIn, FaGithub } from "react-icons/fa";
import classNames from "classnames";
import Link from "next/link";
import useQueries from "hooks/useQueries";

const About = () => {
  const { isMobile } = useQueries();

  const iconSize = isMobile ? 20 : 30;

  return (
    <section className={styles.about} id="home">
      <div className="content">
        <div className={classNames("flex-btw", styles.hero)}>
          <NextImage
            className={styles.heroImg}
            src={"/assets/official_websites.jpg"}
          />

          <div className={styles.heroTexts}>
            <p className="medium-text">Hi, Welcome to my Domain</p>

            <h2>
              My name is <span className="primary">Ridwan</span>
            </h2>
            <h3>
              I am a <span className="primary"> Front-End Web Developer</span>
            </h3>

            <p className="normal-text">
              I am passionate about making impact and creating solutions through
              technology. I have collaborated with different teams and
              organizations in contributing to excellent product development,
              building websites and apps that gives businesses the ultimate
              edge. I will be glad to take on your amazing project too!
            </p>

            <div className={classNames("flex-btw", styles.highlightsContacts)}>
              <div className={styles.highlights}>
                <p className="bold medium-text">Skills Highlights</p>
                <div className={classNames("flex-start", styles.icons)}>
                  <span>
                    <FaReact size={iconSize} />
                  </span>
                  <span>
                    <SiNextdotjs size={iconSize} />
                  </span>
                  <span>
                    <FaSass size={iconSize} />
                  </span>
                </div>
              </div>

              <div className="">
                <p className="bold medium-text">Contact</p>
                <div className={classNames("flex-start", styles.icons)}>
                  <Link href={"mailto:ridwangboyega.ak@gmail.com"}>
                    <a>
                      <SiGmail size={iconSize} />
                    </a>
                  </Link>
                  <Link href={"https://github.com/reedwane"}>
                    <a>
                      <FaGithub size={iconSize} />
                    </a>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/ridwan-abdulkareem/"}
                  >
                    <a>
                      <FaLinkedinIn size={iconSize} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
