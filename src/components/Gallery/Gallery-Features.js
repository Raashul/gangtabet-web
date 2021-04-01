import React from 'react';
import { ChipContainer } from './Gallery.elements';
import Chip from '@material-ui/core/Chip';
import { AttributesTag, AppText } from '../../globalStyle';
import Grid from '@material-ui/core/Grid';

function GalleryFeatures() {
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={3} sm={3} md={3} lg={3}>
					<AttributesTag>
						<AppText fontSize="0.8" color="white">
							Suit
						</AppText>
					</AttributesTag>
				</Grid>

				<Grid item xs={3} sm={3} md={3} lg={3}>
					<AttributesTag>
						<AppText fontSize="0.8" color="white">
							Suit
						</AppText>
					</AttributesTag>
				</Grid>

				<Grid item xs={3} sm={3} md={3} lg={3}>
					<AttributesTag>
						<AppText fontSize="0.8" color="white">
							Suit
						</AppText>
					</AttributesTag>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default GalleryFeatures;
