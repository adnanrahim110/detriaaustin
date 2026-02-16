import { BookHero } from "@/components/book";

const AboutHero = () => {
  return (
    <BookHero
      badge="About Me"
      title={
        <>
          Rooted in stories,
          <br />
          Grown by words.
        </>
      }
      description="Where language becomes connection, and every word is chosen with purpose."
      breadcrumbLabel="About"
      imageSrc="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80"
      imageAlt="Open book with autumn leaves"
    />
  );
};

export default AboutHero;
