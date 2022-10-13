// @ts-ignore
export default function handler(req, res) {
  const loggedIn = Boolean(req.cookies && req.cookies['gatsby-example-auth'])

  res.json({
    loggedIn,
  })
}
