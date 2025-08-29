import {
  Container,
  Wrapper,
  Breadcrumb,
  RightContent,
  TextSection,
  MapWrapper,
  MapContentBox,
  InfoItem,
  SubmitButton,
  LeftContent,
  Span,
} from "./Contacts.styles"
import Typography from "../../components/Typography"
import Map from "./components/Map"
import { Link } from "react-router-dom"

const ContactsPage = () => {
  return (
    <div className="container">
      <Container>
        <Wrapper>
          <LeftContent>
            <Breadcrumb>
              <Link to="/" style={{ textDecoration: "none", color: "#454545" }}>
                Главная
              </Link>
              <span className="separator"> &gt; </span>
              <Span>Контакты</Span>
            </Breadcrumb>
            <Typography type="h1" styles={{ margin: "0" }} text="Контакты" />
          </LeftContent>
          <RightContent>
            <TextSection>
              <Typography type="h2" styles={{ margin: "0" }} text="8 (800) 890-46-56" />
              <Typography
                type="text"
                text={`Пн-Пт: 10:00 до 19:00\nСб-Вс: заказ через корзину\nТелефоны`}
                styles={{ whiteSpace: "pre-line", color: "#333" }}
              />
            </TextSection>
          </RightContent>
        </Wrapper>
        <MapWrapper>
          <Map />
          <MapContentBox>
            <InfoItem>
              <Typography type="text2" text="Адрес магазина" styles={{ fontWeight: 600 }} />
              <Typography type="text" text="г. Москва д.100 с2" />
            </InfoItem>
            <InfoItem>
              <Typography type="text2" text="Почта" styles={{ fontWeight: 600 }} />
              <Typography type="text" text="NORNLIGHT@mail.ru" />
            </InfoItem>
            <InfoItem>
              <Typography type="text2" text="Телефон" styles={{ fontWeight: 600 }} />
              <Typography type="text" text="8 (800) 890-46-56" />
            </InfoItem>
            <SubmitButton>Оставить заявку</SubmitButton>
          </MapContentBox>
        </MapWrapper>
      </Container>
    </div>
  )
}

export default ContactsPage
