import Card from './Card';
import { cardsData } from '../data/data1';

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <Card key={index} imgSrc={card.imgSrc} title={card.title} link={card.link} />
      ))}
    </div>
  );
}
