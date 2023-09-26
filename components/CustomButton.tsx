
import styles from "./style.module.css";

interface IProps {
    title: string,
    width: number | string,
    height: number | string,
    fontSize?: number,
    fontWeight?: number | string,
    onClick: () => void,
}

export default function CustomButton({
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