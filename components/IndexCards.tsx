import Image from "next/image";

interface CardProps {
  imageUrl: string;
  header: string;
  description: string;
  ctaText: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, header, description, ctaText }) => {
  return (
    <div className="flex flex-col items-center justify-center  mb-4 pt-12">
      <div className="mb-4">
        <Image src={imageUrl} width={200} height={200} alt="Card Image" />
      </div>
      <h2 className="text-xl font-bold mb-2">{header}</h2>
      <p className="text-gray-600 text-xl mb-4">{description}</p>
      <button className="px-4 py-2 bg-lime-900 text-white rounded-lg">
        {ctaText}
      </button>
    </div>
  );
};

const IndexCards: React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      <Card
        imageUrl="https://cdn.discordapp.com/attachments/1095866309792772239/1109325594837127188/dianadetroit_logo_of_firehose_pointing_to_the_right_bottom_corn_033a52bc-907c-4bec-a6fc-bde8a26852b8.png"
        header="Card 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Action 1"
      />
      <Card
        imageUrl="https://cdn.discordapp.com/attachments/1095866309792772239/1109325594837127188/dianadetroit_logo_of_firehose_pointing_to_the_right_bottom_corn_033a52bc-907c-4bec-a6fc-bde8a26852b8.png"
        header="Card 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Action 2"
      />
      <Card
        imageUrl="https://cdn.discordapp.com/attachments/1095866309792772239/1109325594837127188/dianadetroit_logo_of_firehose_pointing_to_the_right_bottom_corn_033a52bc-907c-4bec-a6fc-bde8a26852b8.png"
        header="Card 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Action 3"
      />
    </div>
  );
};

export default IndexCards;
