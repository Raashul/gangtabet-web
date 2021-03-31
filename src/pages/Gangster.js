import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '../globalStyle';
import dummyImage from '../assets/dummy-image.png';
import { GangsterDescription } from '../components';

function Gangster() {
	return (
		<React.Fragment>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={6} lg={6}>
						<img src={dummyImage} />
					</Grid>

					<Grid item xs={12} sm={6} md={6} lg={6}>
						<GangsterDescription />
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}

export default Gangster;
