import Section from '@/layouts/Section'
import Grid from "@/components/Grid/index.js";
import CategoryCard from "@/components/CategoryCard/index.js";
import categories from './data.json';


export default () => {

  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <Grid
        columns={6}
      >
        {categories.map((category) => (
          <CategoryCard {...category} key={category.title} />
        ))}
      </Grid>
    </Section>
  )
}

