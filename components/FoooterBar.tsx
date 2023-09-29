import React from "react";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import CustomImage from "./CustomImage";
import { Container, Row, Col } from "react-bootstrap";
import { logo_vnademy } from "assets";
import styles from './style.module.css';

export default function FoooterBar() {

    const register = () => {

    };

    return (
        <>
            <div className={styles.footerbar_wrap}>
                <CustomText
                    title="TRỞ THÀNH GIẢNG VIÊN TẠI VNADEMY NGAY HÔM NAY!"
                    color="white"
                    fontWeight={800}
                    fontSize={32}
                />
                <CustomButton
                    title="ĐĂNG KÝ NGAY"
                    onClick={register}
                    width={168}
                    height={46}
                    style={{ marginTop: 24 }}
                    isHover={false}
                />
            </div>

            <div className={styles.footerbar_bottom}>
                <Container>
                    <Row>
                        <Col style={{ paddingTop: 50 }}>
                            <CustomImage
                                src={logo_vnademy}
                                width={154}
                                height={48}
                                alt="logo_vnademy"
                                style={{ objectFit: "cover" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
