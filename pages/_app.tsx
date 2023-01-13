import SiteLayout from "../layouts/Site.layout";
import '../globalStyles/styles.css';

function App({Component, pageProps}) {
    
    return (
        <SiteLayout>
            <Component></Component>
        </SiteLayout>
    )
    return 'test2'
}

export default App;