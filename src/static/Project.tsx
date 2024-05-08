import { Monitor, Smartphone } from "lucide-react";
import Tag from "./Tag";

function Project({
  headline,
  image,
  text,
  tags,
  link,
  indev,
  desktop,
  mobile,
}: {
  headline: string;
  image: string;
  text: string;
  tags: string[];
  link: string;
  indev?: boolean;
  desktop: boolean;
  mobile: boolean;
}) {
  return (
    <a href={link} aria-label={text} target="_blank">
      <div className="flex flex-col transition-all hover:scale-105 scale-100 bg-opacity-20 bg-black rounded-lg max-h-max max-w-96 m-3 text-white">
        {(mobile || desktop) && (
          <div className="absolute top-4 right-4 flex gap-1">
            {mobile && <Smartphone />}
            {desktop && <Monitor />}
          </div>
        )}

        <img
          className="w-fit h-fit rounded-t-lg max-h-64"
          alt={text}
          src={image}
        />
        <div className="p-4">
          <div className="text-xl font-medium mb-4 flex gap-2">
            {headline}
            {indev && <div className="text-green-500">&bull;</div>}
          </div>
          <p>{text}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {tags.map((item, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <Tag title={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

export default Project;
