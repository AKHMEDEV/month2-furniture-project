import { NormalButton } from '../../components/Button/Button.styles'
import { H1, Text2 } from '../../components/Typography/Typography.styles'
import { NotFoundWrapper } from './404.styles'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <NotFoundWrapper>
                <H1>404</H1>
                <Text2>Похоже, ничего не нашлось :(</Text2>
                <NavLink to={'/'}><NormalButton>На главную</NormalButton></NavLink>
        </NotFoundWrapper>
    )
}

export default NotFound