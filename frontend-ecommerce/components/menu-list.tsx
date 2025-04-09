"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      MatPerNau
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Bienvenido a un mundo de café exclusivo y experiencia
                      artesanal Descubre los sabores más auténticos y
                      fascinantes del café alrededor del mundo.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/pffers" title="Ofertas">
                Seccion dedicada a promociones y descuentos especiales
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complementarios como tazas, molinillos, prensas, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Cafés Creativos",
    href: "/category/cafes-creativos",
    description:
      "Explora combinaciones únicas como el Irish Coffee y el Affogato, donde sabores tradicionales se mezclan con un toque de creatividad.",
  },
  {
    title: "Cafés de Alto Octanaje",
    href: "/category/cafes-de-alto-octanaje",
    description:
      "Para quienes necesitan un golpe de energía, con opciones como el Doppio o el Red Eye, ideales para enfrentar cualquier desafío.",
  },
  {
    title: "Cafés Fríos",
    href: "/category/cafes-frios",
    description:
      "Refresca tu día con opciones heladas como el Cold Brew o el Frappuccino, perfectos para climas cálidos.",
  },
  {
    title: "Clásicos",
    href: "/category/clasicos",
    description:
      "Saborea los favoritos atemporales como el Espresso y el Cappuccino, pilares de la cultura cafetera mundial.",
  },
  {
    title: "Especialidades Dulces",
    href: "/category/especialidades-dulces",
    description:
      "Deléitate con bebidas como el Mocha o el Vietnamese Coffee, que combinan el placer del café con un toque dulce.",
  },
  {
    title: "Tradicionales Regionales",
    href: "/category/tradicionales-regionales",
    description:
      "Descubre las raíces del café con opciones como el Turkish Coffee o el Cafe au Lait, representando tradiciones de diversas culturas.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuList;
