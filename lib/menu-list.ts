import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  TablePropertiesIcon,
  MapPinHouse,
  Store
} from "lucide-react";

export type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  const isActive = (basePath: string) => pathname.startsWith(basePath);

  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: isActive("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Order",
          active: isActive("/orders"),
          icon: TablePropertiesIcon,
          submenus: [
            {
              href: "/orders",
              label: "All Orders",
              active: pathname === "/orders"
            },
            {
              href: "/orders/pending",
              label: "Pending Orders",
              active: pathname === "/orders/pending"
            }
          ]
        },
        {
          href: "/property",
          label: "Properties",
          active: isActive("/property"),
          icon: MapPinHouse,
          submenus: []
        },
        {
          href: "/vendor",
          label: "Vendors",
          active: isActive("/vendor"),
          icon: Store,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/user",
          label: "Users",
          active: isActive("/user"),
          icon: Users,
          submenus: []
        },
        {
          href: "/account",
          label: "Account",
          active: isActive("/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
