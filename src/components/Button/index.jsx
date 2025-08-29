import React from 'react'
import {
    NormalButton,
    SwiperLightButton,
    SwiperDarkButton,
    BasketLightButton,
    BasketDarkButton,
    CatalogLightButton,
    CatalogDarkButton
} from './Button.styles'
import CatalogSvg from '../../assets/images/Catalog'
import { useNavigate } from 'react-router-dom'

const components = {
    button: NormalButton,
    swiperLightButton: SwiperLightButton,
    swiperDarkButton: SwiperDarkButton,
    basketLightButton: BasketLightButton,
    basketDarkButton: BasketDarkButton,
    catalogLightButton: CatalogLightButton,
    catalogDarkButton: CatalogDarkButton
}

const Button = ({ type = 'button', text, children, styles }) => {
    const navigate = useNavigate()
    const Component = components[type]
    if (!Component) return null
    const handleClick = () => {
        if (type === 'catalogDarkButton' || type === 'catalogLightButton') {
            navigate('/catalog')
        }
    }
    console.log(type, type === 'catalogDarkButton' || type === 'catalogLightButton');

    return (
        <Component style={styles} onClick={handleClick}>
            {type === 'catalogDarkButton' || type === 'catalogLightButton' ? (<CatalogSvg />) : null}
            {text || children}
        </Component>
    )
}
export default Button
