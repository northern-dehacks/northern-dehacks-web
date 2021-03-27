import { Component } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './app.scss'
import Home from '../home/home.js'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#133C9A'
    },
    secondary: {
      main: '#157A6E'
    },
    highlight: {
      main: '#FF6F56'
    },
  }
})


class App extends Component{
  render(){
    return (
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    )
  }
}

export default App