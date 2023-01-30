import mercadopagoLogo from "../../public/mercadopago-logo.svg"

import { Container } from "./Container"
import { Wrapper } from "./Wrapper"

export const Navbar = () => {
    return (
        <Wrapper>
            <Container>
                <nav className="flex justify-between">
                    <img src={mercadopagoLogo} alt="MercadoPago" className="w-[150px]"/>                 
                </nav>
            </Container>
        </Wrapper>
    )
}