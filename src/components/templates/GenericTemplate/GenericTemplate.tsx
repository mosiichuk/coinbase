import React, {FC} from 'react';
import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";

const GenericTemplate : FC = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default GenericTemplate;
