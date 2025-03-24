import Error from "./Error"
import { render } from "@testing-library/react"

describe('Error', () => {
    it('should render Error component', () => {
        render(<Error />)
        expect(true).toBeTruthy()
    })
})