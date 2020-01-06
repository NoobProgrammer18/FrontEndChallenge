import React from 'react'
import Home from './components/Home'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

const routes = {
    "/" : () => <Home/>,
    "/page1" : () => <Page1/>,
    "/page2" : () => <Page2/>,
    "/page3" : () => <Page3/>,
}

export default routes
