import Tippy from "@tippyjs/react";
import React from "react";
import CarDisabled from "../svgs/CarDisabled";
import CarActive from "../svgs/CarActive";
import VendorsCatalogueSvg from "../svgs/VendorsCatalogueSvg";
import VendorsShopSvg from "../svgs/VendorsShopSvg";
import classNames from "classnames";
import VendorsCalendarSvg from "../svgs/VendorsCalendarSvg";

const CustomerCard = ({variant = "active", productsCount, customerName }) => {
  return (
    <article
      className={classNames({
        "vendor-card": true,
        active: variant === "active",
        disabled: variant === "disabled",
      })}
    >

      <div className="vendor-card-top">
        {/* {variant === "disabled" ? <CarDisabled /> : <CarActive />} */}
        {variant === "disabled" ? <RetailersSvg /> : <RetailersSvg />}
        <div className="vendor-card-name">
          <h3>{customerName}</h3>
        </div>
      </div>

      <p className="vendor-card-products">{productsCount} პროდუქტი</p>

      <div className="vendor-card-bottom">
        {variant === "disabled" ? <FooterInactive /> : <FooterActive/>}
      </div>

    </article>
  );
};

const RetailersSvg = () => {
    return (
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 49.32">
  <g opacity=".8">
    <path d="m46.18,23.95v13.84c0,5.4-4.37,9.77-9.78,9.77h-5.8v-11.86c0-1.18-.75-2.19-1.81-2.56-.06-.03-.12-.05-.17-.07-.24-.07-.48-.11-.74-.11h-6.72c-1.5,0-2.73,1.22-2.73,2.73v11.86h-5.81c-5.39,0-9.76-4.37-9.76-9.77v-13.84c1.62,1.13,3.58,1.76,5.6,1.76,3.17,0,6.01-1.51,7.78-3.87,1.76,2.35,4.58,3.87,7.75,3.87h1.03c1.05,0,2.06-.16,3.01-.46t.02,0c1.9-.63,3.56-1.81,4.74-3.38,0,0,.02.02.02.03,1.11,1.45,2.6,2.56,4.33,3.21.74.28,1.52.46,2.33.56.36.04.72.06,1.1.06,2.01,0,3.97-.64,5.6-1.76Z" fill="#6e0ff5" stroke-width="0"/>

    <path d="m24,22.39h1.03c1.39,0,2.68-.44,3.73-1.2,1.05-.75,1.86-1.8,2.3-3.03-.17-.71-.26-1.44-.26-2.2V0h-12.59v15.96c0,.75-.09,1.49-.26,2.19.9,2.47,3.26,4.24,6.03,4.24Z" fill="#6e0ff5" stroke-width="0"/>
    
    <path d="m3.65,20.22c1.22,1.38,2.97,2.16,4.81,2.16,2.77,0,5.14-1.76,6.03-4.24.26-.68.39-1.42.39-2.19V0h-6.35c-1.97,0-3.68,1.4-4.07,3.33l-2.4,11.93c-.14,1.34.13,2.67.78,3.83.22.41.49.79.8,1.14Z" fill="#6e0ff5" stroke-width="0"/>
    <path d="m46.18,19.08c-.22.41-.49.79-.81,1.15-1.22,1.38-2.97,2.16-4.8,2.16-.36,0-.71-.03-1.07-.09-.85-.14-1.65-.47-2.35-.92-1.19-.76-2.12-1.88-2.6-3.22-.27-.68-.41-1.42-.41-2.2V0h6.35c1.97,0,3.68,1.4,4.06,3.33l1.85,9.14.28,1.39.28,1.4c.14,1.34-.14,2.67-.78,3.82Z" fill="#6e0ff5" stroke-width="0"/>
  </g>

  {/*  */}
  {/* <path d="m57.96,40.85v2.21c0,3.46-2.81,6.26-6.26,6.26h-19.32c-3.46,0-6.26-2.81-6.26-6.26v-2.21c0-2.91.99-5.59,2.67-7.71,1.06.37,1.81,1.38,1.81,2.56v11.86h5.8c5.41,0,9.78-4.37,9.78-9.77v-4.66c1.09-.42,2.1-1.01,2.99-1.74,1.3-1.05,3.16-1.11,4.44-.02,2.66,2.3,4.36,5.69,4.36,9.48Z" fill="rgb(160, 100, 255)" opacity="1" stroke-width="0"/>
  <path d="m46.18,33.13v4.66c0,5.4-4.37,9.77-9.78,9.77h-5.8v-11.86c0-1.18-.75-2.19-1.81-2.56.5-.64,1.07-1.23,1.69-1.76,1.27-1.09,3.12-1.04,4.44.02,1.94,1.58,4.43,2.52,7.13,2.52,1.46,0,2.85-.28,4.14-.78Z" fill="rgb(160, 100, 255)" opacity="1" stroke-width="0"/>
  <path d="m51.34,20.69c0,2.62-1.09,5-2.84,6.68-.68.66-1.46,1.22-2.31,1.64v-5.06c-1.63,1.13-3.6,1.76-5.6,1.76-.38,0-.74-.02-1.1-.06-.81-.1-1.59-.28-2.33-.56-1.73-.66-3.22-1.76-4.33-3.21-.05-.4-.08-.79-.08-1.2,0-1.79.51-3.47,1.4-4.9v.17c0,.78.14,1.52.41,2.2.48,1.34,1.42,2.46,2.6,3.22.7.44,1.5.77,2.35.92.36.06.71.09,1.07.09,1.83,0,3.59-.78,4.8-2.16.32-.36.59-.73.81-1.15.65-1.15.93-2.48.78-3.82l-.28-1.4-.28-1.39c2.94,1.56,4.94,4.66,4.94,8.22Z" fill="rgb(160, 100, 255)" opacity="1" stroke-width="0"/>
  <path d="m40.58,25.71c2.01,0,3.97-.64,5.6-1.76v5.06c-1.25.63-2.65.97-4.14.97-2.51,0-4.78-.99-6.45-2.61-1.49-1.43-2.5-3.35-2.78-5.49,1.11,1.45,2.6,2.56,4.33,3.21.74.28,1.52.46,2.33.56.36.04.72.06,1.1.06Z" fill="rgb(160, 100, 255)" opacity="1" stroke-width="0"/>
  <path d="m46.18,19.08c-.22.41-.49.79-.81,1.15-1.22,1.38-2.97,2.16-4.8,2.16-.36,0-.71-.03-1.07-.09-.85-.14-1.65-.47-2.35-.92-1.19-.76-2.12-1.88-2.6-3.22-.27-.68-.41-1.42-.41-2.2v-.17c1.64-2.64,4.57-4.41,7.91-4.41,1.57,0,3.06.4,4.36,1.09l.28,1.39.28,1.4c.14,1.34-.14,2.67-.78,3.82Z" fill="rgb(160, 100, 255)" opacity="1`" stroke-width="0"/> */}
</svg>
    )
}


const FooterActive = () => {
  return (
    <div className="vendor-card-footer">
      <Tippy
        className="tooltip-1"
        arrow={false}
        placement="bottom"
        content="შეკვეთები"
      >
        <button className="vendor-card__btn">
          <VendorsShopSvg />
        </button>
      </Tippy>
      <Tippy
        className="tooltip-1"
        arrow={false}
        placement="bottom"
        content="კატალოგი"
      >
        <button className="vendor-card__btn">
          <VendorsCatalogueSvg />
        </button>
      </Tippy>

      <Tippy
        className="tooltip-1"
        arrow={false}
        placement="bottom"
        content="კალენდარი"
      >
        <button className="vendor-card__btn">
          <VendorsCalendarSvg />
        </button>
      </Tippy>
    </div>
  );
};



const FooterInactive = () => {
    return (
      <div className="vendor-card-footer vendor-card-footer--disabled">
        <button  className="btn btn-purple ">
          მოითხოვე ინტეგრაცია
        </button>
        <Tippy
          className="tooltip-1"
          arrow={false}
          placement="bottom"
          content="კატალოგი"
        >
          <button>
            <VendorsCatalogueSvg />
          </button>
        </Tippy>
      </div>
    );
  };

export default CustomerCard;
