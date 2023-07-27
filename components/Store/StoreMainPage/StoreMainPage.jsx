/* eslint-disable @next/next/no-img-element */
import React from "react";

import Image from "next/legacy/image";

const MainPage = () => {
    return (
        <>
            <div>
                <img className=" w-full" src={"/store_banner.png"} alt="Store Banner"></img>
            </div>
        </>
    )
}

export default MainPage;