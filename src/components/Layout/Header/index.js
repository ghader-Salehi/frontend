import styled from 'styled-components'

import { Box, Flex } from '@/components/Core/Toolkit'
import { Logo } from '@/components/Core/Logo'
import { Nav, NavItem, NavItemWithMenu } from '@/components/Core/Nav'

const Border = styled(Box)`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: ${({ isFixed }) => (isFixed ? '60px auto 0 auto' : '0 auto')};
  max-width: ${({ theme }) => theme.siteWidth + 50}px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: ${({ isFixed }) => (isFixed ? '75px auto 0 auto' : '0 auto')};
  }
`

const HeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1240px;
  padding: 15px 35px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 15px 96px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 15px 69px;
  }
`

const HeaderSection = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'block')};
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.header};
`

const Header = ({ isFixed = true }) => {
  const products = [
    { link: '/auction', text: 'Auction' },
    { link: '/lottery', text: 'Lottery' },
    { link: '/marketplace', text: 'Marketplace' },
    { link: '/nft', text: 'NFT' },
  ]

  const resources = [{ link: '/', text: 'Docs' }]

  const services = [{ link: '/', text: 'Contact' }]

  return (
    <>
      <HeaderSection isFixed={isFixed}>
        <HeaderContainer>
          <Logo />
          <Nav>
            {(setIsOpen) => (
              <>
                <NavItemWithMenu menuItems={products} {...{ setIsOpen }}>
                  Products
                </NavItemWithMenu>
                <NavItem link="/company" {...{ setIsOpen }}>
                  Company
                </NavItem>
                <NavItemWithMenu menuItems={resources} {...{ setIsOpen }}>
                  Resources
                </NavItemWithMenu>
                <NavItemWithMenu menuItems={services} {...{ setIsOpen }}>
                  Services
                </NavItemWithMenu>
                <NavItem link="/news-and-events" {...{ setIsOpen }}>
                  News & Events
                </NavItem>
              </>
            )}
          </Nav>
        </HeaderContainer>
      </HeaderSection>
      <Border isFixed={isFixed} />
    </>
  )
}

export default Header
