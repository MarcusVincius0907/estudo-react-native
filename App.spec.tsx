import React from "react"
import renderer from "react-test-renderer"
import { render, fireEvent } from './src/utils/test-utils';
import App from "./App"

/* describe("<App />", () => {
  it("has 2 child", () => {
    const tree: any = renderer.create(<App />).toJSON()
    expect(tree?.children?.length).toBe(2)
  })

  it("matches last snapshot", async () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
}) */

describe('index', () => {
  it('should check render', () => {
    const { getByText } = render(<App></App>)
    expect(getByText('hello')).toBeTruthy();
  })
})
