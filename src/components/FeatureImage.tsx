interface FeatureImageProps {
  url: string;
  alt?: string;
}

export const FeatureImage: React.FC<FeatureImageProps> = ({
  url,
  alt,
}: FeatureImageProps) => {
  return (
    <>
      <img src={url} alt={alt} className="responsive"></img>
      <style jsx>
        {`
          .responsive {
            width: 100%;
            height: auto;
          }
        `}
      </style>
    </>
  );
};

export default FeatureImage;
