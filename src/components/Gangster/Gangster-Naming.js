import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AppText, Margin } from '../../globalStyle';
import { Card } from './Gangster.elements';

function GangsterNaming() {
	return (
		<React.Fragment>
			<Card>
				<AppText fontSize="1.1" bold>
					Naming History
				</AppText>

				<Margin mt="10" />

				<AppText fontSize="0.9" bold>
					#Joe Biden
				</AppText>

				<AppText fontSize="0.9" bold>
					#Donald Trump
				</AppText>

				<AppText fontSize="0.9" bold>
					#Barrack Obama
				</AppText>
			</Card>
		</React.Fragment>
	);
}

export default GangsterNaming;
