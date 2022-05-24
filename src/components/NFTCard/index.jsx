const NFTCard = () => {

    return (

        <div className="card__container">

            <div className="card__nft-art">
                <div className="card__nft-art-hover">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="card__body">
                <h2>
                    Equilibrium #3429
                </h2>
                <p>
                    Our Equilibrium collection promotes balance and calm.
                </p>
                <div className="card__body-data">
                    <div className="card__body-data-price">
                        <img src="" alt="" />
                        <span>0.041ETH</span>
                    </div>
                    <div className="card__body-data-date">
                        <img src="" alt="" />
                        <span>3 days left</span>
                    </div>
                </div>
            </div>

            <div className="card__footer">
                <img src="" alt="" />
                <p>
                    Creation of <span>Jules Wyvern</span>
                </p>
            </div>

        </div>
    )
}

export default NFTCard