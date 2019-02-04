import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import News from './News';

export const news = {
    id: "sport/live/2019/feb/03/australia-v-sri-lanka-second-test-day-three-live",
    type: "liveblog",
    sectionId: "sport",
    sectionName: "Sport",
    webPublicationDate: "2019-02-02T23:19:57Z",
    webTitle: "Australia v Sri Lanka: second Test, day three – live!",
    webUrl:
      "https://www.theguardian.com/sport/live/2019/feb/03/australia-v-sri-lanka-second-test-day-three-live",
    apiUrl:
      "https://content.guardianapis.com/sport/live/2019/feb/03/australia-v-sri-lanka-second-test-day-three-live",
    isHosted: false,
    pillarId: "pillar/sport",
    pillarName: "Sport"
  };
  
export const actions = {
  onClickNews: action('onClickNews'),
};

storiesOf('News', module)
  .add('deafult', () => <News news={{...news}} />);