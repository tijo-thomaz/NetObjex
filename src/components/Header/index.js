import React, { useState } from "react";
import { HeaderWrapper, Logo, ProPic, UserNameText } from "./header.style";
import NavBar from "../NavBar";
export default function Header() {
  const [activeItem, setActiveItem] = useState("home");
  const [activeItemClass, setActiveItemClass] = useState("home");
  return (
    <React.Fragment>
      <header>
        <div className="header-content1">
          <h2>
            <Logo />
          </h2>
        </div>

        <div className="header-content2">
          <div className="header-core-content">
            <NavBar
              activeItem={activeItem}
              activeItemClass={activeItemClass}
              setActiveItem={setActiveItem}
              setActiveItemClass={setActiveItemClass}
            />

            <div className="user">
              <ProPic />
              <UserNameText>Dignity Health</UserNameText>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
