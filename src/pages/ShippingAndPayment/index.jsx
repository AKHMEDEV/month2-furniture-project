import {
  Container,
  Wrapper,
  LeftHeader,
  Breadcrumb,
  Span,
  Title,
  RightContent,
  TextSection,
  Heading,
  Paragraph,
  MapWrapper,
} from "./ShipingAndPayment.styles"
import Map from "./components/Map"
import { Link } from "react-router-dom"

const PaymentPage = () => {
  return (
    <div className="container">
      <Container>
        <Wrapper>
          <LeftHeader>
            <Breadcrumb>
              <Link to="/" style={{ textDecoration: "none", color: "#454545" }}>
                Главная
              </Link>
              &nbsp; &gt; &nbsp;
              <Span>Доставка и оплата</Span>
            </Breadcrumb>
            <Title>
              Доставка <br /> и оплата
            </Title>
          </LeftHeader>
          <RightContent>
            <TextSection>
              <Heading>Доставка</Heading>
              <Paragraph>
                Мы осуществляем доставку со склада по Москве и Московской <br />
                области собственной курьерской службой. Транспортными <br />
                компаниями нашу продукцию мы доставляем по всей территории <br />
                РФ, а также по всем странам СНГ.
                <a href="#">Сроки доставки: 4–6 недель</a>
              </Paragraph>
            </TextSection>
            <TextSection>
              <Heading>Курьерская доставка</Heading>
              <Paragraph>
                БЕСПЛАТНО доставим в пределах МКАД любой заказ от
                <strong>
                  {" "}
                  5 000 Р. <br />
                </strong>
                Заказы свыше <strong>30 000 Р</strong> имеют бесплатную доставку,
                <br />
                включая 15 км от МКАД.
              </Paragraph>
            </TextSection>
            <TextSection>
              <Heading>Самовывоз</Heading>
              <Paragraph>
                Любой заказ можно забрать самостоятельно по адресу: <br />
                г. Москва, Дмитровское шоссе д.100с2
              </Paragraph>
            </TextSection>
          </RightContent>
        </Wrapper>
        <MapWrapper>
          <Map />
        </MapWrapper>
      </Container>
    </div>
  )
}

export default PaymentPage
