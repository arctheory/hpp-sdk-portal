import { PropsWithChildren } from "react"
import Logo from "../core/Logo"

interface MainLayoutProps extends PropsWithChildren {
    smallLogo?: boolean
}

function MainLayout({ 
    children, 
    smallLogo = false 
}: MainLayoutProps) {
    return (
      <div className="h-screen flex items-center justify-center border-t-4 border-red-500">
        <div className="flex flex-col gap-8 items-center justify-center">
            <Logo small={smallLogo} />
            <div className="flex items-center gap-4">
                { children }
            </div>
        </div>
      </div>
    )
  }
  
  export default MainLayout
  