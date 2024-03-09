import * as React from "react";
import * as Pi from "react-icons/pi";
import * as Bs from "react-icons/bs";
import * as Go from "react-icons/go";
import * as Cg from "react-icons/cg";
import * as Rx from "react-icons/rx";
import * as Ri from "react-icons/ri";
import * as Im from "react-icons/im";
import * as Io5 from "react-icons/io5";
import * as Md from "react-icons/md";

export default function TitleText({ title, padding, bg }) {
  return (
    <div
      className={`text-lg font-bold ${padding != null && padding} ${
        bg != null && bg
      }`}
    >
      {title}
    </div>
  );
}
