import React from 'react';
import { ChipContainer } from './Gallery.elements';
import Chip from '@material-ui/core/Chip';

function GalleryFeatures() {
	return (
		<React.Fragment>
			<ChipContainer>
				<Chip label="Suit" color="primary" />
				<Chip label="Shoes" color="primary" />
			</ChipContainer>
		</React.Fragment>
	);
}

export default GalleryFeatures;
