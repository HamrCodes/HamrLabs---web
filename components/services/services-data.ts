import { Target, Magnet, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Target,
    title: "Meta Ads",
    description:
      "Kampaně na Facebooku a Instagramu od struktury přes kreativy až po škálování.",
  },
  {
    icon: Magnet,
    title: "Lead Generation",
    description:
      "Systémy na získávání kvalifikovaných leadů. Data místo dojmů.",
  },
  {
    icon: GraduationCap,
    title: "Školení",
    description:
      "Workshopy o AI marketingu, Meta Ads a tvorbě obsahu na sociální sítě.",
  },
];
