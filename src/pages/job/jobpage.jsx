import Navigation from "@/components/shared/Navigation";
import { Briefcase } from "lucide-react";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function JobPage() {
  const params = useParams();

  const job = {
    title: "Intern - Software Engineer",
    description:
      "we are looking fr a highly talented interns to our company. the key responsibilities are develop websites",
    type: "full time",
    location: "remote",
    questions: ["QUESTION 1", "QUESTION 2", "QUESTION 3", "QUESTION 4"],
  };

  const handlSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div>
      <div>
        <h2>{job.title}</h2>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{job.type}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 py-4">
        <p>{job.description}</p>
      </div>
      <Separator />
      <form className="py-8 flex flex-col gap-y-8" onSubmit={handlSubmit}>
        <div className="flex flex-col gap-y-4">
          <Label>Full name</Label>
          <Input required />
        </div>
        <div className="flex flex-col gap-y-4">
          <Label>QUESTION 1</Label>
          <Textarea required />
        </div>
        <div className="flex flex-col gap-y-4">
          <Label>QUESTION 2</Label>
          <Textarea required />
        </div>
        <div className="flex flex-col gap-y-4">
          <Label>QUESTION 3</Label>
          <Textarea required />
        </div>
        <Button type="submit" className="bg-card text-card-foreground w-fit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default JobPage;
