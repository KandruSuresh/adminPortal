import App from "./App";
import { render } from "@testing-library/react"

describe('App', () => {
    it('should render App component', async () => {
        render(<App />)
        expect(true).toBeTruthy()
    })
})