import React from 'react'
import { Header, NameDiv, Nav, NavMenu, NavItens, Itens, CertificadoIten, NameLink, DivIcon } from './Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
        <Header>
            <Nav>
                <NameDiv>
                    <DivIcon>
                        <FontAwesomeIcon icon={faBug} size="xl" style={{ color: "#000000", }} />
                    </DivIcon>
                    <NameLink href="/">Larissa Rodrigues</NameLink>
                </NameDiv>

                <NavMenu>

                    <NavItens>
                        <Itens href="/">Home</Itens>
                    </NavItens>

                    <NavItens>
                        <Itens href="/">Projetos</Itens>
                    </NavItens>

                    <NavItens>
                        <CertificadoIten href="/">Certificados</CertificadoIten>
                    </NavItens>

                </NavMenu>
            </Nav>

        </Header>
    )
}

export default NavBar