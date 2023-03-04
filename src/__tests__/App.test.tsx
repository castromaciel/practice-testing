import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Example Test', () => {
  test('Should render App component', () => {
    render(<App />)

    const element = screen.getByText('Testing class')
    screen.debug()
    expect(element).toBeInTheDocument()
  })
})
