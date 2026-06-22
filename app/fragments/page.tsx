import Link from "next/link"; 
import Image from "next/image";

const photos = [
  "/fragment-1.jpg",
  "/fragment-2.jpg",
  "/fragment-3.jpg",
  "/fragment-4.jpg",
  "/fragment-5.jpg",
  "/fragment-6.jpg",
  "/fragment-7.jpg",
  "/fragment-8.jpg",
  "/fragment-9.jpg",
  "/fragment-10.jpg",
  "/fragment-11.jpg",
  "/fragment-12.jpg",
  "/fragment-13.jpg",
  "/fragment-14.jpg",
  "/fragment-15.jpg",
  "/fragment-16.jpg",
  "/fragment-17.jpg",
  "/fragment-18.jpg",
  "/fragment-19.jpg",
  "/fragment-20.jpg",
  "/fragment-21.jpg",
  "/fragment-22.jpg",
  "/fragment-23.jpg",
  "/fragment-24.jpg",
  "/fragment-25.jpg",
  "/fragment-26.jpg",
  "/fragment-27.jpg",
  "/fragment-28.jpg",
  "/fragment-29.jpg",
  "/fragment-30.jpg",
  "/fragment-31.jpg",
  "/fragment-32.jpg",
  "/fragment-33.jpg",
  "/fragment-34.jpg",
  "/fragment-35.jpg",
  "/fragment-36.jpg",
  "/fragment-37.jpg",
  "/fragment-38.jpg",
  "/fragment-39.jpg",
  "/fragment-40.jpg",
  "/fragment-41.jpg",
  "/fragment-42.jpg",
  "/fragment-43.jpg",
  "/fragment-44.jpg",
  "/fragment-45.jpg",
  "/fragment-46.jpg",
  "/fragment-47.jpg",
  "/fragment-48.jpg",
  "/fragment-49.jpg",
  "/fragment-50.jpg",
  "/fragment-51.jpg",
  "/fragment-52.jpg",
  "/fragment-53.jpg",
  "/fragment-54.jpg",
  "/fragment-55.jpg",
  "/fragment-56.jpg",
  "/fragment-57.jpg",
];

export default function FragmentsPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#282828]">
      <section className="px-6 py-20 md:px-12">
        <div className="mb-16">
          <Link href="/" className="sans text-sm uppercase tracking-[0.28em] opacity-60 transition hover:opacity-100" >
                Back
            </Link>

          <h1 className="serif mt-10 text-6xl font-light tracking-[0.12em] md:text-[8rem]">
            FRAGMENTS
          </h1>

          <p className="sans mt-6 max-w-xl text-lg font-light leading-8 opacity-75">
            A visual archive of light, structure, movement, and passing things.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {photos.map((src) => (
            <div key={src} className="mb-4 break-inside-avoid overflow-hidden">
              <Image
                    src={src}
                    alt="Fragment photograph"
                    width={1200}
                    height={1800}
                    className="h-auto w-full transition duration-700 hover:scale-105"
                />
            </div>
          ))}
        </div>
         {/* Footer */}
        <footer className="py-20 text-center">
          <p className="sans text-xs uppercase tracking-[0.35em] text-black/35">
            Ongoing
          </p>
        </footer>
      </section>
    </main>
  );
}