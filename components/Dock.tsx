import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandBehance,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandX,
  IconBrandYoutube,
  IconExchange,
  IconHome,
  IconNews,
  IconNewSection,
  IconBrandWhatsapp,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

export function Dock() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-[#FFF6E1]" />
      ),
      href: "https://www.linkedin.com/company/1pixel-designconf/",
    },





    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-[#FFF6E1]" />
      ),
      href: "https://www.instagram.com/1px.Descon/?hl=en",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-[#FFF6E1]" />
      ),
      href: "https://www.youtube.com/@1PixelDesignConference",
    },
    {
      title: "WhatsApp Community",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-[#FFF6E1]" />
      ),
      href: "https://chat.whatsapp.com/ISykFouJbWzLFfAnz5PHrv",
    },

  ];
  return (
    <div className="flex items-center justify-center w-full" data-cursor-color="#E08ABA" data-cursor-size="25px">
      <FloatingDock
        
        items={links}
      />
    </div>
  );
}
