import {
    CardContainer,
    NFT,
    Footer,
    HeartToClick
} from './Styled'
import Pic from '../../assets/nft-card/mini-pic.webp'

const NFTCardRef = () => {
    return (
        <CardContainer>
            <NFT>
                <div className="NFT__data">
                    <h3 className="data__name">
                        Hunting #0001
                    </h3>
                    <small className="data__price">
                        0.089
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

export default NFTCardRef