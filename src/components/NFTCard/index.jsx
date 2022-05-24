import {
	CardContainer,
	NFTArt,
	TitleCard,
	CardFooter,
	CardBody,
	CardIcons,
	CardContainerData,
	NFTDescription,
	HoverArt,
	NFTData,
	MiniPic,
    Name
} from './styled'
import ETH from '../../assets/nft-card/icon-ethereum.svg'
import Clock from '../../assets/nft-card/icon-clock.svg'
import Pic from '../../assets/nft-card/mini-pic.webp'

const NFTCard = () => {
	return (
		<CardContainer>
			<NFTArt>
				<HoverArt className='card__nft-art-hover'>
					<img src='' alt='' />
				</HoverArt>
			</NFTArt>

			<CardBody>
				<TitleCard>Hunting #0001</TitleCard>
				<NFTDescription>
					Our Equilibrium collection promotes balance and calm.
				</NFTDescription>
				<CardContainerData>
					<NFTData>
						<CardIcons src={ETH} alt='' />
						<span>0.074ETH</span>
					</NFTData>
					<NFTData className='card__body-data-date'>
						<CardIcons src={Clock} alt='' />
						<span>3 days left</span>
					</NFTData>
				</CardContainerData>

				<CardFooter>
					<MiniPic src={Pic} alt='' />
					<p>
						Creation of <Name href='https://github.com/andres-espinoza' target='_blank' rel='noopener noreferrer'>Andrés Espinoza</Name>
					</p>
				</CardFooter>
			</CardBody>
		</CardContainer>
	)
}

export default NFTCard
