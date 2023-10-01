import { ReactNode } from "react";

interface IProps {
    onSubmitFom: (e: any) => void,
    handleSubmit: any
    children: ReactNode
}

export default function CustomForm({
    children,
    onSubmitFom,
    handleSubmit
}: IProps) {

    return (
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmitFom)}>
            {children}
        </form>
    )
}