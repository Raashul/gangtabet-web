import React from 'react';
import * as DATA from '../../data/home';
import { Container, AppText, HeadingText } from '../../globalStyle';

function HomeIntro() {
	return (
		<Container>
			<HeadingText>{DATA.data.detailsHeader}</HeadingText>

			<br />
			<AppText>{DATA.data.detailsText1}</AppText>

			<br />
			<AppText>{DATA.data.detailsText2}</AppText>
		</Container>
	);
}

export default HomeIntro;
