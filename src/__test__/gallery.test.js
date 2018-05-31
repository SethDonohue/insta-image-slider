import React from 'react';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gallery from '../gallery/gallery';

configure({ adapter: new Adapter() });

// describe('Gallery testing', () => {
//   test('Simple test for initial state of gallery', () => {
//     const mountedGallery = mount(<Gallery photos={[]} />);
//     console.log(mountedGallery);
//     expect(mountedGallery.props('photos')).toEqual([]);
//   });
// });

describe('Gallery Component:', function () {
  it('should render without throwing an error', function () {
    expect(shallow(<Gallery photos={[]}/>).contains(<div className="photo-gallery"></div>)).toBe(true);
  });

  it('should be selectable by class "photo-gallery"', function () {
    expect(shallow(<Gallery photos={[]}/>).is('.photo-gallery')).toBe(true);
  });

  it('should mount in a full DOM', function () {
    expect(mount(<Gallery photos={[]} />).find('.photo-gallery').length).toBe(1);
  });

  it('should render to static HTML', function () {
    expect(render(<Gallery photos={[]} />).text()).toEqual('');
  });
});