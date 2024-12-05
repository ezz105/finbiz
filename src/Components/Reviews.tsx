function Reviews() {

  let textOfReviwes = `(4.9 of 5)`

  return (
        <figure className='flex flex-col items-center' >
          <img src=" /reviews.svg" />
          <b className='text-sm dark:text-dark-paragraphText text-light-paragraphText font-bold mt-2 mb-6  '>2,200+ reviews  {textOfReviwes}</b>
        </figure>
    )
}

export default Reviews