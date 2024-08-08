import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Independent nature</li>
                <li>Excellent hunters</li>
                <li>Flexible and agile bodies</li>
                <li>Keen senses, especially hearing and night vision</li>
                <li>Variety of vocalizations (meow, purr, hiss)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Cat Breeds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Siamese</li>
                <li>Persian</li>
                <li>Maine Coon</li>
                <li>Bengal</li>
                <li>British Shorthair</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Did You Know?</CardTitle>
            <CardDescription>Interesting facts about cats</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Cats spend 70% of their lives sleeping</li>
              <li>A group of cats is called a "clowder"</li>
              <li>Cats have over 20 vocalizations</li>
              <li>A cat's nose print is unique, like a human's fingerprint</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="Cute cat" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
