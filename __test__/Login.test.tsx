import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import LoginPage from '@/pages/index'
import ReduxProvider from "@/store/redux-provider";

const mockFn = jest.fn()
    
beforeEach(()=>{
  render(
    <ReduxProvider>
      <LoginPage />
    </ReduxProvider>
  )
  mockFn.mockClear()
})

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe('LoginPage', () => {
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    query: "",
    asPath: "",
  }));

  test('render', () => {
    expect(screen.queryByText('Login')).toBeTruthy()
    expect(screen.queryByText('LOGIN')).toBeTruthy()

    fireEvent.click(screen.queryByText('LOGIN'))
    expect(mockFn).toHaveBeenCalledTimes(0)
    // screen.debug()
  })
})