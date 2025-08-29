import React from 'react'
import { FavoriteWrapper } from './Favorite.styles'
import { H1 } from '../../components/Typography/Typography.styles'
import { Card } from '../Home/components'

const FavoritePage = () => {
    return (
        <div className="container">
            <FavoriteWrapper>
                <div>
                    <H1>Избранные товары</H1>
                </div>
                <div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </FavoriteWrapper>
        </div>
    )
}

export default FavoritePage