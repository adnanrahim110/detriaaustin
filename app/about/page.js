import { AboutHero, AboutMe, WhereWordsGo } from "@/components/about";
import { BookReviews } from "@/components/book";
import { ContactSection } from "@/components/home";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutMe />
      <BookReviews />
      <WhereWordsGo />
      <ContactSection />
    </>
  );
};

export default AboutPage;
