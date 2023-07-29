import styles from './KawaiiTitle.module.css';
import clsx from 'clsx';

type Props = React.ComponentProps<"h2"> & {
    children: React.ReactNode,
    size: "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
};
export const KawaiiTitle = (props: Props) => {
    const classes = clsx(props.className, `text-center text-stone-900 text-${props.size} font-black tracking-tight`, styles.title);

    return (
        <h2 className={classes}>{props.children}</h2>
    )
}