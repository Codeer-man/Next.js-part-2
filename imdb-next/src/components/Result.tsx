import Card from "./Card";

interface Movie {
    id: number;
    title: string;
    // Add other properties as needed
  }
  
  interface ResultProps {
    results: Movie[];
  }
  
  export default function Result({ results }: ResultProps) {
    return (
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {results.map((result) => (
          <Card key={result.id} result={result}/>
        ))}
      </div>
    );
  }