import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./AdminOrders.css";

const AdminOrders = () => {
  const { orders, isAdminAuthenticated } = useContext(CartContext);
  const navigate = useNavigate();

  if (!isAdminAuthenticated) {
    alert("Access Denied! Admin Only.");
    navigate("/admin/login"); // Redirect non-admins to login page
    return null;
  }

  return (
    <div className="admin-orders">
      <h1>Admin Dashboard - Orders</h1>
      
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.phoneNumber}</td>
                <td>
                  {order.items.map((item) => (
                    <p key={item.id}>
                      {item.name} (x{item.quantity}) - {item.price * item.quantity} Ksh
                    </p>
                  ))}
                </td>
                <td>{order.total} Ksh</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrders;
