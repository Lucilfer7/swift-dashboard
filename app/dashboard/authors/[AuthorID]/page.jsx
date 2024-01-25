import { getAuthorData } from "@/app/getData";
import Link from "next/link";

const AuthorDetailPage = async ({ params }) => {
  const { Author, Works } = await getAuthorData(params.AuthorID);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">
          {Author.Name} {Author.LastName}
        </h1>
        <div className="pt-2 text-justify">
          {Author.Description.split("\n").map((paragraph, index) => (
            <p key={index} className="font-extralight pb-1">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1>
          Works by {Author.Name} {Author.LastName}
        </h1>
        <ul>
          {Works &&
            Works.map((work) => (
              <li className="text-sm hover:underline" key={work.WorkID}>
                <Link href={`/dashboard/works/${work.WorkID}`}>{work.WorkTitle}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorDetailPage;
