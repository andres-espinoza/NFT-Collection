import { useState, useEffect } from 'react'
import {
	CardContainer,
	NFT,
	NFTData,
	NFTName,
	NFTprice,
	NFTCoin,
	Footer,
	Author,
	MiniPic,
	Name,
	HeartToClick
} from './styled'
import Pic from '../../assets/nft-card/mini-pic.webp'

const NFTCard = ({ NftPrice }) => {

	const [displayPrice, setDisplayPrice] = useState(null)

	const animationPrice = () => {
		setDisplayPrice(0)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if(displayPrice < NftPrice*1000) {
				setDisplayPrice(displayPrice + 1)
			}
		}, 10)

		return () => clearInterval(interval)

	},)

	return (
		<CardContainer>
			<NFT>
				<NFTData onMouseEnter={() => animationPrice()}>
					<NFTName>
						Hunting #0001
					</NFTName>
					<NFTprice>
						{displayPrice >= 10 ? `0.0${displayPrice}` : `0.00${displayPrice}`}
						<NFTCoin>
							ETH
						</NFTCoin>
					</NFTprice>
				</NFTData>
			</NFT>
			<Footer>
				<Author>
					<MiniPic src={Pic} />
					<Name 
					href='https://github.com/andres-espinoza'
					target='_blank'
					rel='noopener noreferrer'
					>
						Andrés Espinoza
					</Name>
				</Author>
				<HeartToClick />
			</Footer>
		</CardContainer>
	)
}

export default NFTCard
