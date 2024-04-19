const Summary = () => {
  return (
    <>
      <p className="text-4xl mb-8">About me</p>
      <article
        className="desktop:text-xl mobile:text-md"
        itemScope
        itemType="https://schema.org/author"
      >
        <p className="mb-5">
          I&apos;m a frontend developer with a bachelors degree in Mechatronics
          Engineering. So far I&apos;ve been building different personal
          projects and working with an amazing team at Gope, where we are
          building an application for connecting people and fun activities in
          LATAM using the latest technologies.
        </p>
      </article>
    </>
  );
};

export default Summary;
