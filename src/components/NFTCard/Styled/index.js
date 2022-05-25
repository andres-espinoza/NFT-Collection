import styled from 'styled-components'
import NftArt from '../../../assets/nft-card/nft.webp'
import HeartFill from '../../../assets/nft-card/heart-fill.svg'
import HeartStroke from '../../../assets/nft-card/heart-stroke.svg'

export const CardContainer = styled.div`
	width: 15vw;
	height: fit-content;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
	background-color: #fff;
	transition: all 0.3s ease-in;

	&:hover {
		transition: all 0.3s ease-in;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 20px -20px;
		
	}
`

export const NFT = styled.div`
    background: url(${NftArt});
	background-size: contain;
	width: 100%;
	height: 100%;
	aspect-ratio: 1/1;

	.NFT__data{
        background-color: #fff;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px 0px inset;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
		opacity: 0;
		transition: all 0.4s ease-in;

		&:hover {
			opacity: 1;
			transition: all 0.3s ease-in;
		}

        .data__name {
            font-family: 'Syncopate', sans-serif;
            font-weight: 700;
            font-size: 1.3rem;
            text-align: center;
            width: min-content;
            color: #4b4b4b;
        }

        .data__price {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 1rem;
            color: #4b4b4b;

            .data__price-coin {
                font-weight: 500;
            }
        }
	}
`

export const Footer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;

    .footer__author {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;

        .footer__author-pic {
            width: 1.5rem;
            height: 1.5rem;
            aspect-ratio: 1/1;
            border-radius: 50%;
        }

        .footer__author-name {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 0.8rem;
            color: #4b4b4b;
        }
    }
`

export const HeartToClick = styled('div')`
	width: 1.2rem;
	height: 1.2rem;
	aspect-ratio: 1/1;
	background-image: url(${HeartStroke});
	display: flex;
	align-items: center;
	transition: all 0.3s ease-in;
	cursor: pointer;

	&:hover {
		background-image: url(${HeartFill});
		width: 1.2rem;
		height: 1.2rem;
		aspect-ratio: 1/1;
		transition: all 0.3s ease-in;
	}

`