import { Metadata } from "next";
import NewJobForm from "./NewJobForm";

export const metadata: Metadata = {
  title: "Post a new job",
};
interface NewJobsPage {
  params: Promise<{ name?: string }>;
}
const NewJobsPage = ({}: NewJobsPage) => {
  return <NewJobForm />;
};

export default NewJobsPage;
