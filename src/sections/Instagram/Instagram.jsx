import './Instagram.scss'
import clsx from 'clsx'
import Section from "@/layouts/Section/index.js";
import Grid from "@/components/Grid/index.js";
import {Image} from "minista";
import Button from "@/components/Button/index.js";
import Icon from "@/components/Icon/index.js";

export default (props) => {
  const {className} = props

  return (
      <Section
        className="instagram"
        title="Check out @foodieland on Instagram"
        titleId="instagram-view"
        isHeaderVertical
        description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
      >
        <div className="instagram__body">
          <Grid columns={4}>
            {Array.from({length: 4}, (_, index)=> (
              <Image src='/src/assets/images/inst.png' key={index} />
            ) )}
          </Grid>

          <Button href="/">
            Visit Our Instagram
            <Icon hasFill name="instagram" />
          </Button>
        </div>
      </Section>

  )
}