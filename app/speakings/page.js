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
            Keynotes &
            <br />
            Workshops.
          </>
        }
        description="Invite Detria Austin Everson for practical, service-centered sessions that inspire leaders and strengthen communities."
        breadcrumbLabel="Speakings"
        imageSrc="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=80"
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
