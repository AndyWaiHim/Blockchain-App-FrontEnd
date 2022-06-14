import React, { useState } from "react"
import { Contract } from '@ethersproject/contracts'
import { useEthers, useContractFunction } from "@usedapp/core"
// import { getDefaultProvider } from 'ethers'
// import { Mainnet, DAppProvider, useSendTransaction, Config, Rinkeby } from '@usedapp/core'

const changeBackground = e => {
    e.target.style.background = 'chocolate'
}
const resetBackground = e => {
    e.target.style.background = 'antiquewhite'
}


function UpdateData() {

    const [fnumber, setFnumber] = useState("0")
    const ERC20_ABI_Interface = [
        "function updateData(uint256) external",
        "function readData() external view returns (uint256)",
    ]
    // const wethInterface = new utils.Interface(ERC20_ABI)

    const wethContractAddress = '0x92c6c09e33375189b3378eE8774274890cDB1556'
    const contract = new Contract(wethContractAddress, ERC20_ABI_Interface)
    const { state, send } = useContractFunction(contract, 'updateData')
    const { status } = state
    const { account } = useEthers()


    const handleChange = (e) => {
        setFnumber(e.target.value)
    }

    const update = () => {
        send(fnumber.toString())
    }

    return (
        <>
            {
                account
                    ? <div>
                        <form>
                            <label>
                                Value : <input type="number" value={fnumber} onChange={handleChange} />
                            </label>
                        </form>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px 20px' }}>
                            The value is {fnumber}
                        </div>
                        <p>Status: {status}</p>
                        <boutton className="btn" onMouseOver={changeBackground} onMouseOut={resetBackground} onClick={() => update()}>Update Value </boutton>
                    </div>
                    : <p>
                        Please connect wallet. <br />
                        {/* <button
                            onClick={() => activateBrowserWallet()}
                            className="btn"
                            onMouseOver={changeBackground}
                            onMouseOut={resetBackground}
                        >
                            Connect Wallet
                        </button> */}
                    </p>
            }

        </>
    )
}

export default UpdateData