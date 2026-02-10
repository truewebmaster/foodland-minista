import './CategoryCard.scss'
import clsx from 'clsx'
import {Image} from "minista";

export default (props) => {
  const {
    className,
    title,
    imgSrc,
    link,
    color,
  } = props

  return (

     <a href={link}
       className={clsx('category-card', className)}
     >
       <div
         className="category-card__body"
         style={{ '--categoryCardColor': color }}
       >
         <Image className="category-card__image" src={imgSrc} />
         <h3 className="category-card__title h6">{title}</h3>
       </div>
     </a>

  )
}