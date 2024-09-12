import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../../components/common/Modal/Modal';
import { addCategory, deleteCategory, getCategories, updateCategory } from '../../../services/categoryService';
import { NotificationContext } from '../../../context/NotificationContext';
import Notification from '../../../components/common/Notification/Notification';

const Categories: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);


  const handleModal = (editMode: boolean = false) => {
    if (!editMode) {
      setCategoryName('');
      setCategoryId(null);
    }
    setEditMode(editMode);
    setModal(!modal);     
  };

  const handleCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryName) {
      warningNotification('Category name is required');
    } else {
      try {
        if (editMode) {
          const response = await updateCategory(categoryId!, categoryName);
          if (response) {
            fetchCategories();
            successNotification('Category successfully updated.');
            setCategoryName('');
            setEditMode(false);
            handleModal();
          }
        } else {
          const response = await addCategory(categoryName);
          if (response) {
            fetchCategories();
            successNotification('Category was successfully added.');
            setCategoryName('');
            handleModal();
          }
        }
      } catch (error) {
        errorNotification('An error occurred while handling the category.');
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      if (response) {
        setCategories(response);
      } else {
        console.log('No categories found');
      }
    } catch (error) {
      console.log('An error occurred while fetching categories.', error);
    }
  };

  const handleEditCategory = (id: string, name: string) => {
    setCategoryName(name); 
    setCategoryId(id); 
    handleModal(true); 
  };

  const handleDeleteCategory = async (id: string) => {
    const result = await deleteCategory(id);
    if (result) {
      successNotification('Category deleted successfully');
      fetchCategories()
    } else {
      errorNotification('Failed to delete category');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
          <Modal title={editMode ? 'Edit Category' : 'Add Category'}  handleClose={handleModal}>
            <form onSubmit={handleCategory}>
              <div className="form-group mb-3">
                <label htmlFor="productName">Category Name</label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter category name..."
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
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
            {categories.length > 0 ? (
              categories.map((item: any) => (
                <tr className='text-center' key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td className='d-flex align-items-center justify-content-center gap-2'>
                    <button onClick={() => handleDeleteCategory(item._id)} className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                    <button onClick={() => handleEditCategory(item._id, item.name)} className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className='text-center'>No categories available</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="add">
          <button onClick={() => handleModal(false)} type="button" className="text-light rounded-circle p-3 fs-5">
            <FaPlus />
          </button>
          <Notification />
        </div>
      </div>
    </div>
  );
}
export default Categories;
