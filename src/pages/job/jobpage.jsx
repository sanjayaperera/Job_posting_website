import Navigation from "@/components/shared/Navigation";
import { useParams } from "react-router-dom";

function JobPage() {
  const params = useParams();

  if (params.id === "abc") {
    return (
      <main className="p-4">
        <h1 className="text-2xl">Job Page</h1>
        <p> {params.id}</p>
      </main>
    );
  }
  return (
    <main className="p-4">
      <h1 className="text-2xl">Job Page 123</h1>
      <p> {params.id}</p>
    </main>
  );
}

export default JobPage;
