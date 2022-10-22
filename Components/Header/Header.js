import Logo from "Components/Logo/Logo";
import { navContent } from "Configs/navbarConfigs";
import Link from "next/link";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useOnClickOutside } from "usehooks-ts";
import styles from "./header.module.scss";
import useQueries from "hooks/useQueries";

const Header = () => {
  const { navTabs } = navContent;
  const navRef = useRef();
  const { isMobile, isTablet } = useQueries();

  const [openMenu, setOpenMenu] = useState(false);

  const handleClickOutside = () => {
    isTablet && openMenu && setOpenMenu(false);
  };

  useEffect(() => {
    !isTablet ? setOpenMenu(true) : setOpenMenu(false);
  }, [isTablet]);

  useOnClickOutside(navRef, handleClickOutside);

  return (
    <header className={styles.header}>
      <div className="content flex-btw">
        <Logo style={styles.headerLogo} />

        {isTablet && !openMenu ? (
          <MdMenu
            onClick={() => setOpenMenu(true)}
            className={styles.ham}
            size={isMobile ? 30 : 40}
          />
        ) : (
          isTablet && (
            <MdClose
              onClick={() => setOpenMenu(false)}
              className={styles.ham}
              size={isMobile ? 30 : 40}
            />
          )
        )}

        <nav
          className={classNames("flex-end", {
            [styles.navList]: openMenu,
            hide: isTablet && !openMenu,
          })}
        >
          <ul ref={navRef} className={classNames({ "flex-btw": !isTablet })}>
            {navTabs.map((link, i) => (
              <li
                key={i}
                className={classNames("normal-text", {
                  [styles.link]: openMenu,
                })}
              >
                <Link href={link.href}>
                  <a>{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
