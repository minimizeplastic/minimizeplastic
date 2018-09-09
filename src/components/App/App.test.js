import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import App from '.';

describe('<App />', () => {
  describe('with ReactDOM', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('with Enzyme', () => {
    it('shallow renders without crashing', () => {
      shallow(<App />);
    });
  });

  describe('with Snapshot Testing', () => {
    it('renders the same way', () => {
      const component = renderer.create(<App />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    });
  });
});
