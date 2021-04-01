import React from 'react';
import { AppText, Margin } from '../../globalStyle';
import Grid from '@material-ui/core/Grid';
import FooterIcon from './Footer-Icon';

import { FooterContainer, FooterLink, FooterLinkContainer } from './Footer.elements';

function Footer() {
	return (
		<FooterContainer>
			<FooterLinkContainer>
				<FooterLink>Policy</FooterLink>
				<FooterLink>FAQ</FooterLink>
				<FooterLink>Contact</FooterLink>
				<FooterIcon icon="twitter" />
			</FooterLinkContainer>
			<Margin mt="20" />
			<AppText>© 2021 GangstaBet</AppText>
		</FooterContainer>
	);
}

export default Footer;
