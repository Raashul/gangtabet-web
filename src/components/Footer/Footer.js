import React from 'react';
import { AppText } from '../../globalStyle';
import Grid from '@material-ui/core/Grid';
import FooterIcon from './Footer-Icon';

import { FooterContainer, FooterLink, FooterLinkContainer } from './Footer.elements';

function Footer() {
	return (
		<FooterContainer>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<AppText fontSize="0.7">© 2021 GangstaBet</AppText>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FooterLinkContainer>
						<FooterLink>Policy</FooterLink>
						<FooterLink>FAQ</FooterLink>
						<FooterLink>Contact</FooterLink>
						<FooterIcon icon="twitter" />
					</FooterLinkContainer>
				</Grid>
			</Grid>
		</FooterContainer>
	);
}

export default Footer;
