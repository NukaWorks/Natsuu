import * as React from "react";

import MainMenu from "../../molecules/main-menu";
import { Search } from "../../molecules/search";

import { useUserData } from "../../../user-context";

import "./index.scss";
import { ThemeSwitcher } from "../../molecules/theme-switcher";

export const TopNavigationMain = ({ isOpenOnMobile }) => {
  const userData = useUserData();

  return (
    <div className="top-navigation-main">
      <MainMenu isOpenOnMobile={isOpenOnMobile} />

      <Search id="top-nav-search" />
      <ThemeSwitcher />
    </div>
  );
};
