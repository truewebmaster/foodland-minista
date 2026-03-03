import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories/index.js'
import Recipes from "@/sections/Recipes/index.js";
import Banner from '@/sections/Banner/Banner/index.js'
import Instagram from "@/sections/Instagram/index.js";

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <Banner />
      <Instagram />
    </>
  )
}
