import React from 'react';
import {
    CustomRow,
    CustomText
} from "components";
import Image from "next/image";
import styles from "./styles.module.css";
import {
    ic_arrow_right
} from "assets";
import {
    Stack
} from "react-bootstrap";

interface IProps {
    previous: () => void,
    next: () => void,
    viewAll: () => void,
    title: string,
    isViewAll?: boolean
}

export default function ({
    previous,
    next,
    viewAll,
    title = "",
    isViewAll = true
}: IProps) {
    return (
        <div>
            <CustomRow isBetween style={{ marginBottom: 16 }}>

                <Stack direction='horizontal' gap={3}>
                    <CustomText
                        title={title}
                        color="#1D252C"
                        fontWeight={700}
                        fontSize={26}
                    />
                    {
                        isViewAll &&
                        <>
                            <div style={{ width: 1, backgroundColor: "#eeeeee", height: 35 }} />

                            <CustomText
                                title='XEM TẤT CẢ'
                                color='#2B5DF5'
                                fontSize={14}
                                style={{ textDecoration: "underline", cursor: "pointer" }}
                                fontWeight={700}
                                onClick={viewAll}
                            />
                        </>
                    }
                </Stack>

                <div style={{ marginRight: 5 }}>
                    <CustomRow>
                        <div className={styles.cart_buy_with_arrow}
                            style={{ marginRight: 5 }}
                            onClick={previous}
                        >
                            <Image
                                width={9}
                                height={15}
                                src={ic_arrow_right}
                                alt="ic_arrow_right"
                                style={{ transform: "rotate(180deg)" }}
                            />
                        </div>

                        <div onClick={next} className={styles.cart_buy_with_arrow}>
                            <Image
                                width={9}
                                height={15}
                                src={ic_arrow_right}
                                alt="ic_arrow_right"
                            />
                        </div>
                    </CustomRow>
                </div>
            </CustomRow>
        </div>
    )
}
