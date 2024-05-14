// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Pulse1X10S200Px200PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Pulse1X10S200Px200PxsvgIcon(
  props: Pulse1X10S200Px200PxsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      style={{
        background: '#fff"',

        ...(style || {}),
      }}
      shapeRendering={"auto"}
      display={"block"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#e15b64"} d={"M17.5 30h15v40h-15z"}>
        <animate
          begin={"-0.2s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"18;30;30"}
          keyTimes={"0;0.5;1"}
          calcMode={"spline"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"y"}
        ></animate>

        <animate
          begin={"-0.2s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"64;40;40"}
          keyTimes={"0;0.5;1"}
          calcMode={"spline"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"height"}
        ></animate>
      </path>

      <path fill={"#f8b26a"} d={"M42.5 30h15v40h-15z"}>
        <animate
          begin={"-0.1s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"20.999999999999996;30;30"}
          keyTimes={"0;0.5;1"}
          calcMode={"spline"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"y"}
        ></animate>

        <animate
          begin={"-0.1s"}
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"58.00000000000001;40;40"}
          keyTimes={"0;0.5;1"}
          calcMode={"spline"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"height"}
        ></animate>
      </path>

      <path fill={"#abbd81"} d={"M67.5 30h15v40h-15z"}>
        <animate
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"20.999999999999996;30;30"}
          keyTimes={"0;0.5;1"}
          calcMode={"spline"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"y"}
        ></animate>

        <animate
          keySplines={"0 0.5 0.5 1;0 0.5 0.5 1"}
          values={"58.00000000000001;40;40"}
          keyTimes={"0;0.5;1"}
          calcMode={"spline"}
          dur={"1s"}
          repeatCount={"indefinite"}
          attributeName={"height"}
        ></animate>
      </path>
    </svg>
  );
}

export default Pulse1X10S200Px200PxsvgIcon;
/* prettier-ignore-end */
