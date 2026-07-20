import { Target, Magnet, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Target,
    title: "Reklama na Facebooku a Instagramu",
    description:
      "Vymyslím, spustím a denně hlídám Vaše reklamy. Od prvního vizuálu až po vyhodnocení, co skutečně vydělalo.",
  },
  {
    icon: Magnet,
    title: "Přísun poptávek",
    description:
      "Postavím systém, který Vám každý týden nosí nové poptávky. U každé víte, kolik stála. Vy jen zvedáte telefon.",
  },
  {
    icon: Users,
    title: "Nábor zaměstnanců",
    description:
      "Kandidáti na řemeslné a výrobní pozice přes reklamu na Facebooku. Bez pracovních portálů a za zlomek jejich ceny.",
  },
];
