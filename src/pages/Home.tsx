import { useEffect, useState } from "react";
import { BiUser, BiMoney, BiCart, BiUserCheck } from "react-icons/bi";
import { getUsersService } from "../service/api";

function Home() {
  const [quantityUsers, setQuantityUsers] = useState(0);

  const getTotalUsers = async () => {
    try {
      const response = await getUsersService();

      if (response.status === 200) {
        setQuantityUsers(response.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotalUsers();
  }, [getTotalUsers]);

  return (
    <section className="home">
      <ul className="card-preview">
        <li className="card-preview-item">
          <div className="card-content card-shadow-green">
            <div className="card-quantity">
              <span className="card-quantity-number">{quantityUsers}</span>
              <span className="card-quantity-text">Users</span>
            </div>
            <div className="card-icon">
              <BiUser />
            </div>
          </div>
        </li>
        <li className="card-preview-item">
          <div className="card-content card-shadow-blue">
            <div className="card-quantity">
              <span className="card-quantity-number">R$65.000,00</span>
              <span className="card-quantity-text">Profit</span>
            </div>
            <div className="card-icon">
              <BiMoney />
            </div>
          </div>
        </li>
        <li className="card-preview-item">
          <div className="card-content card-shadow-red">
            <div className="card-quantity">
              <span className="card-quantity-number">1024</span>
              <span className="card-quantity-text">Products Sold</span>
            </div>
            <div className="card-icon">
              <BiCart />
            </div>
          </div>
        </li>
        <li className="card-preview-item">
          <div className="card-content card-shadow-yellow">
            <div className="card-quantity">
              <span className="card-quantity-number">254</span>
              <span className="card-quantity-text">Customers</span>
            </div>
            <div className="card-icon">
              <BiUserCheck />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Home;
