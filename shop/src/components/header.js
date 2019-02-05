import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Accordion, AccordionPanel, Box, Text, Grommet, Menu } from 'grommet'
import { Menu as IconMenu, Close } from 'grommet-icons'

const theme = {
  menu: {
    icons: {
      down: Close
    }
  }
}
const Header = ({ siteTitle }) => (
  <Grommet theme={theme}>
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5em 2em"
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Menu
          icon={<IconMenu />}
          dropAlign={{right: "right", top: "top"}}
          items={[
            { label: 'First Action', onClick: () => {} },
            { label: 'Second Action', onClick: () => {} },
          ]}
        />
      </div>
    </header>
  </Grommet>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
