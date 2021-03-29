import React from 'react';
import * as DATA from '../../data/home';
import { Container, AppText, HeadingText } from '../../globalStyle';

function HomeToken() {
	return (
		<Container>
			<HeadingText>{DATA.data.tokenHeader}</HeadingText>

			<br />
			<AppText>{DATA.data.tokenText1}</AppText>

			<br />
			<AppText>{DATA.data.tokenText2}</AppText>
		</Container>
	);
}

export default HomeToken;
