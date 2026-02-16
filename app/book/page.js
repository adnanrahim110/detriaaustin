import {
  BookDetails,
  BookHero,
  BookReviews,
} from "@/components/book"
import { ContactSection, Newsletter } from "@/components/home"

export const metadata = {
  title: "Book - Detria Austin Everson",
  description:
    "Explore Detria Austin Everson's latest book, its themes, and impact. Discover insights, reviews, and how to get your copy of this inspiring work.",
}

const BookPage = () => {
  return (
    <>
      <BookHero />
      <BookDetails />
      <Newsletter />
      <BookReviews />
      <ContactSection />
    </>
  )
}

export default BookPage
