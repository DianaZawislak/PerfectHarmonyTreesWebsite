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
    <div className="shadow-lg transform hover:scale-110 transition-all duration-200 ease-in-out flex flex-col items-center justify-center pb-16 pt-4 px-12">
      <div className="mb-6 overflow-hidden rounded-full border-4 border-gray-500" style={{ width: '150px', height: '150px', position: 'relative' }}>
        <Image src={imageUrl} alt="Card Image" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center justify-center max-w-md mx-auto">
        <h2 className="text-2xl text-gray-500 font-bold mb-2">{header}</h2>
        <p className="text-gray-500 text-md mb-4 text-center py-2">{description}</p>
        <button className="px-20 py-1 bg-lime-300 text-gray-500  hover:text-lime-300 hover:bg-gray-500 font-bold text-lg rounded-lg">
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
