import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
	margin-top: 50px;
	padding: 30px 70px;
	border-top: 2px solid grey;
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
  padding: 1rem;


		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	
`;
