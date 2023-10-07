import React from 'react';
import {
    CustomText
} from "components";
import styles from "./styles.module.css";
import {
    Container
} from "react-bootstrap";
import Image from "next/image";
import TitleContainer from './TitleContainer';
import Slider from "react-slick";
import { teacher_example } from '@/assets';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
};

interface IProps {

}

export default function ({

}: IProps) {

    const refSlick = React.useRef<any>(null);
    return (
        <Container>
            <div
                className={styles.container_buy_item}
                style={{ marginBottom: 100 }}
            >
                <TitleContainer
                    title="GIẢNG VIÊN TIÊU BIỂU"
                    viewAll={() => { }}
                    previous={() => refSlick.current?.slickPrev?.()}
                    next={() => refSlick.current?.slickNext?.()}
                    isViewAll={false}
                />

                <Slider
                    ref={refSlick}
                    {...settings}
                >
                    {
                        new Array(10).fill(null).map(() => (
                            <div className={styles.teacher_item} key={Math.random()}>
                                <Image
                                    src={teacher_example}
                                    width={132}
                                    height={132}
                                    alt='teacher'
                                    style={{ alignSelf: "center", margin: "auto" }}
                                />
                                <CustomText
                                    title='Emily Pham Nguyen'
                                    color='#2B5DF5'
                                    fontWeight={700}
                                    fontSize={16}
                                    style={{ marginTop: 16, textAlign: "center" }}
                                />
                                <CustomText
                                    title={`Lorem Ipsum is text of the printing and typesetting industry has been the industry's standard dummy text ever since the and typesetting has been`}
                                    color='#1D252C'
                                    fontWeight={400}
                                    fontSize={14}
                                    style={{ marginTop: 16, textAlign: "center" }}
                                />

                            </div>
                        ))
                    }
                </Slider>
            </div>
        </Container>
    )
};
