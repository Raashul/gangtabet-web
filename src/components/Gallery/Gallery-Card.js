import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, AppText, HeadingText } from '../../globalStyle';

import { CardContainer, NameContainer } from './Gallery.elements';

import dummyImage from '../../assets/dummy-image.png';

import { GalleryFeatures } from '../../components';

function GalleryCard() {
	let history = useHistory();
	const gotoGangster = () => {
		history.push('/gangter/' + Math.floor(Math.random() * (10 - 1 + 1)) + 1);
	};
	return (
		<React.Fragment>
			<CardContainer onClick={gotoGangster}>
				<img src={dummyImage} style={{ width: '100%' }} />
				<NameContainer>
					<AppText fontSize="1.2" bold>
						Ninja Gansta
					</AppText>
					<AppText fontSize="1.2" bold>
						#1{' '}
					</AppText>
				</NameContainer>

				<GalleryFeatures />
			</CardContainer>
		</React.Fragment>
	);
}

export default GalleryCard;
