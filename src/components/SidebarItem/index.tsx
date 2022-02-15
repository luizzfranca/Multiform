import { Area, Container, Description, Info, Point, Title } from "./styles";
import { Link } from "react-router-dom";



type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

export function SidebarItem({ title, description, path, icon, active}:Props) {
  return(
    <Container>
      <Link to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <Area active={active}></Area>
        <Point active={active}></Point>
      </Link>
    </Container>
  );
}