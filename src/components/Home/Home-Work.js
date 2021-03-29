import React from 'react';
import { Container, AppText, HeadingText } from '../../globalStyle';
import * as DATA from '../../data/home';

function HomeWork() {
	return (
		<Container>
			<HeadingText>How It Works</HeadingText>
			<br />
			<AppText>{DATA.data.howitworks1}</AppText>

			<br />
			<AppText>{DATA.data.howitworks1}</AppText>
		</Container>
	);
}

export default HomeWork;
