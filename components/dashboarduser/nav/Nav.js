import React, { useEffect, useState } from "react";
// import {
//   Account,
//   Address,
//   Followed,
//   Inbox,
//   Logout,
//   Order,
//   Pending,
//   RecentViewed,
//   Saved,
//   Settings,
// } from "../svg/SvgIcons";
import { useRouter } from "next/router";
import {
  Account,
  Address,
  Followed,
  Inbox,
  Logout,
  Order,
  Pending,
  RecentViewed,
  Saved,
  Settings,
} from "../../dashboardutils/SvgIcons";

export default function Nav() {
  const router = useRouter();
  const [selected, setSelected] = useState("My Account");
  const [hovered, setHovered] = useState("");
  const [navcontent, setNavContent] = useState([
    {
      name: "My Account",
      icon: <Account />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/account",
      selectedName: "account",
    },
    {
      name: "My Orders",
      icon: <Order />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/orders",
      selectedName: "orders",
    },
    {
      name: "Inbox",
      icon: <Inbox />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/inbox",
      selectedName: "inbox",
    },
    {
      name: "Pending Ratings",
      icon: <Pending />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/pending",
      selectedName: "pendingratings",
    },
    {
      name: "Saved Items",
      icon: <Saved />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/saved",
      selectedName: "saveditems",
    },
    {
      name: "Address Book",
      icon: <Address />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/address",
      selectedName: "addressbook",
    },
    {
      name: "Recently Viewed",
      icon: <RecentViewed />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/recent",
      selectedName: "recentviewed",
    },
    {
      name: "Followed Sellers",
      icon: <Followed />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/followed",
      selectedName: "followed",
    },
    {
      name: "Settings",
      icon: <Settings />,
      selectedColor: "#00BA34",
      unslectedColor: "#808080",
      route: "/dashboard/settings",
      selectedName: "settings",
    },
    {
      name: "Log Out",
      icon: <Logout />,
      selectedColor: "#FF0000",
      unslectedColor: "#808080",
      route: "/dashboard/logout",
      selectedName: "logout",
    },
  ]);

  useEffect(() => {
    const currentRoute = router.pathname;
    const selectedItem = navcontent.find((item) => item.route === currentRoute);

    if (selectedItem) {
      setSelected(selectedItem.name);
      const updatedNavContent = navcontent.map((item) => {
        const getIconColor = () => {
          if (item.name === selected) {
            return item.selectedColor;
          } else if (item.name === hovered) {
            return "#FFF";
          } else {
            return "#808080"; // Default color
          }
        };

        return {
          ...item,
          icon: React.cloneElement(item.icon, {
            color: getIconColor(),
          }),
        };
      });

      setNavContent(updatedNavContent);
    }
  }, [router.pathname, selected, hovered]);

  return (
    <div className="bg-transparent md:bg-white md:rounded-xl md:border md:border-[#E3E5E5] flex flex-row justify-start md:flex-col gap-3 md:pb-5 w-[100%] md:w-[80%]">
      {/* w-full flex overflow-x-auto py-4 bg-primary text-white px-4 justify-evenly lg:overflow-hidden */}
      {navcontent.map((data, index) => (
        <div
          key={index}
          className={`flex justify-center md:justify-start items-center gap-2 px-3 pl-3 md:pl-4 cursor-pointer hover:bg-[#00BA34] hover:text-[#fff] py-3 ${
            selected === data.name
              ? "bg-[#00BA34] bg-opacity-[5%] text-[#00BA34]"
              : "bg-transparent text-[#808080]"
          }`}
        >
          {/* Icon */}
          <div className="hover:fill-[#FFF]">{data.icon}</div>
          {/* Description */}
          <div className="hidden md:block">{data.name}</div>
        </div>
      ))}
    </div>
  );
}
