import React from 'react';
import { Container, AppText, HeadingText } from '../../globalStyle';
import { ImageContainer } from './Home.elements';
import homeImg from '../../assets/home-image.png';
import * as DATA from '../../data/home';

export default function HomeHeading() {
	return (
		<React.Fragment>
			<Container style={{ paddingTop: 50 }}>
				<HeadingText>{DATA.data.headingText}</HeadingText>
				<br />
				<AppText>{DATA.data.introText1}</AppText>

				<br />
				<AppText>{DATA.data.introText2}</AppText>
				<br />
				<AppText>{DATA.data.introText3}</AppText>

				<ImageContainer>
					<img src={homeImg} style={{ width: '100%', height: 250 }} />
				</ImageContainer>
			</Container>
		</React.Fragment>
	);
}
