"use client";

import { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link'

import {homepageCard} from "@/constants";
import  CustomButton  from "./CustomButton";

const Card = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className="relative flex w-full mt-2">
      <div className="card__links">
      {
        homepageCard.map(( card,index ) => (
          <div className="home-card group">
            <div className="flex flex-col gap-4">
            <div className="flex justify-centeritems-center gap-20">
              <Image src={card.image} alt={card.title} width={50} height={18} className='object-contain' />
              <h2 className="text-lg font-bold">{card.title}</h2>
            </div>
              <div>
                <p className="font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
      <div/>
</div>
  );
};

export default Card;