import React from "react";
import { Container, Row } from "react-bootstrap";
import {
    CustomText,
    CustomButton
} from "components";

interface IProps {
};

export default function CartBuyWith({
}: IProps) {
    return (
        <Container>
            <Row style={{ paddingTop: 30 }}>
                <CustomText
                    title="THƯỜNG ĐƯỢC MUA CÙNG"
                    color="#1D252C"
                    fontWeight={700}
                    fontSize={26}
                />
            </Row>
        </Container>
    )
}
