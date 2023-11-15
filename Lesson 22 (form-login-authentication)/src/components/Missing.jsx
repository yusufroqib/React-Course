import "./Missing.css";

const Missing = () => {
  return (
    <div>
      <h3>ERROR.. PAGE NOT FOUND</h3>

      <img
        src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20style%3D%22font-feature-settings%3Anormal%3Bfont-variant-alternates%3Anormal%3Bfont-variant-caps%3Anormal%3Bfont-variant-east-asian%3Anormal%3Bfont-variant-ligatures%3Anormal%3Bfont-variant-numeric%3Anormal%3Bfont-variant-position%3Anormal%3Bfont-variation-settings%3Anormal%3Binline-size%3A0%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Bshape-margin%3A0%3Bshape-padding%3A0%3Btext-decoration-color%3A%23000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-orientation%3Amixed%3Btext-transform%3Anone%22%20d%3D%22M22%205v14h2V5zm-5%200v8h3v-2h-1V5zM9%205v2h4v10h-2V9H9v10h6V5zM5%205v14h2V5zM0%205v8h3v-2H2V5z%22%20color%3D%22%23000%22%20paint-order%3D%22fill%20markers%20stroke%22%2F%3E%3C%2Fsvg%3E"
        width="500"
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <a href="/" class="btn">
          HOME
          <ion-icon name="home-outline"></ion-icon>
        </a>

        <a
          href="https://snakegamexenzia.netlify.app/"
          target="_blank"
          class="btn"
        >
          Game Mode
          <ion-icon name="game-controller-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Missing;