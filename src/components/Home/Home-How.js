import React from 'react';
import { Container, AppText, HeadingText } from '../../globalStyle';
import { HomeListItems, HomeNavItem } from './Home.elements';
import * as DATA from '../../data/home';

function HomeHow() {
	return (
		<React.Fragment>
			<Container style={{ paddingTop: 50 }}>
				<HeadingText>How do I get a Punk?</HeadingText>
				<br />

				<HomeListItems>
					<HomeNavItem>
						<AppText>{DATA.data.step1}</AppText>
					</HomeNavItem>

					<HomeNavItem>
						<AppText>{DATA.data.step2}</AppText>
					</HomeNavItem>

					<HomeNavItem>
						<AppText>{DATA.data.step3}</AppText>
					</HomeNavItem>

					<HomeNavItem>
						<AppText>{DATA.data.step4}</AppText>
					</HomeNavItem>
				</HomeListItems>
			</Container>
		</React.Fragment>
	);
}

export default HomeHow;
