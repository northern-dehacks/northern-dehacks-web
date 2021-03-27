import { Component } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import './app.scss'
import Home from '../../pages/home/home.js'

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
    splash: {
      main: '#FFADAD'
    },
  }
})


class App extends Component {
  constructor() {
    super()
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }


  render() {
    if (this.state.isLoading) {
      return (
        <div className='centered'>
          <CircularProgress />
        </div>
      )
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      )
    }


  }
}

export default App