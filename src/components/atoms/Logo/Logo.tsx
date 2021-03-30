import React, {FC} from 'react';
import Image from 'next/image'

interface LogoProps {
    monochrome?: boolean;
}

const Logo: FC<LogoProps> = ({monochrome}: LogoProps) => {
    return (
        <Image
            src={monochrome ? '/img/logo-white.svg' : '/img/logo.svg'}
            alt="Logo"
            width={142}
            height={29}
        />
    );
};

export default Logo;
