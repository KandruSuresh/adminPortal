import Inbox from "./Inbox"
import { render } from "@testing-library/react"

describe('Inbox', () => {
    it('should render Inbox component', () => {
        render(<Inbox />)
        expect(true).toBeTruthy()
    })
})