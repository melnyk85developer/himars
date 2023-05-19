import React from 'react';
import { render, screen } from '@testing-library/react';
import { create } from "react-test-renderer";
import ProfileStatus from 'pages/Profile/Info/ProfileStatus';
// import App from './components/App/App';

describe("ProfileStatus component", () => {

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="Hello HiMars" />);
    const root = component.root;
    let span = root.findAllByType("span");
    expect(span).not.toBeNull();
  });

  test("input should be displayed editNode instead of span", () => {
    const component = create(<ProfileStatus status="Hello HiMars" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("Hello HiMars")
  });

  // test("status from props should be in the state", () => {
  //   const component = create(<ProfileStatus status="Hello HiMars" />);
  //   const root = component.root;
  //   expect(root.state.status).toBe("HiMars.in");
  // });

  // test("after creation <input> shouldn't be displayed", () => {
  //   const component = create(<ProfileStatus status="Hello HiMars" />);
  //   const root = component.root;
  //   expect( () => {
  //       let input = root.findAllByType("input");
  //   }).toThrow();
  // });

  // test("after creation <span> should contains correct status", () => {
  //   const component = create(<ProfileStatus status="Hello HiMars" />);
  //   const root = component.root;
  //   let span = root.findAllByType("span");
  //   expect(span.children[0]).toBe("Hello HiMars");
  // });

});
