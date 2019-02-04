import React from "react";
import { storiesOf } from "@storybook/react";
import NewsList from ".";
import { Provider as ReduxProvider} from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "../../redux";
import thunkMiddleware from "redux-thunk";

const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));
function Provider({ story }) {
    return (
      <ReduxProvider store={store}>
        {story}
      </ReduxProvider>
    );
  };

storiesOf("NewsList", module)
  .addDecorator(story => <Provider story={story()} />)
  .add("List of News", () => <NewsList news={[]} loading={false}/>);
