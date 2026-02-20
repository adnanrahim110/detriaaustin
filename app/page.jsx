import {
  BioTeaser,
  BookTeaser,
  ContactSection,
  Hero,
  Newsletter,
  Speakings,
  Testimonials,
} from "@/components/home";

export const metadata = {
  title: "Detria Austin Everson - Author, Speaker, and Servant Leader",
  description:
    "Discover the inspiring journey of Detria Austin Everson, an author, speaker, and servant leader. Explore her impactful work, upcoming book launch, and speaking engagements.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BioTeaser />
      <BookTeaser />
      <Testimonials />
      <Speakings />
      <Newsletter />
      <ContactSection />
    </>
  );
}
