import styled from "@emotion/styled";
import Logo from "./Logo";

function Header() {

    return (
        <header className="header">
            <HeaderInner>
                <HeaderSection justify="center">
                    <Logo />
                </HeaderSection>
            </HeaderInner>
        </header>
    )

}

const HeaderInner = styled.div`
    padding: 5px;
    background: #cacaca;
    display: flex;
`;

const HeaderSection = styled.div<{justify?: string}>`
    justify-content: ${props => props.justify};
    margin-right: 5px;

    &:last-child {
        margin-right: 0;
    }
`

export default Header;