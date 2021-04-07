import * as nextImage from 'next/image';
import { muiTheme } from 'storybook-addon-material-ui'
import theme from "../src/components/theme/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  muiTheme([theme])
];

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});
