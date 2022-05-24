import styled from 'styled-components'
import {
	cardColor,
	fontColor,
	borderRadius,
	titleFont,
} from './design-variables'
import NFTColor from '../../assets/nft-card/nft-2.webp'
import NFTBW from '../../assets/nft-card/nft.webp'

export const CardContainer = styled('div')`
	width: min-content;
	height: fit-content;
	padding: 1rem;
	border-radius: ${borderRadius};
	background: ${cardColor};
	color: ${fontColor};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
`

export const NFTArt = styled('figure')`
	height: 250px;
	width: min-content;
	aspect-ratio: 1/1;
	background-image: url(${NFTColor});
	background-size: contain;
	border-radius: ${borderRadius};
	cursor: pointer;
`

export const HoverArt = styled('div')`
	width: min-content;
	height: 100%;
	aspect-ratio: 1/1;
	background-image: url(${NFTBW});
	background-size: contain;
	border-radius: ${borderRadius};
	cursor: pointer;
	opacity: 0;
	transition: all 0.3s ease;

	&:hover {
		opacity: 1;
		transition: all 0.4s ease-in-out;
	}
`

export const TitleCard = styled('h2')`
	font-family: ${titleFont};
	font-size: 1.2rem;
	font-weight: 700;
	color: #000;
	width: min-content;
`

export const CardBody = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 250px;
`

export const NFTDescription = styled('p')`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
`

export const CardContainerData = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.7rem;
`

export const NFTData = styled('div')`
	display: flex;
	gap: 0.3rem;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 0.8rem;
`
export const CardIcons = styled('img')`
	filter: brightness(0%) contrast(103%);
`

export const CardFooter = styled('div')`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.7rem;
	width: max-content;
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 0.8rem;
	margin-top: auto;
`

export const MiniPic = styled('img')`
	width: 1.2rem;
	height: 1.2rem;
	aspect-ratio: 1/1;
	border-radius: 50%;
`
