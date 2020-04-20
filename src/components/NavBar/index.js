import React, { useLayoutEffect } from "react";
import { UlWrapper } from "./navbar.style";
export const NavData=[
  {
      id:0,
      label:'Home',
      url:'/home',
      class:'home'
  },
  {
      id:1,
      label:'Profile',
      url:'/cred'
      ,
      class:'cred'
  },
  {
      id:2,
      label:'Reports',
      url:'/reports'
      ,
      class:'reports'
  },
]
export default function NavBar({
  setActiveItem,
  setActiveItemClass,
  activeItemClass,
  activeItem,
}) {
  const changeActiveItem = (item) => {
    setActiveItem(item.class);
  };
  useLayoutEffect(() => {
    setActiveItemClass(activeItem);
  }, [activeItem, setActiveItemClass]);
  return (
    <React.Fragment>
      <UlWrapper activeItemClass={activeItemClass}>
        {NavData.map((item, index) => {
          return (
            <li
              key={index}
              className={item.class}
              onClick={() => {
                changeActiveItem(item);
              }}
            >
              <span>{item.label}</span>
              <span className="bar" />
            </li>
          );
        })}
      </UlWrapper> 
         
    </React.Fragment>
  );
}
