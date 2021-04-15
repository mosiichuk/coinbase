import React, {FC} from 'react';
import Image from "next/image";

interface SocialMediaIconProps {
    type: 'facebook' | 'instagram' | 'google' | 'twitter';
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({type}: SocialMediaIconProps) => {
    return (
        <Image
            src={`icons/${type}.svg`}
            alt={`Logo of ${type}`}
            width={12}
            height={13}
        />
    );
};

export default SocialMediaIcon;
