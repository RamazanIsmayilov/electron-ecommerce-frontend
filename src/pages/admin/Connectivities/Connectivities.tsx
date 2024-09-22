import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../../components/common/Modal/Modal';
import Notification from '../../../components/common/Notification/Notification';
import { NotificationContext } from '../../../context/NotificationContext';
import { searchConnectivities } from '../../../services/searchService';
import { Pagination } from 'antd';
import { addConnectivity, deleteConnectivity, getConnectivities, updateConnectivity } from '../../../services/connectivityService';

const Connectivities: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [connectivityName, setConnectivityName] = useState<string>('')
  const [connectivityId, setConnectivityId] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredConnectivities, setFilteredonnectivities] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(8);
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);

  const handleModal = (editMode: boolean = false) => {
    if (!editMode) {
      setConnectivityName('');
      setConnectivityId(null);
    }
    setEditMode(editMode);
    setModal(!modal);
  };

  const handleConnectivity = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!connectivityName) {
      warningNotification('Connectivity name is required');
    } else {
      try {
        if (editMode) {
          await updateConnectivity(connectivityId!, connectivityName);
          fetchConnectivities();
          successNotification('Connectivity updated successfully');
          setConnectivityName('');
          setEditMode(false);
          handleModal();
        } else {
          await addConnectivity(connectivityName);
          fetchConnectivities();
          successNotification('Connectivity added successfully');
          setConnectivityName('');
          handleModal();
        }
      } catch (error) {
        errorNotification('An error occurred while handling the connectivity.');
      }
    }
  };

  const handleDeleteConnectivity = async (id: string) => {
    const result = await deleteConnectivity(id)
    if (result) {
      successNotification('Connectivity deleted successfully');
      fetchConnectivities();
    } else {
      errorNotification('Failed to delete connectivity');
    }
  }

  const handleEditConnectivity = async (id: string, name: string) => {
    setConnectivityName(name)
    setConnectivityId(id)
    handleModal(true)
  }

  const handleSearchConnectivity = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    try {
      const result = await searchConnectivities(query);
      setFilteredonnectivities(result);
    } catch (error) {
      console.error('An error occurred while searching connectivities.', error);
    }
  }

  const fetchConnectivities = async () => {
    try {
      const response = await getConnectivities()
      setFilteredonnectivities(response)
    } catch (error) {
      console.error('An error occurred while fetching connectivities.', error);
    }
  }

  const handlePageChange = (newPage: number, pageSize: number) => {
    setPage(newPage);
  };

  const paginatedConnectivities = filteredConnectivities.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  useEffect(() => {
    fetchConnectivities()
  }, [])

  return (
    <div className='connectivities bg-light shadow py-3'>
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h2 className='fs-4 fw-bold'>Connectivity Overview</h2>
          <div className="input-group w-25">
            <input value={searchQuery} onChange={handleSearchConnectivity} type="text" className='form-control shadow-none' placeholder='Search connectivities...' />
          </div>
        </div>
        {modal && (
          <Modal title={editMode ? 'Edit Connectivity' : 'Add Connectivity'} handleClose={handleModal}>
            <form onSubmit={handleConnectivity}>
              <div className="form-group mb-3">
                <label htmlFor="productName">Connectivity Name</label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter connectivitiy name..."
                  value={connectivityName}
                  onChange={(e) => setConnectivityName(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">{editMode ? 'Edit Connectivity' : 'Add Connectivity'}</button>
            </form>
          </Modal>
        )}
        <table className="custom-table mt-3">
          <thead>
            <tr className='text-center'>
              <th scope="col">Connectivity Id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedConnectivities.length > 0 ? (
              paginatedConnectivities.map((item: any) => (
                <tr className='text-center' key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.name} </td>
                  <td className='d-flex align-items-center justify-content-center gap-2'>
                    <button onClick={() => handleDeleteConnectivity(item._id)} className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                    <button onClick={() => handleEditConnectivity(item._id, item.name)} className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className='text-center'>No connectivities available</td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredConnectivities.length > rowsPerPage && (
          <Pagination
            total={filteredConnectivities.length}
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
export default Connectivities;
