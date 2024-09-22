import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../../components/common/Modal/Modal';
import Notification from '../../../components/common/Notification/Notification';
import { NotificationContext } from '../../../context/NotificationContext';
import { searchStorages } from '../../../services/searchService';
import { Pagination } from 'antd';
import { addStorage, deleteStorage, getStorages, updateStorage } from '../../../services/storageService';

const Storages: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [storageName, setStorageName] = useState<string>('');
  const [storageId, setStorageId] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredStorages, setFilteredStorages] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(8);
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);

  const handleModal = (editMode: boolean = false) => {
    if (!editMode) {
      setStorageName('');
      setStorageId(null);
    }
    setEditMode(editMode);
    setModal(!modal);
  };

  const handleStorage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!storageName) {
      warningNotification('Storage name is required');
    } else {
      try {
        if (editMode) {
          await updateStorage(storageId!, storageName);
          fetchStorages();
          successNotification('Storage updated successfully');
          setStorageName('');
          setEditMode(false);
          handleModal();
        } else {
          await addStorage(storageName);
          fetchStorages();
          successNotification('Storage added successfully');
          setStorageName('');
          handleModal();
        }
      } catch (error) {
        errorNotification('An error occurred while handling the storage.');
      }
    }
  };

  const handleDeleteStorage = async (id: string) => {
    const result = await deleteStorage(id);
    if (result) {
      successNotification('Storage deleted successfully');
      fetchStorages();
    } else {
      errorNotification('Failed to delete storage');
    }
  };

  const handleEditStorage = async (id: string, name: string) => {
    setStorageName(name);
    setStorageId(id);
    handleModal(true);
  };

  const handleSearchStorage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    try {
      const result = await searchStorages(query);
      setFilteredStorages(result);
    } catch (error) {
      console.error('An error occurred while searching storages.', error);
    }
  };

  const fetchStorages = async () => {
    try {
      const response = await getStorages();
      setFilteredStorages(response);
    } catch (error) {
      console.error('An error occurred while fetching storages.', error);
    }
  };

  const handlePageChange = (newPage: number, pageSize: number) => {
    setPage(newPage);
  };

  const paginatedStorages = filteredStorages.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  useEffect(() => {
    fetchStorages();
  }, []);

  return (
    <div className='storages bg-light shadow py-3'>
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h2 className='fs-4 fw-bold'>Storage Overview</h2>
          <div className="input-group w-25">
            <input value={searchQuery} onChange={handleSearchStorage} type="text" className='form-control shadow-none' placeholder='Search storages...' />
          </div>
        </div>
        {modal && (
          <Modal title={editMode ? 'Edit Storage' : 'Add Storage'} handleClose={handleModal}>
            <form onSubmit={handleStorage}>
              <div className="form-group mb-3">
                <label htmlFor="storageName">Storage Name</label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter storage name..."
                  value={storageName}
                  onChange={(e) => setStorageName(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">{editMode ? 'Edit Storage' : 'Add Storage'}</button>
            </form>
          </Modal>
        )}
        <table className="custom-table mt-3">
          <thead>
            <tr className='text-center'>
              <th scope="col">Storage Id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedStorages.length > 0 ? (
              paginatedStorages.map((item: any) => (
                <tr className='text-center' key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name} </td>
                  <td className='d-flex align-items-center justify-content-center gap-2'>
                    <button onClick={() => handleDeleteStorage(item._id)} className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                    <button onClick={() => handleEditStorage(item._id, item.name)} className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className='text-center'>No storages available</td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredStorages.length > rowsPerPage && (
          <Pagination
            total={filteredStorages.length}
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
};

export default Storages;
