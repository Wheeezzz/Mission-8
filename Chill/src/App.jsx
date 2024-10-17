
/*import App from './App.jsx'*/
import './indexHomepage.css'
import NavbarHomepage from './components/navbarHomepage'
import HeaderHomepage from './components/headerHomepage'
import HomepageSection from './components/homepageSection'
import HomepageFooter from './components/homepageFooter'

export default function Homepage() {
    return (
        <>
          <div className="homePage">
            <NavbarHomepage />
            <HeaderHomepage />
            <HomepageSection />
            <HomepageSection />
            <HomepageSection />
            <HomepageFooter />
          </div>
        </>
      );
}
