import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function BreakingNews() {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true}>
        <Link to='/'>
          “Artificially creating technological barriers and cutting off
          industrial and supply chains will only lead to division and
          confrontation,” Xi told Rutte during a meeting in Beijing on
          Wednesday, according to a readout published by China’s foreign
          ministry.
        </Link>
      </Marquee>
    </div>
  );
}
