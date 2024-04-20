import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "React",
        500,
        "React Native",
        500,
        "Next.js",
        500,
        "TypeScript",
        500,
        "Tailwind CSS",
        500,
        "React",
        500,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        marginLeft: "5px",
        fontSize: "1em",
        textAlign: "left",
        color: "#84ffff",
        fontWeight: "bold",
        display: "inline-block",
        width: "40%",
      }}
      repeat={1}
    />
  );
};

export default Typing;
