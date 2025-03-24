import Reports from "./Reports"
import { render } from "@testing-library/react"

describe('Reports', () => {
    it('should render Reports component', () => {
        render(<Reports />)
        expect(true).toBeTruthy()
    })
})