import './HeroCard.scss'
import clsx from 'clsx'
import Icon from "@/components/Icon/index.js";
import { Image } from "minista";
import AuthorCard from "@/components/AuthorCard/index.js";
import Button from "@/components/Button/index.js";
import Tags from "@/components/Tags/index.js";

export default (props) => {
  const {
    className,
    title,
    TitleTag = 'h2',
    category,
    description,
    tags = [],
    author,
    imgSrc,
  } = props

  return (
    <div className={clsx('hero-card', className)}>
      <div className="hero-card__body">
        <header className="hero-card__category">
          <Image className="hero-card__category-image" src={category.imgSrc} />
          <span>{category.label}</span>
        </header>
        <TitleTag className="hero-card__title">{title}</TitleTag>
        <div className="hero-card__description">
          <p>{description}</p>
        </div>

        <Tags
          className="hero-card__tags"
          type="rounded"
          items={tags}
        />

        <footer className="hero-card__footer">
          <AuthorCard className="hero-card__author" {...author} />
          <Button className="" href="/">
            <span>View Recipes</span>
            <Icon name="play" hasFill />
          </Button>
        </footer>
        <img
          className="hero-card__badge"
          src="/images/badge.svg"
          alt="HANDPICKED RECIPES"
          width={150}
          height={150}
          loading="lazy"
        />
      </div>
      <Image
        className="hero-card__image"
        src={imgSrc}
        width={668}
        height={640}
      />
    </div>
  )
}