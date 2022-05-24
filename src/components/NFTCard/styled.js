import styled from 'styled-components'
import {
	cardColor,
	fontColor,
	borderRadius,
	titleFont,
} from './design-variables'
import NFTColor from '../../assets/nft-card/nft-2.webp'

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
    display: flex;
    align-items: center;
    justify-content: center;
	background-image: url(${NFTColor});
	background-size: contain;
	border-radius: ${borderRadius};
    filter: grayscale(0);
    transition: all 0.3s ease-out;
	cursor: pointer;

    img:nth-child(1) {
        transition: all 0.3s ease-out;
        opacity: 0;
    }

    &:hover {

        filter: grayscale(1);
        transition: all 0.3s ease-out;

        img:nth-child(1) {
            transition: all 0.3s ease-out;
            opacity: 1;
        }
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
    margin-top: auto;
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
	gap: 0.4rem;
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

export const Name = styled('a')`
    font-weight: 600;
    color: #000;
`