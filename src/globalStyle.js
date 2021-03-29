import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
	padding: 0;
}

body {
	font-family: 'Merriweather', sans-serif;

}
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-left: 70px;
	padding-right: 70px;
	margin-bottom: 20px;
	margin-top: 20px;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: #acadae;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export const Row = styled.div`
	margin-top: 20px;
	padding-left: 10px;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`;

export const AppText = styled.p`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.1rem')};
	color: #363636;
	line-height: 1.6;
`;

export const HeadingText = styled.p`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
	font-weight: bold;
`;

export const SubHeadingText = styled.p`font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.2rem')};`;

export default GlobalStyle;
