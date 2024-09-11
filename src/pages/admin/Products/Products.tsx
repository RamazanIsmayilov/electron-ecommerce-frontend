import React, { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../../components/common/Modal/Modal';

const Products: React.FC = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className='products bg-light shadow py-3'>
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h2 className='fs-4 fw-bold'>Products Overview</h2>
          <button onClick={handleModal} type="button" className="text-light rounded-circle p-3 fs-5">
            <FaPlus />
          </button>
        </div>
        {modal && (
          <Modal title='Add Product' handleClose={handleModal}>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" className="form-control shadow-none" placeholder="Enter product name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="category">Category</label>
                <select id="category" className="form-control shadow-none">
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="brand">Brand</label>
                <select id="brand" className="form-control shadow-none">
                  <option value="">Select brand</option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="nike">Nike</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" className="form-control shadow-none" placeholder="Enter price" />
              </div>
              <button type="submit" className="btn btn-primary w-100">Add Product</button>
            </form>
          </Modal>
        )}
        <table className="custom-table mt-3">
          <thead>
            <tr className='text-center'>
              <th scope="col">Product Id</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Stock</th>
              <th scope="col">Category</th>
              <th scope="col">Brand</th>
              <th scope="col">Color</th>
              <th scope="col">Storage</th>
              <th scope="col">Size</th>
              <th scope="col">Connectivity</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td className='d-flex align-items-center justify-content-center gap-2'>
                <button className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                <button className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
