import React from 'react';
import styles from "./styles.module.css";
import {
    CustomText,
    CustomRow,
    CustomImage
} from "components";
import {
    ic_ticked
} from "assets";
import Image from 'next/image';
import { Stack } from 'react-bootstrap';

const contents = [
    "Làm chủ phần mềm Word 2016 nhanh chóng và chi tiết nhất.",
    "Nắm được các bước xây dựng, soạn thảo văn bản và chỉnh sửa hợp lý và nhanh chóng, đúng quy trình.",
    "Được trau dồi kiến thức nâng cao ứng dụng vào công việc thêm tối ưu và hiệu quả.",
    "Có thể áp dụng ngay vào công việc và học tập thi cử.",
    "Biết cách thiết kế, thiết lập văn bản, chỉnh sửa, bảo mật văn bản word dể ứng dụng vào hợp đồng, báo cáo, các tài liệu văn phòng, chứng từ cụ thể,...",
    "Tự tin nâng cao trình độ để thi chứng chỉ tin học văn phòng."
]

export default function () {
    return (
        <div className={styles.what_you_learn}>
            <CustomText
                title='Bạn sẽ học được gì?'
                color='#1D252C'
                fontSize={20}
                fontWeight={700}
            />

            <Stack style={{ marginTop: 6 }} gap={1}>
                {
                    contents.map(it => (
                        <CustomRow key={it} style={{ marginTop: 12 }}>
                            <Image
                                src={ic_ticked}
                                width={14}
                                height={14}
                                alt='ic_ticked'
                            />
                            <CustomText
                                title={it}
                                color='#1D252C'
                                fontWeight={500}
                                fontSize={14}
                                style={{ marginLeft: 8 }}
                            />
                        </CustomRow>
                    ))
                }
            </Stack>
        </div>
    );
}
