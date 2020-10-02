import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BottomBar from "../BottomBar/BottomBar";
import NavigationBar from "../NavigationBar/NavigationBar";
import Title from "../Title/Title";
import Sound from "../Sound/Sound";
import SoundDec from "../SoundDec/SoundDec";

function Router() {
	return (
    <main>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/title" />} />
        <Route exact path="/title" component={Title} />
        {/* <Route exact path="/encrypt" component={Encrypt} /> */}
        {/* <Route exact path="/decrypt" component={Decrypt} /> */}
        {/* <Route exact path="/enigma" component={Enigma} /> */}
        <Route exact path="/sound" component={Sound} />
        <Route exact path="/sound-dec" component={SoundDec} />

        {/* <Route exact path="/*" component={Title} /> */}
      </Switch>
      <BottomBar></BottomBar>
    </main>
  );
}

export default Router;