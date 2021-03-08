interface FeatureImageProps {
  url: string;
  alt?: string;
}

export const FeatureImage: React.FC<FeatureImageProps> = ({
  url,
  alt,
}: FeatureImageProps) => {
  return (
    <div>
      <img src={url} alt={alt} className="responsive"></img>
      <style jsx>
        {`
          .responsive {
            border-radius: 3px;
            width: 100%;
            height: auto;
          }
        `}
      </style>
    </div>
  );
};

export default FeatureImage;
