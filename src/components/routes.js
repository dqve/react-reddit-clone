import React from 'react'
import { Router, Route } from 'react-router'

const Routes = props => (

<Router {...props}>
	<Route path="/" component={ <div>Hello World</div> }>
	</Route>
</Router>

)

export default Routes