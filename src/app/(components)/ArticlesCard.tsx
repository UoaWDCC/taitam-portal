import React from "react";
import { Poppins } from "next/font/google";
import "./ArticlesCard.css";
import { StaticImageData } from "next/image";

export interface CardProps {
  title: string;
  reference: string;
  par1: string;
  subtitle: string;
  par2: string;
  image: StaticImageData;
  par3: string;
}

const poppinsMedium = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });

const ArticlesCard = ({
  title,
  reference,
  par1,
  par2,
  image,
  par3,
}: CardProps) => {
  return {};
};
