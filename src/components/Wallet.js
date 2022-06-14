import React from 'react'
import { useEthers, useEtherBalance, Rinkeby, Mainnet } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'



const changeBackground = e => {
    e.target.style.background = 'chocolate';
}
const resetBackground = e => {
    e.target.style.background = 'antiquewhite';
}


const WalletBySam = () => {

    const { chainId, activateBrowserWallet, account, deactivate, } = useEthers()
    const rinkebyBalance = useEtherBalance(account, { chainId: Rinkeby.chainId })
    const mainnetBalance = useEtherBalance(account, { chainId: Mainnet.chainId })

    const provider = window.ethereum

    const switchToRinkeby = async () => {
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x4' }],
            });
            console.log("You have succefully switched to Binance Test network")
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                console.log("This network is not available in your metamask, please add it")
            }
            console.log("Failed to switch to the network")
        }
    }

    const switchToMainnet = async () => {
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x1' }],
            });
            console.log("You have succefully switched to Binance Test network")
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                console.log("This network is not available in your metamask, please add it")
            }
            console.log("Failed to switch to the network")
        }
    }




    return (
        <div>
            <h3>
                dApp Wallet
            </h3>
            {
                account
                    ?
                    <div>
                        <p>Your account: {account}</p>
                        <p>Current chain: {chainId}</p>
                        <button onClick={deactivate} className="btn" onMouseOver={changeBackground} onMouseOut={resetBackground}>
                            Disconnect
                        </button>
                        <div>
                            {
                                <button onClick={() => { switchToMainnet(); switchToRinkeby() }}>
                                    {chainId === Rinkeby.chainId ? <>Switch to Mainnet</> : <>Switch to Rinkeby</>}
                                </button>
                            }
                        </div>
                        <hr />
                        {/* Display wallet balance */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px 20px' }}>
                            {
                                chainId === Rinkeby.chainId
                                    ?
                                    <>
                                        {
                                            rinkebyBalance &&
                                            <div className="bal">
                                                <h4>Rinkeby Balance</h4>
                                                {formatEther(rinkebyBalance)}
                                            </div>
                                        }
                                    </> :
                                    <>
                                        {
                                            mainnetBalance &&
                                            <div className="bal">
                                                <h4>Mainnet Balance</h4>
                                                {formatEther(mainnetBalance)}
                                            </div>
                                        }
                                    </>
                            }
                        </div>
                    </div>
                    : <p>
                        Please install Metamask and connect wallet. <br />
                        <button
                            onClick={() => activateBrowserWallet()}
                            className="btn"
                            onMouseOver={changeBackground}
                            onMouseOut={resetBackground}
                        >
                            Connect Wallet
                        </button>
                    </p>
            }


        </div>
    )
}

export default WalletBySam