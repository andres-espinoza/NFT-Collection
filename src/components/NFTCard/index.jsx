import { useState, useEffect } from 'react'
import {
    CardContainer,
    NFT,
    Footer,
    HeartToClick
} from './Styled'
import Pic from '../../assets/nft-card/mini-pic.webp'

const NFTCard = ({NFTPrice}) => {

    const [displayPrice, setDisplayPrice] = useState(null)

	const animationPrice = () => {
		setDisplayPrice(0)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if(displayPrice < NFTPrice*1000) {
				setDisplayPrice(displayPrice + 1)
			}
		}, 10)

		return () => clearInterval(interval)

	},)
    return (
        <CardContainer>
            <NFT>
                <div 
                className="NFT__data"
                onMouseEnter={() => animationPrice()} 
                >
                    <h3 className="data__name">
                        Hunting #0001
                    </h3>
                    <small className="data__price">
                        {displayPrice >= 10 ? `0.0${displayPrice}` : `0.00${displayPrice}`}
                        <span className="data__price-coin">
                            ETH
                        </span>
                    </small>
                </div>
            </NFT>
            <Footer>
                <div className="footer__author">
                    <img src={Pic} alt="" className="footer__author-pic" />
                    <a  
                    href='https://github.com/andres-espinoza'
					target='_blank'
					rel='noopener noreferrer' 
                    className="footer__author-name"
                    >
                        Andrés Espinoza
                    </a>
                </div>
                <HeartToClick />
            </Footer>
        </CardContainer>
    )
}

export default NFTCard