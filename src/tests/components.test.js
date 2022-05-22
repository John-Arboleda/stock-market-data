import renderer from 'react-test-renderer';
import MockAppComponent from './__mocks__/App';
import '@testing-library/jest-dom';


describe('Render App', () => {
  test('Assert snapshot', () => {
    const appSnap = renderer.create(
      <MockAppComponent />,
    ).toJSON();
    expect(appSnap).toMatchSnapshot();
  });
});
