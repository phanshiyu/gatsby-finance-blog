import React from 'react'
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"

export default function Header({ pathname, title, rootPath }) {
    let header
    if (pathname === rootPath) {
        header = (
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        )
      } else {
        header = (
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        )
      }

      return header;
}