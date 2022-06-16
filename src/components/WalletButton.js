import { shortenAddress, useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";

function WalletButton() {
    const [rendered, setRendered] = useState("");

    const { account, activateBrowserWallet, deactivate, error } = useEthers();

    useEffect(() => {
        if (account) {
            setRendered(shortenAddress(account));
        } else {
            setRendered("");
        }
    }, [account]);

    useEffect(() => {
        if (error) {
            console.error("Error while connecting wallet:", error.message);
        }
    }, [error]);

    return (
        <div>
            <button className="btn"
                onClick={() => {
                    if (!account) {
                        activateBrowserWallet();
                    } else {
                        deactivate();
                    }
                }}
            >
                {rendered === "" && "Connect Wallet"}
                {rendered !== "" && rendered}
            </button>

            <a href="https://testnets.opensea.io/collection/the-dog-of-andybimbam">
                <button className="logo">
                    <img src={require('../image/opensealogo.png')} alt="Logo" width="40" height="40" />
                </button>
            </a>

            <a href="https://twitter.com/AndyWaiHim52">
                <button className="logo">
                    <img src={require('../image/twitterlogo.png')} alt="Logo" width="35" height="30" />
                </button>
            </a>
        </div>
    );
}

export default WalletButton