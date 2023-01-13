import styled from "@emotion/styled";

function Footer() {

    return (
        <FooterContainer>
            <FooterInner>
                <FooterSection>
                    About Us
                </FooterSection>
                <FooterSection>
                    Contact Us
                </FooterSection>
                <FooterSection>
                    Join Us
                </FooterSection>
            </FooterInner>
            <FooterBar>
                Copyright &copy; 2023 XPDKasun
            </FooterBar>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    padding: 10px;
    background: #333;
`;

const FooterInner = styled.div`
    display: flex;
`;

const FooterSection =  styled.div`
    padding: 5px;
    color: white;
`;

const FooterBar = styled.div`
    display: flex;
    justify-content: center;
    color: white;
`;

export default Footer;