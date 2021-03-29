import React from 'react';
import * as DATA from '../../data/token';
import { Container, AppText, HeadingText } from '../../globalStyle';
import { ImageContainer } from './Token.elements';
import homeImg from '../../assets/home-image.png';

function TokenIntro() {
	return (
		<Container>
			<HeadingText>{DATA.data.headingText}</HeadingText>
			<br /> <br />
			<AppText>{DATA.data.introText1}</AppText>
			<br /> <br />
			<AppText>{DATA.data.introText2}</AppText>
			<ImageContainer>
				<img src={homeImg} style={{ width: '100%', height: 250 }} />
			</ImageContainer>
		</Container>
	);
}

export default TokenIntro;
