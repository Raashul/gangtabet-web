import React from 'react';
import { GalleryCard } from '../components';
import Grid from '@material-ui/core/Grid';
import { Container, AppText, Margin } from '../globalStyle';
import { GalleryContainer, GalleryHeadingContainer } from '../components/Gallery/Gallery.elements';
//suit, hat, shoes, items etc
function Gallery() {
	const loop = [];
	for (let i = 0; i < 20; i++) {
		loop[i] = 1;
	}
	return (
		<GalleryContainer>
			<GalleryHeadingContainer>
				<AppText bold fontSize="1.8">
					Meet the Gangsters
				</AppText>

				<Margin mt="10">
					<AppText fontSize="1">
						Polkamon exist in many shapes and colours, each differing in rarity and uniqueness. You can find the growing
						list of Polkamon here.
					</AppText>
				</Margin>
			</GalleryHeadingContainer>

			<Grid container spacing={4}>
				{loop.map((l, i) => {
					return (
						<React.Fragment>
							<Grid item xs={12} sm={4} md={4} lg={3}>
								<GalleryCard />
							</Grid>
						</React.Fragment>
					);
				})}
			</Grid>
		</GalleryContainer>
	);
}

export default Gallery;
