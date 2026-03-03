import Section from '@/layouts/Section'
import Grid from "@/components/Grid/index.js";
import RecipeCard from "@/components/RecipeCard/index.js";
import items from "./data.json";


export default () => {
  return (
    <Section
      title="Try this delicious recipe to make your day"
      titleId="daily-recipy"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
    >
      <Grid columns={4}>
        {items.map((item) => {
          const { type, ...rest } = item

          return (
            <RecipeCard
              mode="transparent"
              titleExtraClassName="h6"
              {...rest}
              key={item.title}
            />
          )
        })}
      </Grid>
    </Section>
  )
}

