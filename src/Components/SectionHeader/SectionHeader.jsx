import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeader({
  titleHeader,
  subTitleHeader,
  desTitle,
  mobTitle,
  id,
}) {
  return (
    <div className="container flex items-end justify-between">
      <div>
        <h3 className="section-title">{titleHeader}</h3>
        <span className="section-usb-title">{subTitleHeader}</span>
      </div>
      <div >
        <Link className="section-link" to="#">
          <span className="hidden md:inline-block">{desTitle}</span>
          <span className="inline-block md:hidden">{mobTitle}</span>
          <svg className="w-5 h-5">
            <use href={id}></use>
          </svg>
        </Link>
      </div>
    </div>
  );
}
