import { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}

interface navData {
  name: string;
  route: string;
}

const data: navData[] = [
  { name: "About", route: "/" },
  { name: "Projects", route: "/projects" },
  { name: "Resume", route: "/resume" }
];
function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const NavItem: FunctionComponent<NavItemProps> = ({
  activeItem,
  setActiveItem,
  name,
  route
}) => {
  return (
    <>
      {activeItem !== name && (
        <Link href={route}>
          <a>
            <span
              className="hover:text-blue-600 transition"
              onClick={() => setActiveItem(name)}
            >
              {name}
            </span>
          </a>
        </Link>
      )}
    </>
  );
};

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveItem(capitalizeFirstLetter(pathname.substr(1)));
    } else {
      setActiveItem("About");
    }
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-xl text-blue-600 ml-4 border-b-2 border-blue-600 md:text-2xl">
        {activeItem}
      </span>
      <div className="text-lg flex space-x-5">
        {data.map(item => {
          return (
            <NavItem
              key={item.name}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              name={item.name}
              route={item.route}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
