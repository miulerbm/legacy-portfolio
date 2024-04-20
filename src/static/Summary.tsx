const Summary = () => {
  return (
    <div className="flex flex-col">
      <p className="text-4xl mb-8 font-bold	">About me</p>
      <article
        className="desktop:text-xl mobile:text-md"
        itemScope
        itemType="https://schema.org/author"
      >
        <p className="mb-5">
          I&apos;m a frontend developer with a bachelors degree in Mechatronics
          Engineering. So far I&apos;ve been working with an amazing team at
          Gope, a peruvian startup where we are building an application for
          connecting people and different recreation activities such as tours,
          adventures, extreme sports, etc. Stay tuned, more comming soon!
        </p>
        Something I like to remind:
        <p className="mb-5 italic">
          &quot;We who cut mere stones must always be envisioning
          cathedrals&quot;
        </p>
      </article>
    </div>
  );
};

export default Summary;
