import React from 'react';
import {
    CustomText
} from "components";
import styles from "./styles.module.css";
import {
    Container
} from "react-bootstrap";
import {
    list_coure_type
} from "./menu";
import Image from "next/image";

interface IProps {

}

export default function ({

}: IProps) {
    return (
        <div className={styles.course_decovery}>
            <CustomText
                title='+2.000 KHÓA HỌC ĐANG CHỜ BẠN KHÁM PHÁ'
                color='#1D252C'
                fontWeight={700}
                fontSize={26}
                style={{ textAlign: "center" }}
            />
            <Container>
                <div className={styles.course_gird}>
                    {
                        list_coure_type.map(item => (
                            <div className={styles.course_gird_item}>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={46}
                                    height={46}
                                    key={item.title}
                                />

                                <CustomText
                                    title={item.title}
                                    fontWeight={700}
                                    fontSize={16}
                                    color='#1D252C'
                                    style={{ marginTop: 20 }}
                                />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
};
