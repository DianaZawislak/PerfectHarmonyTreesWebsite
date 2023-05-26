import React from 'react';

interface CardProps {
  imageSrc: string;
  header: string;
  description: string;
}

const HorizontalCard: React.FC<CardProps> = ({ imageSrc, header, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h3 className="card-header">{header}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;

const HorizontalCard: React.FC = () => {
    return (
      <div>
        <h1>My App</h1>
        <HorizontalCard
          imageSrc="/path/to/image.jpg"
          header="Card Header"
          description="Card description goes here."
        />
      </div>
    );
  };