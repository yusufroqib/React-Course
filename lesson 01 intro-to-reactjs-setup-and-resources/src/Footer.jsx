const Footer = () => {
  const today = new Date()

  // const footerTyle = {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   flexWrap: "wrap",
  //   padding: "2rem 9%",
  //   background: "#112e42"
  // }

  return (
    <footer>
      <p>
        Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
