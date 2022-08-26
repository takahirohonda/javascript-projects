import React from 'react'
import * as styles from './error.module.scss'

// This only handles 400 errors - only http error 404 is handled.
const Error: React.FC = () => (
  <div>
    <h1 className={styles.header}>Page not found</h1>
    <p className={styles.errorMessage}>
      The page you are not looking for deos not exist.
    </p>
  </div>
)

export default Error
