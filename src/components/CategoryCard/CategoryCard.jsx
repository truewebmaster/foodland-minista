import './CategoryCard.scss'
import clsx from 'clsx'
import {Image} from "minista";

export default (props) => {
  const {
    className,
    title,
    imgSrc,
    link,
    gradient,
  } = props

  return (

     <a href={link}
       className={clsx('category-card', className)}
       style={{ backgroundImage: gradient }}
     >
       <Image className="category-card__image" src={imgSrc} />
       <h3 className="category-card__title h6">{title}</h3>
     </a>

  )
}