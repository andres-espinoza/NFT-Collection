import './App.css'
import { NFTCard, NFTCardRef } from './components'

const App = () => {
	return (
		<div className='App'>
			{/* <NFTCard NftPrice={0.089}/> */}
			<NFTCardRef NFTPrice={0.089}/>
		</div>
	)
}

export default App
