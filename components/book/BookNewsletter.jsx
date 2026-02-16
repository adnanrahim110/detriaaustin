import Button from "../ui/Button";

const BookNewsletter = () => {
  return (
    <section className="bg-white">
      <div className="container pb-16 lg:pb-24">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"
            alt="Open book on a desk"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/45 to-black/70" />

          <div className="relative px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl">
                Words for Your Inbox.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Occasional notes on service, leadership, and what’s unfolding
                behind the scenes. No noise—just a soft landing space.
              </p>
            </div>

            <form className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-end">
              <label className="flex-1 text-sm text-white/80">
                E-mail Address
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  className="mt-2 w-full border-b border-white/50 bg-transparent pb-3 text-base text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                  autoComplete="email"
                />
              </label>
              <Button
                type="submit"
                size="sm"
                className="gap-3 rounded-full bg-white px-6 py-3 text-sm text-primary-800 shadow-lg before:bg-white/80 hover:text-primary-950"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNewsletter;

