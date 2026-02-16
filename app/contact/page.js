import { BookHero } from "@/components/book"
import { ContactSection } from "@/components/home"

export const metadata = {
  title: ""
}

const ContactPage = () => {
  return (
    <>
      <BookHero
        badge="Contact Now"
        title="Let's Connect and Create Together."
        description="Whether you have a question, want to collaborate, or just want to say hi, I'm here to connect. Reach out and let's start a conversation."
        breadcrumbLabel="Contact"
        imageSrc="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Open book and notebook on a desk"
      />
      <ContactSection />
    </>
  )
}

export default ContactPage
