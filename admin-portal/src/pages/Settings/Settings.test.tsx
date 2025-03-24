import Settings from "./Settings"
import { render } from "@testing-library/react"

describe('Settings', () => {
    it('should render Settings component', () => {
        render(<Settings />)
        expect(true).toBeTruthy()
    })
})