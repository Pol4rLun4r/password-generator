import Window from "./style/Window";
import Main from "./style/Main";
import GlobalStyle from "../../globalStyles/Global.style";
import { ReactNode } from "react";

interface ILayout {
    children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <GlobalStyle />
            <Main>
                <Window>
                    {children}
                </Window>
            </Main>
        </>
    )
};

export default Layout;