import { shortenAddress, useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";
// import { Button } from "./";

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
        <button
            onClick={() => {
                if (!account) {
                    activateBrowserWallet();
                } else {
                    deactivate();
                }
            }}
            className="btn"
        >
            {rendered === "" && "Connect Wallet"}
            {rendered !== "" && rendered}
        </button>

    );
}

export default WalletButton