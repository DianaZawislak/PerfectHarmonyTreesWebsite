import Image from "next/image";
import "../styles/globals.css";

interface CardProps {
  imageUrl: string;
  header: string;
  description: string;
  ctaText: string;
}
const Card: React.FC<CardProps> = ({ imageUrl, header, description, ctaText }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-24 pt-12 px-12">
      <div className="mb-12 overflow-hidden rounded-full" style={{ width: '200px', height: '200px', position: 'relative' }}>
        <Image src={imageUrl} alt="Card Image" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center justify-center max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-2">{header}</h2>
        <p className="text-gray-600 text-xl mb-4 text-center py-8">{description}</p>
        <button className="px-24 py-3 bg-lime-300 text-black  font-bold text-xl rounded-lg">
          {ctaText}
        </button>
      </div>
    </div>
  );
}


const IndexCards: React.FC = () => {
  return (
    <div className=" cards-container flex flex-row justify-center items-start pt-11">
      <Card
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1109571134258696332/346969329_1380028732785287_3315446062634646354_n.jpg"
        header="Card 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Action 1"
      />
      <Card
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1109570197595107388/297795126_5545125695549951_5158975895880136470_n.jpg"
        header="Card 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Action 2"
      />
      <Card
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1109565141370020022/168000900_4032798546782681_8241560606052318838_n.jpg"
        header="Card 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaText="Action 3"
      />
    </div>
  );
};
<style>

</style>

export default IndexCards;
