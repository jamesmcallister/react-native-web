import React, { Component } from "react";
import { Text, View } from "react-native";
// @ts-ignore
import { Router, Switch, Route } from "./factories/Routing";
import * as S from "./AppStyles";

const Home = () => (
  <S.PageWrapper>
    <S.PageTitle>Home</S.PageTitle>
  </S.PageWrapper>
);

const About = () => (
  <S.PageWrapper>
    <S.PageTitle>About</S.PageTitle>
  </S.PageWrapper>
);

const FourOhFour = () => (
  <S.PageWrapper>
    <S.PageTitle>404</S.PageTitle>
  </S.PageWrapper>
);

export class App extends Component {
  render() {
    return (
      <S.Container>
        <Router>
          <View>
            <S.Header>
              <S.LinkItem to="/">
                <Text>Home</Text>
              </S.LinkItem>
              <S.LinkItem to="/about">
                <Text>About</Text>
              </S.LinkItem>
            </S.Header>
            <Switch hideNavBar={true}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="*" component={FourOhFour} />
            </Switch>
          </View>
        </Router>
      </S.Container>
    );
  }
}
