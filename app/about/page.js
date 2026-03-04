import { AboutMe, WhereWordsGo } from "@/components/about";
import { BookHero, BookReviews } from "@/components/book";
import { ContactSection } from "@/components/home";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <>
      <BookHero
        badge="About Me"
        title={
          <>
            The Woman
            <br />
            Behind the Words
          </>
        }
        description="Detria Austin learned how to serve by watching her mother feed strangers and open their home to families in need."
        breadcrumbLabel="About"
        imageSrc="/imgs/author-h.png"
        imageAlt="Open book with autumn leaves"
      />
      <AboutMe />
      <BookReviews />
      <WhereWordsGo />
      <ContactSection />
    </>
  );
};

export default AboutPage;
