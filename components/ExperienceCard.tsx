import { TExperience } from "../types";

interface ExperienceCardProps {
  experience: TExperience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const { date, title, company, description, tags } = experience;
  return (
    <div className="grid max-w-[1100px] grid-cols-1 rounded-lg border-t border-t-customBlue p-8 shadow-sm transition-all hover:border-t-secondary-light/15 hover:bg-[#294B67] md:grid-cols-6 md:gap-10">
      <p className="text-sm text-secondary-dark md:col-span-2">{date}</p>
      <div className="flex flex-col gap-4 md:col-span-4">
        <p className="font-medium">
          {title} <span className="text-primary"> @ {company} </span>
        </p>
        <p className="max-w-[650px] text-secondary">{description}</p>
        <div className="flex flex-wrap items-center gap-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="mr-2 rounded-3xl border border-primary px-3 py-1 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
