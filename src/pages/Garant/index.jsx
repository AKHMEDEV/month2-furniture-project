import React from 'react'
import { GarantAction, GarantFlexWrapper, GarantText, GarantWrapper, GoBackActionGarant, } from './Garant.Styles'
import { NavLink } from 'react-router-dom'
import { H1, H2, H3 } from '../../components/Typography/Typography.styles'

const GarantPage = () => {
  return (
    <div className="container">
      <GarantWrapper>
        <GoBackActionGarant>
          <p> <NavLink to='/' className='navlink'>Главная</NavLink> {`>`} Гарантии</p>
        </GoBackActionGarant>
        <GarantFlexWrapper>
          <GarantAction>
            <H1>Гарантии</H1>
          </GarantAction>

          <GarantText>
            <H3>Обмен и возврат по желанию покупателя</H3>
            <p>Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.
              Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
            </p>
            <ul>
              <li>
                <p>Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.</p>
              </li>
              <li>
                <p>Привезти товар к нам на склад или отправить его транспортной компанией.</p>
              </li>
              <li>
                <p>После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.</p>
              </li>
            </ul>
            <p>Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком. Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.</p>
          </GarantText>
        </GarantFlexWrapper>
      </GarantWrapper>
    </div>
  )
}

export default GarantPage