"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import { ItemsMenuMobile } from "./items-menu-mobile";
import { ToggleTheme } from "./toggle-theme";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("./")}>
        Coffe
        <span className="font-bold">Dream</span>
      </h1>

      {/* menu desktop */}
      <div className="items-center justify-between hidden sm:flex">
        <MenuList></MenuList>
      </div>

      {/* menu mobile */}
      <div className="flex sm:hidden">
        <ItemsMenuMobile></ItemsMenuMobile>
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        ></ShoppingCart>

        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        ></Heart>

        <User strokeWidth="1" className="cursor-pointer"></User>
        <ToggleTheme></ToggleTheme>
      </div>
    </div>
  );
};
