import { Link } from "react-router-dom";
import css from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={css.mainPage}>
      <section className={css.content}>
        <h2>We care about your trips!</h2>
        <p>
          Explore a wide range of campers, from vans to fully integrated models.
        </p>
        <p>
          We also offer comprehensive maintenance and repair services to keep
          your vehicle in top condition. Your adventure starts here!
        </p>
        <Link to="/catalogue" className={css.btn}>
          Shop Now
        </Link>
      </section>
      <footer className={css.footer}>
        <p>&copy; 2024 Camper Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
