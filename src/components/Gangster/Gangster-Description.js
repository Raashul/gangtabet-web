import React from 'react';
import { Card, SpecialFeatureIconContainer } from './Gangster.elements';
import { AppText, Margin } from '../../globalStyle';
import { AttributesTag } from '../../globalStyle';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

import { GangsterNaming } from '../../components';

function GangsterDescription() {
	return (
		<React.Fragment>
			<Card>
				<AppText bold fontSize="1.1">
					About
				</AppText>
				<Margin mt="10" />
				<AppText fontSize="1.1">Ganger # 1: Joe Biden</AppText>

				<AppText fontSize="0.7">Owned by: 0x208b82B04449Cd51803fAE4B1561450ba1 </AppText>
			</Card>

			<Margin mt="30" />

			<Card>
				<AppText bold fontSize="1.1">
					{' '}
					Attributes
				</AppText>
				<Margin mt="10" />

				<div style={{ display: 'flex' }}>
					<Grid container spacing={2}>
						<Grid item xs={3} sm={3} md={2} lg={2}>
							<AttributesTag>
								<AppText fontSize="0.8" color="white">
									Suit
								</AppText>
							</AttributesTag>
						</Grid>

						<Grid item xs={3} sm={3} md={2} lg={2}>
							<AttributesTag>
								<AppText fontSize="0.8" color="white">
									Shoes
								</AppText>
							</AttributesTag>
						</Grid>

						<Grid item xs={3} sm={3} md={2} lg={2}>
							<AttributesTag>
								<AppText fontSize="0.8" color="white">
									Glasses
								</AppText>
							</AttributesTag>
						</Grid>

						<Grid item xs={3} sm={3} md={2} lg={2}>
							<AttributesTag>
								<AppText fontSize="0.8" color="white">
									Hat
								</AppText>
							</AttributesTag>
						</Grid>

						<Grid item xs={3} sm={3} md={2} lg={2}>
							<AttributesTag>
								<AppText fontSize="0.8" color="white">
									Chain
								</AppText>
							</AttributesTag>
						</Grid>

						<Grid item xs={3} sm={3} md={2} lg={2}>
							<AttributesTag>
								<AppText fontSize="0.8" color="white">
									Tattoo
								</AppText>
							</AttributesTag>
						</Grid>
					</Grid>
				</div>
			</Card>

			<Margin mt="30" />

			<Card>
				<AppText fontSize="1.1" bold>
					Special Features
				</AppText>

				<Margin mt="20" />

				<React.Fragment>
					<Grid container spacing={2}>
						<Grid item xs={3} sm={3} md={3} lg={3}>
							<AppText bold>Health</AppText>
							<SpecialFeatureIconContainer>
								<FavoriteIcon />
								<AppText fontSize="0.9">10</AppText>
							</SpecialFeatureIconContainer>
						</Grid>

						<Grid item xs={3} sm={3} md={3} lg={3}>
							<AppText bold>Strength</AppText>
							<SpecialFeatureIconContainer>
								<FitnessCenterIcon />
								<AppText fontSize="0.9">25</AppText>
							</SpecialFeatureIconContainer>
						</Grid>

						<Grid item xs={3} sm={3} md={3} lg={3}>
							<AppText bold>Pace</AppText>
							<SpecialFeatureIconContainer>
								<DirectionsRunIcon />
								<AppText fontSize="0.9">15</AppText>
							</SpecialFeatureIconContainer>
						</Grid>
					</Grid>
				</React.Fragment>
			</Card>

			<Margin mt="30" />

			<GangsterNaming />
		</React.Fragment>
	);
}

export default GangsterDescription;
