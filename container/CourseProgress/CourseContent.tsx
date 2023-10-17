import React from 'react';
import styles from "./styles.module.css";
import {
    CustomText,
    CustomRow,
    CustomImage,
    CustomButton
} from "components";
import {
    ic_play,
    ic_minus,
    ic_plus_black
} from "assets";
import Image from 'next/image';
import { Stack } from 'react-bootstrap';
import SlideToggle from "react-slide-toggle";

export default function () {
    return (
        <div
            className={styles.what_you_learn}
            style={{ marginTop: 16 }}
        >
            <CustomText
                title='Nội dung khóa học'
                color='#1D252C'
                fontSize={20}
                fontWeight={700}
            />
            <div style={{ marginTop: 20 }}>
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
            </div>
        </div>
    );
};

const CourseItem = () => {

    const [isCollapsed, setCollapsed] = React.useState<boolean>(false);

    const toggleExpand = () => {
        setCollapsed(!isCollapsed);
    }

    return (
        <SlideToggle
            render={({
                toggle,
                setCollapsibleElement
            }: any) => (
                <div className="my-collapsible">
                    <div onClick={() => {
                        toggle();
                        toggleExpand();
                    }} className="my-collapsible__toggle"
                    >
                        <CustomRow
                            style={{
                                background: "#F6FAFF",
                                border: "1px solid #C5CBD5",
                                cursor: "pointer",
                            }}>
                            <div className={styles.icon_plus}>
                                {
                                    !isCollapsed ?
                                        <Image
                                            src={ic_minus}
                                            width={16}
                                            height={2}
                                            alt='ic_'
                                        /> : <Image
                                            src={ic_plus_black}
                                            width={16}
                                            height={16}
                                            alt='ic_'
                                        />
                                }
                            </div>
                            <CustomText
                                title='Phần 1: Giới thiệu tổng quan và các thiết lập ban đầu'
                                fontWeight={700}
                                fontSize={14}
                                color='#1D252C'
                                style={{ marginLeft: 16, userSelect: "none" }}
                            />
                        </CustomRow>
                    </div>
                    <div className="my-collapsible__content" ref={setCollapsibleElement}>
                        <div className="my-collapsible__content-inner">
                            {
                                new Array(4).fill(null).map(it => (

                                    <CustomRow
                                        key={Math.random()}
                                        style={{
                                            justifyContent: "space-between",
                                            marginTop: 16
                                        }} isBetween
                                    >
                                        <CustomRow>
                                            <div style={{ borderRight: "none" }} className={styles.icon_plus}>
                                                <Image
                                                    src={ic_play}
                                                    width={18}
                                                    height={18}
                                                    alt='ic_play'
                                                />
                                            </div>
                                            <CustomText
                                                title='Bài 1: Giới thiệu và các thiết lập cơ bản'
                                                color='#1D252C'
                                                fontWeight={600}
                                                fontSize={14}
                                                style={{ marginLeft: 16 }}
                                            />
                                        </CustomRow>

                                        <CustomRow style={{ justifyContent: "flex-end" }}>
                                            <div>

                                            </div>

                                            <CustomButton
                                                title='Học thử'
                                                onClick={() => { }}
                                                height={30}
                                                width={80}
                                                fontWeight={600}
                                                style={{
                                                    background: "transparent",
                                                    color: "#2B5DF5",
                                                    border: "1px solid #2B5DF5",
                                                    fontSize: 14
                                                }}
                                            />
                                            <CustomText
                                                title='08:05'
                                                color='#55555A'
                                                fontWeight={600}
                                                fontSize={14}
                                                style={{ width: 120, textAlign: "right" }}
                                            />
                                        </CustomRow>
                                    </CustomRow>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        />
    );
};
