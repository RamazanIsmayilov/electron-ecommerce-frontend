import React, { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../../components/common/Modal/Modal';
import { addCategory } from '../../../services/categoryService';

const Categories: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState('')

  const handleModal = () => {
    setModal(!modal);
  };

  const handleCategory = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!category) {
      console.log('Category name is required');
    }else{
      try {
        await addCategory(category)
        console.log('Category added successfully');
      } catch (error) {
        console.log(error);
        
      }
    }
  }

  return (
    <div className='categories bg-light shadow py-3'>
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h2 className='fs-4 fw-bold'>Categories Overview</h2>
          <div className="input-group w-25">
            <input type="text" className='form-control shadow-none' placeholder='Search category...' />
          </div>
        </div>
        {modal && (
          <Modal title='Add Category' handleClose={handleModal}>
            <form onSubmit={handleCategory}>
              <div className="form-group mb-3">
                <label htmlFor="productName">Category Name</label>
                <input type="text" className="form-control shadow-none" placeholder="Enter category name..." value={category} onChange={(e: any) => setCategory(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary w-100">Add Category</button>
            </form>
          </Modal>
        )}
        <table className="custom-table mt-3">
          <thead>
            <tr className='text-center'>
              <th scope="col">Category Id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td>1</td>
              <td>Mark</td>
              <td className='d-flex align-items-center justify-content-center gap-2'>
                <button className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                <button className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="add">
          <button onClick={handleModal} type="button" className="text-light rounded-circle p-3 fs-5">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Categories;
