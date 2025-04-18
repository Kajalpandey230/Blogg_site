import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Explore...</h1>
      <p className='text-md text-gray-500'>"Welcome to our Explore page,
        where cinematic journeys await! Dive into a world of diverse genres,
        timeless classics, and the latest blockbusters.
        Whether you're a fan of heart-pounding action, gripping dramas,
        or laugh-out-loud comedies, our curated selection of films promises something for everyone.
        Discover hidden gems, explore directors' masterpieces,
        and stay updated with our featured collections that showcase the best in cinema.
        From thought-provoking documentaries to spine-tingling thrillers,
        embark on a visual adventure with our handpicked recommendations and insightful reviews.
        Let the magic of movies unfold as you navigate through a universe of storytelling
        excellence right here on our Explore page."</p>
      <CallToAction />
    </div>
  )
}