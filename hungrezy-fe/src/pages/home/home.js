import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Delivery from "../../components/delivery/delivery";
import DiningOut from "../../components/dining-out/dining-out";
import NightLife from "../../components/nightlife/nightlife";
import Header from "../../components/shared/header/header";
import TabOptions from "../../components/shared/tab-options/tab-options";
import Footer from "../../components/shared/footer/footer";


const Home = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
            <TabOptions/>
                <Routes>
                    <Route path="/" element={<Delivery />} />
                    <Route path="/dining-out" element={<DiningOut />} />
                    <Route path="/nightlife" element={<NightLife />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Home