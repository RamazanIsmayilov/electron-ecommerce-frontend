import React, { useContext, useEffect, useState } from 'react';
import { FaPlus, FaRegTrashCan } from 'react-icons/fa6';
import Notification from '../../../components/common/Notification/Notification';
import { FaRegEdit } from 'react-icons/fa';
import Modal from '../../../components/common/Modal/Modal';
import { NotificationContext } from '../../../context/NotificationContext';
import { addBrand, deleteBrand, getBrands, updateBrand } from '../../../services/brandService';

const Brands: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [brands, setBrands] = useState<any[]>([]);
  const [brandName, setBrandName] = useState<string>('');
  const [brandId, setBrandId] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);


  const handleModal = (editMode: boolean = false) => {
    if (!editMode) {
      setBrandName('');
      setBrandId(null);
    }
    setEditMode(editMode);
    setModal(!modal);
  };

  const handleBrand = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!brandName) {
      warningNotification('Brand name is required');
    } else {
      try {
        if (editMode) {
          await updateBrand(brandId!, brandName);
          fetchBrands();
          successNotification('Brand successfully updated.');
          setBrandName('');
          setEditMode(false);
          handleModal();
        } else {
          await addBrand(brandName);
          fetchBrands();
          successNotification('Brand was successfully added.');
          setBrandName('');
          handleModal();
        }
      } catch (error) {
        errorNotification('An error occurred while handling the brand.');
      }
    }
  };


  const fetchBrands = async () => {
    try {
      const response = await getBrands()
      setBrands(response)
    } catch (error) {
      console.log('An error occurred while fetching brands.', error);
    }
  }

  const handleEditBrand = (id: string, name: string) => {
    setBrandName(name)
    setBrandId(id)
    handleModal(true);
  }

  const handleDeleteBrand = async (id: string) => {
    const result = await deleteBrand(id)
    if (result) {
      successNotification('Brand deleted successfully');
      fetchBrands()
    } else {
      errorNotification('Failed to delete brand');
    }
  }

  useEffect(() => {
    fetchBrands()
  }, [])

  return (
    <div className='categories bg-light shadow py-3'>
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h2 className='fs-4 fw-bold'>Brands Overview</h2>
          <div className="input-group w-25">
            <input type="text" className='form-control shadow-none' placeholder='Search brand...' />
          </div>
        </div>
        {modal && (
          <Modal title={editMode ? 'Edit Brand' : 'Add Brand'} handleClose={handleModal}>
            <form onSubmit={handleBrand}>
              <div className="form-group mb-3">
                <label htmlFor="brandName">Brand Name</label>
                <input
                  type="text"
                  id="brandName"
                  className="form-control shadow-none"
                  placeholder="Enter brand name..."
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Add Brand</button>
            </form>
          </Modal>
        )}
        <table className="custom-table mt-3">
          <thead>
            <tr className='text-center'>
              <th scope="col">Brand Id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.length > 0 ? (
              brands.map((item: any) => (
                <tr className='text-center' key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td className='d-flex align-items-center justify-content-center gap-2'>
                    <button onClick={() => handleDeleteBrand(item._id)} className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                    <button onClick={() => handleEditBrand(item._id, item.name)} className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className='text-center'>No brands available</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="add">
          <button onClick={() => handleModal(false)} className="text-light rounded-circle p-3 fs-5">
            <FaPlus />
          </button>
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Brands;
