const images = [
  { src: 'https://ihandymanservices.com/wp-content/uploads/2024/03/outdoor-repair-handyman-services.jpg', alt: 'Professional repairing a white vinyl fence' },
  { src: 'https://u.localbrandmanager.com/image/5q/5q41w07l/fence_installation__preview.webp', alt: 'Vinyl fence installation in progress' },
  { src: 'https://www.purplefencingcompany.com/wp-content/uploads/2022/02/iStock-1280382792.jpg', alt: 'Technician repairing chain link fence mesh' },
  { src: 'https://www.mrhandymannewtown.com/public/images/page/image/1738694526pic-111.webp', alt: 'Wood gate hardware being repaired' },
  { src: 'https://framerusercontent.com/images/1SXc1sgzjUhFi2QpJvBMX1haswo.jpg', alt: 'Contractors installing new residential fence posts' },
  { src: 'https://cdn.shopify.com/s/files/1/0859/9837/1152/files/cloture-aluminium-installation-professionnelle-faut-savoir_1.jpg?v=1735292035', alt: 'Professional aluminum fence installation' },
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
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
