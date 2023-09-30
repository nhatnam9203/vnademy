import React from "react";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import CustomImage from "./CustomImage";
import CustomIcon from "./CustomIcon";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { logo_vnademy, ic_location, ic_facebook, ic_linkedin, ic_youtube, ic_twitter } from "assets";
import styles from './style.module.css';

export default function FoooterBar() {

    const register = () => {

    };

    return (
        <div style={{ paddingBottom: 30 }}>
            <div className={styles.footerbar_wrap}>
                <CustomText
                    title="TRỞ THÀNH GIẢNG VIÊN TẠI VNADEMY NGAY HÔM NAY!"
                    color="white"
                    fontWeight={800}
                    fontSize={32}
                    style={{ marginLeft: 20, marginRight: 20 }}
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
                        <Col md={{ span: 6 }} style={{ paddingTop: 50 }}>
                            <CustomImage
                                src={logo_vnademy}
                                width={154}
                                height={48}
                                alt="logo_vnademy"
                                style={{ objectFit: "cover" }}
                            />
                            <Stack style={{ marginTop: 20 }} gap={3}>
                                <CustomIcon
                                    icon={ic_location}
                                    width={22}
                                    height={22}
                                    alt="ic_location"
                                    title="130 Cộng Hòa, Phường.15, Q. Tân Bình, Tp Hồ Chí Minh"
                                />
                                <CustomIcon
                                    icon={ic_location}
                                    width={22}
                                    height={22}
                                    alt="ic_location"
                                    title="0987 654 321"
                                    isHover
                                />
                                <CustomIcon
                                    icon={ic_location}
                                    width={22}
                                    height={22}
                                    alt="ic_location"
                                    title="support@vnademy.com"
                                    isHover
                                />
                            </Stack>

                            <Stack style={{ marginTop: 32 }}>
                                <CustomText
                                    title="Kết nối với chúng tôi"
                                    color="#1D252C"
                                    fontWeight={700}
                                    fontSize={15}
                                />

                                <Stack style={{ marginTop: 10 }} direction="horizontal">
                                    <CustomIcon
                                        icon={ic_facebook}
                                        width={30}
                                        height={30}
                                        alt="ic_facebook"
                                        style={{ cursor: "pointer" }}
                                    />
                                    <CustomIcon
                                        icon={ic_twitter}
                                        width={30}
                                        height={30}
                                        alt="ic_facebook"
                                        style={{ cursor: "pointer" }}
                                    />
                                    <CustomIcon
                                        icon={ic_youtube}
                                        width={30}
                                        height={30}
                                        alt="ic_facebook"
                                        style={{ cursor: "pointer" }}
                                    />
                                    <CustomIcon
                                        icon={ic_linkedin}
                                        width={30}
                                        height={30}
                                        alt="ic_facebook"
                                        style={{ cursor: "pointer" }}
                                    />
                                </Stack>
                            </Stack>
                        </Col>

                        <Col md={{ span: 3 }} style={{ paddingTop: 50, borderLeft: "1px solid #E0E6EF", paddingLeft: 40 }}>
                            <CustomText
                                title="Về vnademy"
                                color="#1D252C"
                                fontSize={20}
                                fontWeight={700}
                                style={{ marginTop: 10 }}
                            />

                            <Stack style={{ marginTop: 25 }} gap={3}>
                                <CustomText
                                    title="Giới thiệu về vnademy"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Câu hỏi thường gặp"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Điều khoản dịch vụ"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Hướng dẫn thanh toán"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Kích hoạt khóa học"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Góc chia sẻ"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Chính sách bảo mật"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                            </Stack>
                        </Col>

                        <Col md={{ span: 3 }} style={{ paddingTop: 50, borderLeft: "1px solid #E0E6EF", paddingLeft: 40 }}>
                            <CustomText
                                title="Hợp tác liên kết"
                                color="#1D252C"
                                fontSize={20}
                                fontWeight={700}
                                style={{ marginTop: 10 }}
                            />

                            <Stack style={{ marginTop: 25 }} gap={3}>
                                <CustomText
                                    title="Đăng ký giảng viên"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Đào tạo doanh nghiệp"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Affiliate"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Agency"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Quay dựng video"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <CustomText
                                    title="Đào tạo Inhouse"
                                    color="#2B5DF5"
                                    fontSize={15}
                                    fontWeight={500}
                                    isHover
                                />
                                <div style={{ height: 100 }} />
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
            <CustomText
                title="© 2023 vnademy.com. All rights reserved."
                style={{ textAlign: "center", marginTop: 30 }}
                color="#1D252C"
                fontWeight={500}
                fontSize={15}
            />
        </div>
    );
}
