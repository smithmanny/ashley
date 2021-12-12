import { Head, BlitzLayout, Image } from "blitz"
import Box from "@mui/material/Box"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "ashley"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Image alt="Revive Wellness" src="/revive.jpeg" width={325} height={167} />
      </Box>
      {children}
    </>
  )
}

export default Layout
