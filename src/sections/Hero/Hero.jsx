import './Hero.scss'
import HeroCard from "@/components/HeroCard/index.js";

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__slider swiper"
           data-js-slider={JSON.stringify({
             spaceBetween: 40,
             slidesPerView: 1.0625,
             centeredSlides: true,
           })}
      >
        <ul className="hero__slider-list swiper-wrapper">
          <li className="hero__slider-item swiper-slide">
            <HeroCard
              category={{
                imgSrc: '/src/assets/images/scroll.png',
                label: 'Hot Recipes'
              }}
              title = "Spicy delicious chicken wings"
              titleTag = "h1"
              description = "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
              tags ={[
                {
                  iconName: 'clock',
                  label: '30 Minutes'
                },
                {
                  iconName: 'fork',
                  label: 'Chicken'
                },
              ]}
              author={{
                imgSrc: '/src/assets/images/man.jpg',
                name: 'John Smith',
                date: {
                  dateTime: '2022-03-15',
                  lable: '15 March 2022'
                }
              }}
              imgSrc="/src/assets/images/chicken.jpg"
            />
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur ducimus omnis praesentium repellendus. Asperiores, dolor dolore. A ab asperiores beatae cupiditate dolor, dolores exercitationem explicabo hic iste nulla officiis optio placeat quaerat quas saepe. Aliquid architecto assumenda commodi culpa deleniti dolorem ea, eius itaque, maiores, odio quis repellendus voluptas! Cumque debitis dignissimos eveniet illum in inventore minus perferendis quos similique vero? At aut consequatur dicta dolore dolorem earum esse ex facilis iste laboriosam maxime mollitia non, odit omnis optio pariatur perspiciatis placeat quae quas quasi quis sequi, similique sunt tenetur ullam vitae voluptatem! Qui quidem quod vel! Quia, repellendus.</div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur ducimus omnis praesentium repellendus. Asperiores, dolor dolore. A ab asperiores beatae cupiditate dolor, dolores exercitationem explicabo hic iste nulla officiis optio placeat quaerat quas saepe. Aliquid architecto assumenda commodi culpa deleniti dolorem ea, eius itaque, maiores, odio quis repellendus voluptas! Cumque debitis dignissimos eveniet illum in inventore minus perferendis quos similique vero? At aut consequatur dicta dolore dolorem earum esse ex facilis iste laboriosam maxime mollitia non, odit omnis optio pariatur perspiciatis placeat quae quas quasi quis sequi, similique sunt tenetur ullam vitae voluptatem! Qui quidem quod vel! Quia, repellendus.</div>
          </li>
        </ul>
      </div>
    </section>
  )
}
