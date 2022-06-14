import React from "react";
import { Image, } from "./";
import { Contract } from '@ethersproject/contracts'
import { useEthers, useContractFunction } from "@usedapp/core"


function MintAnimal() {

    const ERC20_ABI_Interface = [
        "function createPack(uint8) public payable",
    ]
    // const wethInterface = new utils.Interface(ERC20_ABI)

    const wethContractAddress = '0xCe2EE8746C98b3B9d25981d98b2C7F658BF1b1F5'
    const contract = new Contract(wethContractAddress, ERC20_ABI_Interface)
    const { state, send: createPack } = useContractFunction(contract, 'createPack')
    const { status } = state
    const { activateBrowserWallet, account, deactivate } = useEthers()

    const handleClick1 = () => {
        createPack(3, { value: "40000000000000000" });
    }

    const handleClick2 = () => {
        createPack(2, { value: "30000000000000000" });
    }

    const handleClick3 = () => {
        createPack(1, { value: "20000000000000000" });
    }

    const handleClick4 = () => {
        createPack(0, { value: "10000000000000000" });
    }

    return (
        <>
            {
                account
                    ? <div>
                        <h3>
                            Choose a Dog to Mint !
                        </h3>
                        <p>Status: {status}</p>
                        {state.errorMessage && <p>Error: {state.errorMessage}</p>}
                        <button className="class_dog_button" onClick={() => handleClick1()}>
                            <Image src="https://cdn.pixabay.com/photo/2021/05/29/07/06/shiba-6292660_960_720.jpg" className="imagedog" />
                        </button>

                        <button className="class_dog_button" onClick={() => handleClick2()}>
                            <Image src="https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg" className="imagedog" />
                        </button>

                        <button className="class_dog_button" onClick={() => handleClick3()}>
                            <Image src="https://cdn.pixabay.com/photo/2021/01/30/15/14/akita-5964180_960_720.jpg" className="imagedog" />
                        </button>

                        <button className="class_dog_button" onClick={() => handleClick4()}>
                            <Image src="https://cdn.pixabay.com/photo/2016/11/19/15/20/dog-1839808_960_720.jpg" className="imagedog" />
                        </button>
                    </div>
                    : <p>
                        Please connect wallet. <br />
                    </p>
            }

        </>

    )

}

export default MintAnimal