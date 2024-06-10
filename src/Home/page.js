import Card from '../../components/Card';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Home Page</h1>
      <Card title="Example Card" description="This is an example card." />
    </div>
  );
}
