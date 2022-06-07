import Header from "./header/Header";
import { Wrapper, Width60 } from "./styles";

const AppLayout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Width60>{children}</Width60>
        </Wrapper>
    );
};

export default AppLayout;
