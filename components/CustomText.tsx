
import styles from "./style.module.css";

interface IProps {
    title: string,
    width: number,
    height: number,
    fontSize?: number,
    fontWeight?: number | string,
    onClick: () => void,
}

export default function CustomText({
    title = "", onClick, width = 50, height = 100, fontSize = 14, fontWeight = 700
}: IProps) {
    return (
        <button
            style={{ width, height, fontSize, fontWeight }}
            onClick={onClick} className={styles.custom_button}>
            {title}
        </button>
    )
}