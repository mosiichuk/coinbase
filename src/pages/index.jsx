import React from 'react';
import Logo from "components/atoms/Logo/Logo";
import Button from "components/atoms/Button/Button";

const Homepage = () => {
    return (
        <>
            <Logo/>
            <Logo monochrome/>
            <Button>
                Login
            </Button>
        </>
    );
};

export default Homepage;
