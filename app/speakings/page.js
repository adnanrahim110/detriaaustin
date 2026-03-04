import { BookHero } from "@/components/book"
import { ContactSection } from "@/components/home"
import { SpeakingCTA, SpeakingFormats, SpeakingTopics } from "@/components/speakings"

export const metadata = {
  title: "Speakings - Detria Austin Everson",
  description:
    "Explore Detria Austin Everson’s speaking topics and formats. Book keynotes, workshops, panels, and fireside conversations focused on service-centered leadership and community impact.",
}

const SpeakingsPage = () => {
  return (
    <>
      <BookHero
        badge="Speakings"
        title={
          <>
            Motivational Talks Rooted in
            <br />
            Service, Purpose, and Real Leadership
          </>
        }
        description="Detria Austin Everson brings the message of Serving Is a Superpower to organizations, schools, and communities through motivational keynotes and practical workshops that help people lead with integrity, serve consistently, and create lasting impact."
        breadcrumbLabel="Speakings"
        imageSrc="/imgs/speaking-h.png"
        imageAlt="Speaker addressing an audience"
      />
      <SpeakingTopics />
      <SpeakingFormats />
      <SpeakingCTA />
      <ContactSection />
    </>
  )
}

export default SpeakingsPage
