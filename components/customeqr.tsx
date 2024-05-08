import React from "react";
import QRCode from "qrcode.react";

interface CustomQRCodeProps {
  value: string;
  fgColor?: string;
  body?: string;
  eye?: string;
}

const CustomQRCode: React.FC<CustomQRCodeProps> = ({
  value,
  fgColor = "#000000",
  body = "square-dot",
  eye = "dot",
}) => {
  return (
    <QRCode
      value={value}
      fgColor={fgColor}
      className="h-40 w-40"
      renderAs="svg"
    />
  );
};

export default CustomQRCode;
