import React, { useState, useEffect } from 'react';
import {
	Nav,
	NavbarContainer,
	NavIcon,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
	NavBtnLink
} from './Navbar.elements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyle';

export default function Navbar() {
	const [ click, setClick ] = useState(false);
	const [ button, setButton ] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const showButton = () => {
		if (window.innerWidth <= 900) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);
	return (
		<div>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<NavIcon />
							GangstaBet
						</NavLogo>

						<MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>

						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to="/">HOME</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to="/token">TOKEN</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to="/gallery">GALLERY</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to="/wallet">WALLET</NavLinks>
							</NavItem>

							{/* <NavItemBtn>
								{button ? (
									<NavBtnLink to="/sign-up">
										<Button primary>SIGN UP</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to="sign-up">
										<Button fontBig primary>
											Sign up
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn> */}
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</div>
	);
}
