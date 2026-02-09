import Section from '@/layouts/Section'
import Grid from "@/components/Grid/index.js";
import CategoryCard from "@/components/CategoryCard/index.js";


export default () => {
  const categories = [
    { title: 'Breakfast',
      link: '/cat-1',
      imgSrc: '/src/assets/images/categories/breakfast.png',
      gradient: 'linear-gradient(180deg, rgba(112, 130, 70, 0) 30%, rgba(112, 130, 70, 0.1) 100%);'
    },
    { title: 'Vegan',
      link: '/cat-2',
      imgSrc: '/src/assets/images/categories/vegan.png',
      gradient: 'linear-gradient(180deg, rgba(108, 198, 63, 0) 30%, rgba(108, 198, 63, 0.1) 100%);'
    },
    { title: 'Meat',
      link: '/cat-3',
      imgSrc: '/src/assets/images/categories/meat.png',
      gradient: 'linear-gradient(180deg, rgba(204, 38, 27, 0) 30%, rgba(204, 38, 27, 0.1) 100%);'
    },
    { title: 'Dessert',
      link: '/cat-4',
      imgSrc: '/src/assets/images/categories/dessert.png',
      gradient: 'linear-gradient(180deg, rgba(240, 158, 0, 0) 30%, rgba(240, 158, 0, 0.1) 100%);'
    },
    { title: 'Lunch',
      link: '/cat-5',
      imgSrc: '/src/assets/images/categories/lunch.png',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.05) 100%);'
    },
    { title: 'Chocolate',
      link: '/cat-6',
      imgSrc: '/src/assets/images/categories/chocolate.png',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.05) 100%);'
    },
  ]
  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <Grid
        columns={6}
      >
        {categories.map((category, index) => (
          <CategoryCard {...category} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

