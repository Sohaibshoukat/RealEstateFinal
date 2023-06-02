import React from "react";
import partner from "../../data/partner";
import Link from "next/link";
import style from "./design.module.css";

const partener = () => {
  return (
    <div className={style.main}>
      <button className="btn btn-thm btn-big">Let's Talk</button>
      <div className={style.divs}>
        {partner.slice(0, 5).map((item) => (
          <div
            className={`col-sm-6 col-lg-4 col-xl-4 ${style.cards}`}
            key={item.id}
          >
            <Link href="/listing-grid-v4">
              <a
                className="properti_city style2 d-block"
                style={{
                  backgroundColor: `#8A8989`,
                  width: `22rem`,
                  height: `25rem`,
                }}
              >
                <div className="thumb"></div>
                <div className="details">
                  <h4>{item.name}</h4>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default partener;
