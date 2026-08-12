const images = [
  { src: '/images/optimized/gallery-1', alt: 'Professional repairing a white vinyl fence' },
  { src: '/images/optimized/gallery-2', alt: 'Vinyl fence installation in progress' },
  { src: '/images/optimized/gallery-3', alt: 'Technician repairing chain link fence mesh' },
  { src: '/images/optimized/gallery-4', alt: 'Wood gate hardware being repaired' },
  { src: '/images/optimized/gallery-5', alt: 'Contractors installing new residential fence posts' },
  { src: '/images/optimized/gallery-6', alt: 'Professional aluminum fence installation' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-py bg-white">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-fence-100 text-fence-700">Our Work</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-charcoal-900 sm:text-4xl">
            Recent Fence Repair &amp; Installation Projects
          </h2>
          <p className="mt-4 text-charcoal-600">
            A look at real repairs and installs completed across Rochester, NY.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {images.map((img) => (
            <div key={img.alt} className="group overflow-hidden rounded-2xl">
              <img
                src={`${img.src}-640.webp`}
                srcSet={`${img.src}-640.webp 640w, ${img.src}-1200.webp 1200w`}
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw"
                alt={img.alt}
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
