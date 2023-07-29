'use client';

import clsx from "clsx";
import React, { useState } from "react";
import { KawaiiButton } from "./KawaiiButton";
import styles from './KawaiiButton.module.css';

type Props = {
    buttonBaseProps: React.ComponentProps<"button">,
    className?: string,
    buttons: Array<React.ComponentProps<"button">>,
    activeButtonIndex: number,
    onChangeActive: (newActive: number) => void;
};
export const KawaiiSwitchButton = (props: Props) => {
    const classes = clsx(`w-full inline-flex rounded-[40px] bg-[#f5f5f5] p-1`, styles.shadow, props.className);
    const handleClick = (index: number) => {
        props.onChangeActive(index);
    }
    return (
        <div className={classes}>
            {
                props.buttons.map((button, index) =>
                    <KawaiiButton className={`${props.activeButtonIndex === index ? "bg-[#FFB9C1]" : "bg-[transparent]"}`} border={false} shadow={false} onClick={() => handleClick(index)} {...props.buttonBaseProps} {...button} key={index} />
                )
            }
        </div>
    )
};