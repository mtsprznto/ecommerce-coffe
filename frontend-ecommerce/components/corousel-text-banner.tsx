"use client";

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envio en 24/48 h",
    description:
      "Como cliente VIP, tus envíos se entregan en 24/48 horas. Obtén más información.",
    link: "#",
  },
  {
    id: 2,
    title: "Garantía de Satisfacción",
    description:
      "Si no estás completamente satisfecho, te devolvemos tu dinero sin preguntas.",
    link: "#",
  },
  {
    id: 3,
    title: "Promociones Exclusivas",
    description:
      "Descubre nuestras ofertas exclusivas para clientes recurrentes. ¡Aprovecha ahora!",
    link: "#",
  },
  {
    id: 4,
    title: "Calidad Garantizada",
    description:
      "Todos nuestros productos pasan controles rigurosos para garantizar la mejor calidad.",
    link: "#",
  },
  {
    id: 5,
    title: "Atención al Cliente 24/7",
    description:
      "Estamos disponibles todo el día para ayudarte con cualquier consulta o problema.",
    link: "#",
  },
];

export const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent ">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="text-sx sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
