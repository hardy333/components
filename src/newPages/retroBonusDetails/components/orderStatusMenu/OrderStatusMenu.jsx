import React from "react";
import { btn, menuUl, btnOpen } from "./orderStatusMenu.module.css";
import OrderStatusMenuArrow from "./OrderStatusMenuArrow";
import { Menu, MenuItem } from "@szhsin/react-menu";
// import '@szhsin/react-menu/dist/index.css';
import LoadingSpinner from "../../../../components/loadingSpinner/LoadingSpinner";
import useOrderStatuses from "../../../../hooks/api/useOrderStatuses";

import { AnimatePresence, motion } from "framer-motion";

const WAITING = "waiting";
const SUCCESS = "success";
const ERROR = "error";

const OrderStatusMenu = ({ statusColor, orderID }) => {
  const { refetch, data, isLoading, isFetching, isError, error } =
    useOrderStatuses(orderID);

  console.log({ data, isLoading, isFetching, isError, error });

  let menuStateName = "";

  if ((isLoading || !data) && !isError) {
    menuStateName = WAITING;
  } else if (isError) {
    menuStateName = ERROR;
  } else if (data) {
    menuStateName = SUCCESS;
  }

  return (
    <Menu
      menuClassName={menuUl}
      align="center"
      gap={0}
      menuButton={({ open }) => {
        return (
          <button
            className={`${btn}  ${open ? btnOpen : ""}`}
            style={{
              color: statusColor,
              backgroundColor: statusColor + "25",
              "--status-color": statusColor,
              marginInline: "auto"
            }}
            onClick={() => refetch()}
          >
            <span style={{ color: statusColor, marginLeft: 5 }}>
              გაგზავნილია
            </span>
            <OrderStatusMenuArrow fill={statusColor} />
          </button>
        );
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={menuStateName}
        >
          {renderMenuContent(menuStateName, statusColor)}
        </motion.div>
      </AnimatePresence>
    </Menu>
  );
};

const renderMenuContent = (menuStateName, statusColor) => {
  if (menuStateName === WAITING) {
    return <LoadingSpinner color={statusColor} />;
  }

  if (menuStateName === SUCCESS) {
    return <p>HEllo HEllo HELLO</p>;
  }

  if (menuStateName === ERROR) {
    return <p>Oh nooooooo !!!!!!</p>;
  }
};

export default OrderStatusMenu;
