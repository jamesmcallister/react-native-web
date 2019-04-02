import styled from "@emotion/native";
// @ts-ignore
import { Link } from "./factories/Routing";
// @ts-ignore
import { width } from "./factories/Dimentions";

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${width};
`;

export const Header = styled.View`
  width: ${width};
  flex-flow: row;
  background-color: gray;
  padding: 10px;
`;

export const LinkItem = styled(Link)`
  padding: 10px;
  flex-flow: row;
`;

export const PageWrapper = styled.View`
  width: ${width};
  padding: 10px;
`;

export const PageTitle = styled.Text`
  font-size: 20px;
  text-align: center;
`;
