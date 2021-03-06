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
	padding-left: 50px;
	padding-right: 50px;
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
	font-size: ${({ fontSize }) => (fontSize ? fontSize + 'rem' : '1rem')};
	font-weight: ${({ bold }) => (bold ? 'bold' : 'none')};
	color: #363636;
	line-height: 1.6;
	color: ${({ color }) => (color ? color : '')};
	cursor: ${({ cursor }) => (cursor ? 'pointer' : '')};
	text-decoration: ${({ underline }) => (underline ? 'underline' : '')};
`;

export const HeadingText = styled.p`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
	font-weight: bold;
`;

export const Margin = styled.div`margin-top: ${({ mt }) => (mt ? mt + 'px' : '0px')};`;

export const SubHeadingText = styled.p`font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.2rem')};`;

export const AttributesTag = styled.div`
	padding: 5px 15px;
	border-radius: 5px;
	background: ${({ background }) => (background ? background : '#478dad')};
`;

export default GlobalStyle;
