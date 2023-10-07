

import {
    ic_language,
    ic_marketing,
    ic_computer,
    ic_business,
    ic_accountant,
    ic_sales,
    ic_building,
    ic_skill,
    ic_technology,
    ic_heal
} from "assets";
import Image from "next/image";

export interface Imenu{
    title: string,
    key: string | number
}

export const menus:Array<Imenu> = [
    {
        title: 'Ngoại ngữ',
        key: "menu 0"
    },
    {
        title: 'Marketing',
        key: "menu 1"
    },
    {
        title: 'Tin học văn phòng',
        key: "menu 2"
    },
    {
        title: 'Kế toán - tài chính',
        key: "menu 3"
    },
    {
        title: 'Sales Bán hàng',
        key: "menu 4"
    },
    {
        title: 'Thiết kế - Xây dựng',
        key: "menu 5"
    },
    {
        title: 'Kỹ năng',
        key: "menu 6"
    },
    {
        title: 'Công nghệ',
        key: "menu 7"
    },
];

export const list_coure_type = [
    {
        icon: ic_language,
        title: "Ngoại Ngữ"
    },
    {
        icon: ic_marketing,
        title: "Marketing"
    },
    {
        icon: ic_computer,
        title: "Tin học văn phòng"
    },
    {
        icon: ic_business,
        title: "Kinh doanh và khởi nghiệp"
    },
    {
        icon: ic_accountant,
        title: "Kế toán - Tài chính"
    },
    {
        icon: ic_sales,
        title: "Sales Bán hàng"
    },
    {
        icon: ic_building,
        title: "Thiết kế - Xây dựng"
    },
    {
        icon: ic_skill,
        title: "Kỹ năng"
    },
    {
        icon: ic_technology,
        title: "Công nghệ"
    },
    {
        icon: ic_heal,
        title: "Sức khỏe - Làm đẹp"
    },
];