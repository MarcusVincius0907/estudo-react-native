import React from "react"
import renderer from "react-test-renderer"
import { render, fireEvent, waitFor } from './src/utils/test-utils';
import App from "./App"
import userEvent from '@testing-library/user-event'

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

describe('TO DO list', () => {
  it('should add a todo', async () => {
    const { getByText, getByTestId } = render(<App></App>)
    const btnAdicionar = getByTestId('btn');
    const textInput = getByTestId('textInput');

    const novoTodo = 'novo item';


    fireEvent.changeText(textInput, novoTodo);

    fireEvent(
      btnAdicionar,
      'press  ',
    )
    
    expect(getByText(novoTodo)).toBeTruthy();


   
  })
})
