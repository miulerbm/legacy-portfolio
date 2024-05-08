import { useGlobalState } from "@/contexts/GlobalStateContext";

function LinkItem({ title, href }: { title: string; href: string }) {
  const { exitMenu } = useGlobalState();

  return (
    <a href={href} target="_blank" onClick={exitMenu}>
      {title}
    </a>
  );
}

export default LinkItem;
