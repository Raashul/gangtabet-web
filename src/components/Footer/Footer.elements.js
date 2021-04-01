import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export const FooterContainer = styled.div`
	margin-top: 50px;
	padding: 30px 70px;
	border-top: 2px solid grey;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 850px) {
		padding: 60px 20px;
	}
`;

export const FooterLinkContainer = styled.ul`
	display: flex;
	list-style: none;
`;

// export const FooterIcon = styled.div`

// `

export const FooterLink = styled(Link)`
  color: grey;  
	align-items: center;
	text-decoration: none;
  height: 100%;
  padding-left: 1.2rem;


		&:hover {
			color: black;
			transition: all 0.3s ease;
		}
	
`;
