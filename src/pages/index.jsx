import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories/index.js'
import Recipes from "@/sections/Recipes/index.js";

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
    </>
  )
}
