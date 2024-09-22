import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../../components/common/Modal/Modal';
import Notification from '../../../components/common/Notification/Notification';
import { NotificationContext } from '../../../context/NotificationContext';
import { searchSizes } from '../../../services/searchService';
import { Pagination } from 'antd';
import { addSize, deleteSize, getSizes, updateSize } from '../../../services/sizeService';

const Sizes: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [sizeName, setSizeName] = useState<string>('')
  const [sizeId, setSizeId] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredSizes, setFilteredSizes] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(8);
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);

  const handleModal = (editMode: boolean = false) => {
    if (!editMode) {
      setSizeName('');
      setSizeId(null);
    }
    setEditMode(editMode);
    setModal(!modal);
  };

  const handleSize = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!sizeName) {
      warningNotification('Size name is required');
    } else {
      try {
        if (editMode) {
          await updateSize(sizeId!, sizeName);
          fetchSizes();
          successNotification('Size updated successfully');
          setSizeName('');
          setEditMode(false);
          handleModal();
        } else {
          await addSize(sizeName);
          fetchSizes();
          successNotification('Size added successfully');
          setSizeName('');
          handleModal();
        }
      } catch (error) {
        errorNotification('An error occurred while handling the size.');
      }
    }
  };

  const handleDeleteSize = async (id: string) => {
    const result = await deleteSize(id)
    if (result) {
      successNotification('Size deleted successfully');
      fetchSizes();
    } else {
      errorNotification('Failed to delete size');
    }
  }

  const handleEditSize = async (id: string, name: string) => {
    setSizeName(name)
    setSizeId(id)
    handleModal(true)
  }

  const handleSearchSize = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    try {
      const result = await searchSizes(query);
      setFilteredSizes(result);
    } catch (error) {
      console.error('An error occurred while searching sizes.', error);
    }
  }

  const fetchSizes = async () => {
    try {
      const response = await getSizes()
      setFilteredSizes(response)
    } catch (error) {
      console.error('An error occurred while fetching sizes.', error);
    }
  }

  const handlePageChange = (newPage: number, pageSize: number) => {
    setPage(newPage);
  };

  const paginatedSizes = filteredSizes.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  useEffect(() => {
    fetchSizes()
  }, [])

  return (
    <div className='sizes bg-light shadow py-3'>
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h2 className='fs-4 fw-bold'>Size Overview</h2>
          <div className="input-group w-25">
            <input value={searchQuery} onChange={handleSearchSize} type="text" className='form-control shadow-none' placeholder='Search sizes...' />
          </div>
        </div>
        {modal && (
          <Modal title={editMode ? 'Edit Size' : 'Add Size'} handleClose={handleModal}>
            <form onSubmit={handleSize}>
              <div className="form-group mb-3">
                <label htmlFor="sizeName">Size Name</label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter size name..."
                  value={sizeName}
                  onChange={(e) => setSizeName(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">{editMode ? 'Edit Size' : 'Add Size'}</button>
            </form>
          </Modal>
        )}
        <table className="custom-table mt-3">
          <thead>
            <tr className='text-center'>
              <th scope="col">Size Id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSizes.length > 0 ? (
              paginatedSizes.map((item: any) => (
                <tr className='text-center' key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name} </td>
                  <td className='d-flex align-items-center justify-content-center gap-2'>
                    <button onClick={() => handleDeleteSize(item._id)} className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                    <button onClick={() => handleEditSize(item._id, item.name)} className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className='text-center'>No sizes available</td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredSizes.length > rowsPerPage && (
          <Pagination
            total={filteredSizes.length}
            current={page}
            onChange={handlePageChange}
            pageSize={rowsPerPage}
            className="mt-3 d-flex justify-content-center"
          />
        )}
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
export default Sizes;
