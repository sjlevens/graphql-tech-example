import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const httpLink = createHttpLink({
  uri: 'https://j4cp52oiejhyxeuzsac3nkbp6a.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  headers: {
    'Content-Type': 'application/graphql',
    'x-api-key': 'da2-mkdmswirfvak3ht5tejeaz73ee',
    Authorization: 'zolptjonbrfppf2bydrsxbbsse',
  },
})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff1644',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
