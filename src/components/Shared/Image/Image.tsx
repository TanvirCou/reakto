import { IKImage } from 'imagekitio-react';

type ImageType = {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number
}

const Image = ({ src, alt, className, width, height }: ImageType) => {
    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            src={src}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            className={className}
            alt={alt}
            height={height}
            width={width}
            transformation={[
                {
                    width: width,
                    height: height
                }
            ]}
        />
    )
}

export default Image