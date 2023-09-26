import React from "react";
import { logo_vnademy } from "assets";
import { Container, Row } from "react-bootstrap";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";
import styles from './style.module.css';

export default function TopBar() {

    const register = () => {

    };

    return (
        <div className={styles.topbar_container}>
            <Container>
                <Row>
                    <CustomImage
                        src={logo_vnademy}
                        width={147}
                        height={37}
                        alt="logo_vnademy"
                        style={{ objectFit: "cover" }}
                    />
                    <CustomButton
                        title="ĐĂNG KÝ"
                        onClick={register}
                        width={105}
                        height={42}
                    />
                </Row>
            </Container>
        </div>
    );
}
