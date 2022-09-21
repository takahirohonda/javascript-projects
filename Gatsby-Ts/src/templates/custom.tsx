import React from 'react'

interface CustomPageContext {
  title: string
  description: string
}
interface CustomPageProps {
  pageContext: CustomPageContext
}

const CustomPage = ({ pageContext }: CustomPageProps) => {
  const { title, description } = pageContext
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}

export default CustomPage
