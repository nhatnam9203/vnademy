import React from "react";
import CustomIcon from "./CustomIcon";
import CustomInput from "./CustomInput";
import styles from './style.module.css';
import {
    ic_search,
    ic_window
} from "assets/index";
import Image from "next/image";

export default function SearchBar() {

    const [searchValue, setSearchValue] = React.useState("");

    return (
        <div className={styles.topbar_container_left}>
            <CustomIcon
                icon={ic_window}
                width={30}
                height={30}
                alt="ic_window"
                onClick={() => { }}
                style={{ marginRight: 10, cursor: "pointer" }}
            />
            <CustomInput
                value={searchValue}
                placeholder="Tìm khoá học, giảng viên"
                height={42}
                onChange={e => setSearchValue(e.target.value)}
            />
            <SearchButton />
        </div>

    );
}

const SearchButton = () => {
    return (
        <div className={styles.search_button}>
            <Image
                src={ic_search}
                height={16}
                width={16}
                alt="ic_search"
            />
        </div>
    )
};