import React from "react"
import styles from './KawaiiButton.module.css';
import clsx from "clsx";

type Props = React.ComponentProps<"button"> & {
    border?: boolean,
    shadow?: boolean
};
export const KawaiiButton = (props: Props) => {
    const classes = clsx(`${props.border ? "border-[3px]" : ""} border-[#f5f5f5] bg-[#FFB9C1] rounded-[40px] flex justify-center items-center gap-[10px] w-full h-[51px] px-[27px] py-[10px] text-2xl font-normal ${props.shadow && styles.shadow}`, props.className);
    return (
        <button {...props} className={classes} />
    )
}