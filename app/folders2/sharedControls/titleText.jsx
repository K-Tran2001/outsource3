import * as React from "react";

export default function TitleText({ title, padding, bg, color }) {
  return (
    <div
      className={`text-large font-bold ${padding != null && padding} ${
        bg != null && bg
      } ${color != null ? color : "text-gray_800"} `}
    >
      {title}
    </div>
  );
}
