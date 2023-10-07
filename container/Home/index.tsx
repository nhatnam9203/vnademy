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
    CustomImage,
    CourseItem
} from "components";
import {
    ic_window,
    banner_example
} from "assets";
import Slider from "react-slick";
import TitleContainer from "./TitleContainer";
import CourseDecovery from "./CourseDecovery";
import CourseIntroduce from "./CourseIntroduce";
import Teachers from "./Teachers";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const settings_container_buy_item = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
};


export default function () {

    const refSlick1 = React.useRef<any>(null);
    const refSlick2 = React.useRef<any>(null);
    const refSlick3 = React.useRef<any>(null);
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

            <Container>
                <div className={styles.container_buy_item}>
                    <TitleContainer
                        title="TOP BÁN CHẠY"
                        viewAll={() => { }}
                        previous={() => refSlick1.current?.slickPrev?.()}
                        next={() => refSlick1.current?.slickNext?.()}

                    />

                    <Slider
                        ref={refSlick1}
                        {...settings_container_buy_item}
                    >
                        {new Array(8).fill(null).map((it, key) => (
                            <CourseItem key={Math.random()} />
                        ))}
                    </Slider>
                </div>

                <div className={styles.container_buy_item}>
                    <TitleContainer
                        title="SIÊU ƯU ĐÃI HÔM NAY"
                        viewAll={() => { }}
                        previous={() => refSlick2.current?.slickPrev?.()}
                        next={() => refSlick2.current?.slickNext?.()}
                    />

                    <Slider
                        ref={refSlick2}
                        {...settings_container_buy_item}
                    >
                        {new Array(8).fill(null).map((it, key) => (
                            <CourseItem key={Math.random()} />
                        ))}
                    </Slider>
                </div>

                <div
                    className={styles.container_buy_item}
                    style={{ marginBottom: 100 }}
                >
                    <TitleContainer
                        title="KHÓA HỌC MỚI RA MẮT"
                        viewAll={() => { }}
                        previous={() => refSlick3.current?.slickPrev?.()}
                        next={() => refSlick3.current?.slickNext?.()}
                    />

                    <Slider
                        ref={refSlick3}
                        {...settings_container_buy_item}
                    >
                        {new Array(8).fill(null).map((it, key) => (
                            <CourseItem key={Math.random()} />
                        ))}
                    </Slider>
                </div>
            </Container>

            <CourseDecovery />
            <CourseIntroduce />
            <Teachers />
        </>
    )
}
