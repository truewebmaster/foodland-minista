import './RecipeCard.scss'
import clsx from 'clsx'
import {Image} from "minista";
import Tags from "@/components/Tags/Tags.jsx";
import Icon from "@/components/Icon/index.js";

export default (props) => {
  const {
    className,
    title,
    tags,
    imgSrc,
    isLiked,
  } = props

  return (
    <article
      className={clsx('recipe-card', className)}
    >
      <a className="recipe-card__link"
         href="/"
      >
        <Image className="recipe-card__image" src={imgSrc} />
        <h3 className="recipe-card__title h4">{title}</h3>
        <Tags
          className="recipe-card__tags"
          items={tags}
        />
      </a>
      <button
        type="button"
        className={clsx (
          "recipe-card",
          isLiked && 'is-liked'
        )}
        aria-label={isLiked ? 'Dislike' : 'Like'}
      >
      <Icon name="heart" hasFill />
      </button>
    </article>
  )
}