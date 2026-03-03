import './RecipeCard.scss'
import clsx from 'clsx'
import {Image} from "minista";
import Tags from "@/components/Tags/Tags.jsx";
import Icon from "@/components/Icon/index.js";

export default (props) => {
  const {
    className,
    title,
    titleExtraClassName = 'h4',
    // '' - default | 'transparent'
    mode = '',
    tags = [],
    imgSrc,
    isLiked,
  } = props

  const likeButtonTitle = isLiked ? 'Dislike' : 'Like'

  return (
    <article
      className={clsx('recipe-card', className, mode && `recipe-card--${mode}`)}
    >
      <a className="recipe-card__link" href="/">
        <Image className="recipe-card__image" src={imgSrc} />
        <h3 className={clsx('recipe-card__title', titleExtraClassName)}>{title}</h3>
        <Tags className="recipe-card__tags" items={tags} />
      </a>
      <button
        type="button"
        className={clsx('recipe-card__button', isLiked && 'is-liked')}
        aria-label={likeButtonTitle}
        title={likeButtonTitle}
      >
        <Icon name="heart" hasFill />
      </button>
    </article>
  )
}