import styled from 'styled-components';

export const GalleryContainer = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 20px;
	margin-top: 20px;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const CardContainer = styled.div`
	margin-left: 5px;
	width: 100%;
	display: flex;
	flex-direction: column;
	cursor: pointer;
`;

export const NameContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 2px solid grey;
	margin-top: 5px;
`;

export const GalleryHeadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

export const ChipContainer = styled.div`
	display: flex;
	font-size: 20px !important;
`;
