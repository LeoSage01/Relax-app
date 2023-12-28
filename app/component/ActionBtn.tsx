import { IconType } from "react-icons";

interface ActionBtnProps {
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

import React from "react";

const ActionBtn: React.FC<ActionBtnProps> = ({
  icon:Icon,
  onClick,
  disabled,
}) => {
  return <button onClick={onClick} disabled={disabled} className={`
    flex 
    items-center
    justify-center
    rounded
    cursor-pointer
    w-[40px]
    h-[30px]
    text-slate-800
    border
    border-slate-800
    ${disabled && "opacity-50 cursor-not-allowed"}
  `}>
    <Icon size={18} />
  </button>;
};

export default ActionBtn;
