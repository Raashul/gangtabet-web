import React from 'react';
import { BannerContainer } from './Release.elements';
import { AppText } from '../../globalStyle';
import { useHistory } from 'react-router-dom';

export default function ReleaseBanner() {
	const history = useHistory();

	const gotoRegistration = () => {
		history.push('/register');
	};
	return (
		<BannerContainer>
			<AppText fontSize="1.3" cursor underline onClick={gotoRegistration}>
				{' '}
				Gangsta Bet will be live on April 25, 2021. Stay tuned!
			</AppText>
		</BannerContainer>
	);
}
