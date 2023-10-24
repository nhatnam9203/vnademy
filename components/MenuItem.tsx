import { CustomRow, CustomText } from "@/components";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface IMenuItem {
    icon?: StaticImageData | null,
    title: string,
    onClick: () => void,
    textColor?: string
}

const MenuItem = ({
    icon = null,
    title,
    onClick,
    textColor
}: IMenuItem) => {
    return (
        <CustomRow onClick={onClick} width={150} style={{ cursor: "pointer" }}>
            {icon && <Image
                src={icon}
                width={20}
                height={20}
                alt="icon_menu"
            />}
            <CustomText
                title={title}
                fontWeight={600}
                fontSize={14}
                color={textColor ?? "#2B5DF5"}
                style={{ marginLeft: 10 }}
            />
        </CustomRow>
    );
};

export default MenuItem;
