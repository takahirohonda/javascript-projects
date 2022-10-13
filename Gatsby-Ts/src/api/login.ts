// @ts-ignore
export default function handler(_req, res) {
  res.setHeader('Set-Cookie', 'gatsby-example-auth=true; path=/;')
  res.json({ status: 'ok' })
}
