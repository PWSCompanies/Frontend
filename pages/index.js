import { Fragment } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

import { testReducerActions } from "../store/test-reducer";
import HomePage from "../components/eccormerce/HomePage";

const appTitle = "My project name"; // TODO - Update this
const appDescription = "This is the description about my project"; // TODO - Update this
const baseUrl = "https://my-url.com"; // TODO - Update this
const socialMediaImagePath = `${baseUrl}/images/my-image-name.png`; // TODO - Update this

const Home = () => {
  // const dispatch = useDispatch();
  // const testReducerState = useSelector(state => state.testReducer.testReducerState);

  // const testClickHandler = () => {
  //   dispatch(testReducerActions.setTestReducerState());
  // };

  return (
    <Fragment>
      <Head>
        <title>{appTitle}</title>
        <meta name="description" content={appDescription} />
        {/* TODO - Update keywords */}
        <meta
          name="keywords"
          content="these, are, some, keywords, about, my project"
        />

        {/* Facebook */}
        <meta property="og:title" content={appTitle} />
        <meta property="og:description" content={appDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={socialMediaImagePath} />

        {/* Twitter */}
        <meta name="twitter:title" content={appTitle} />
        {/* TODO <meta name='twitter:site' content='@my-site-twitter-handle' /> */}
        <meta name="twitter:description" content={appDescription} />
        <meta name="twitter:image" content={socialMediaImagePath} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HomePage />
    </Fragment>
  );
};

export default Home;
