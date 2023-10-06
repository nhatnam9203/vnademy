import React from "react";
import styles from "./styles.module.css";
import { menus } from "./menu";
import {
    Container,
    Stack
} from "react-bootstrap";
import {
    CustomRow,
    CustomText,
    CustomIcon,
    CustomImage
} from "components";
import {
    ic_window,
    banner_example
} from "assets";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


export default function () {

    return (
        <>

            <div className={styles.container}>
                <Container>
                    <CustomRow isBetween>
                        <CustomIcon
                            title="DANH MỤC"
                            icon={ic_window}
                            alt="ic_window"
                            width={13}
                            height={13}
                            fontSize={14}
                            fontWeight={700}
                            titleColor="#2B5DF5"
                            style={{
                                border: "1px solid #2B5DF5",
                                borderRadius: 3,
                                padding: "5px 10px",
                            }}
                        />
                        {
                            menus.map(item =>
                                <CustomText
                                    title={item.title}
                                    key={item.key}
                                    fontWeight={600}
                                    fontSize={14}
                                    color="#1D252C"
                                    isHover
                                    style={{ cursor: "pointer" }}
                                />
                            )
                        }
                    </CustomRow>
                </Container>
            </div>
            <Slider {...settings}>
                <CustomImage
                    src={banner_example}
                    height={537}
                    width={"100%"}
                />
                <CustomImage
                    src={banner_example}
                    height={537}
                    width={"100%"}
                />
                <CustomImage
                    src={banner_example}
                    height={537}
                    width={"100%"}
                />
            </Slider>
        </>
    )
}
