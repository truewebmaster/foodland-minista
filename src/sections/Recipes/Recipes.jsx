import Section from '@/layouts/Section'
import Grid from "@/components/Grid/index.js";
import RecipeBanner from "@/components/RecipeBanner/index.js";
import RecipeCard from "@/components/RecipeCard/index.js";
import items from "./data.json";


export default () => {
  return (
    <Section
      title="Simple and tasty recipes"
      titleId="Move File…"
      isHeaderVertical
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
    >
      <Grid
        columns={3}
      >
        {items.map((item) => {
          const { type, ...rest } = item

          if (type === 'banner') {
            return <RecipeBanner {...rest} key={item.title} />
          }
          return <RecipeCard {...rest} key={item.title} />
        })}
      </Grid>
    </Section>
  )
}

