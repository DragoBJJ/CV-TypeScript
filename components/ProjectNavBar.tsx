import { FC } from "react";
import React from "react";
import { Category } from "../type";

const NavItem: FC<{
  value: Category | "all";
  filterCategory: Function;
  active: string;
}> = ({ value, filterCategory, active }) => {
  let className =
    "cursor-pointer hover:text-blue-600 transition duration-200 ease-in-out text-lg capitalize";
  if (active === value) {
    className += " text-blue-600";
  }
  return (
    <li onClick={() => filterCategory(value)} className={className}>
      {value}
    </li>
  );
};

export const ProjectNavBar: FC<{
  filterCategory: Function;
  active: string;
}> = ({ filterCategory, active }) => {
  return (
    <div className="flex space-x-3 px-3 py-2 overflow-x-scroll list-none">
      <NavItem value="all" filterCategory={filterCategory} active={active} />
      <NavItem value="react" filterCategory={filterCategory} active={active} />
      <NavItem
        value="javaScript"
        filterCategory={filterCategory}
        active={active}
      />
      <NavItem value="python" filterCategory={filterCategory} active={active} />
      <NavItem
        value="typeScript"
        filterCategory={filterCategory}
        active={active}
      />
      <NavItem value="node" filterCategory={filterCategory} active={active} />
    </div>
  );
};

export default ProjectNavBar;
