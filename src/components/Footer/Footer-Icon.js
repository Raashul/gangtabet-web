import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const style = {
	color: 'black',
	width: 30,
	height: 30,
	marginLeft: 10
};

export default function FooterIcon(props) {
	const showIcon = () => {
		if (props.icon) {
			if (props.icon === 'twitter') {
				return <TwitterIcon style={style} />;
			}
		}
		return null;
	};
	return <React.Fragment>{showIcon()}</React.Fragment>;
}
