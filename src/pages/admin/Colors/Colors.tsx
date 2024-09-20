import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../../components/common/Modal/Modal';
import Notification from '../../../components/common/Notification/Notification';
import { addColor, deleteColor, getColors, updateColor } from '../../../services/colorService';
import { NotificationContext } from '../../../context/NotificationContext';
import { searchColors } from '../../../services/searchService';
import { Pagination } from 'antd';

const Colors: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [colorName, setColorName] = useState<string>('')
  const [colorId, setColorId] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredColors, setFilteredColors] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(8);
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);

  const handleModal = (editMode: boolean = false) => {
    if (!editMode) {
      setColorName('');
      setColorId(null);
    }
    setEditMode(editMode);
    setModal(!modal);
  };

  const handleColor = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!colorName) {
      warningNotification('Color name is required');
    } else {
      try {
        if (editMode) {
          await updateColor(colorId!, colorName);
          fetchColors();
          successNotification('Color updated successfully');
          setColorName('');
          setEditMode(false);
          handleModal();
        } else {
          await addColor(colorName);
          fetchColors();
          successNotification('Color added successfully');
          setColorName('');
          handleModal();
        }
      } catch (error) {
        errorNotification('An error occurred while handling the brand.');
      }
    }
  };

  const handleDeleteColor = async (id: string) => {
    const result = await deleteColor(id)
    if (result) {
      successNotification('Color deleted successfully');
      fetchColors();
    } else {
      errorNotification('Failed to delete color');
    }
  }

  const handleEditColor = async (id: string, name: string) => {
    setColorName(name)
    setColorId(id)
    handleModal(true)
  }

  const handleSearchColor = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    console.log(query);
    setSearchQuery(query)
    try {
      const result = await searchColors(query);
      setFilteredColors(result);
    } catch (error) {
      console.error('An error occurred while searching colors.', error);
    }
  }

  const fetchColors = async () => {
    try {
      const response = await getColors()
      setFilteredColors(response)
    } catch (error) {
      console.error('An error occurred while fetching brands.', error);
    }
  }

  const handlePageChange = (newPage: number, pageSize: number) => {
    setPage(newPage);
  };

  const paginatedColors = filteredColors.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  useEffect(() => {
    fetchColors()
  }, [])

  return (
    <div className='colors bg-light shadow py-3'>
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h2 className='fs-4 fw-bold'>Color Overview</h2>
          <div className="input-group w-25">
            <input value={searchQuery} onChange={handleSearchColor} type="text" className='form-control shadow-none' placeholder='Search colors...' />
          </div>
        </div>
        {modal && (
          <Modal title={editMode ? 'Edit Color' : 'Add Color'} handleClose={handleModal}>
            <form onSubmit={handleColor}>
              <div className="form-group mb-3">
                <label htmlFor="productName">Color Name</label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter color name..."
                  value={colorName}
                  onChange={(e) => setColorName(e.target.value)}
                  style={{ backgroundColor: colorName.toLowerCase() }}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Add Color</button>
            </form>
          </Modal>
        )}
        <table className="custom-table mt-3">
          <thead>
            <tr className='text-center'>
              <th scope="col">Color Id</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedColors.length > 0 ? (
              paginatedColors.map((item: any) => (
                <tr className='text-center' key={item._id}>
                  <td>{item._id}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <div
                        className="color rounded-circle"
                        style={{ backgroundColor: `${item.name.toLowerCase()}`, width: '17px', height: '17px' }}
                      ></div>
                      <span>{item.name.toLowerCase()}</span>
                    </div>
                  </td>
                  <td className='d-flex align-items-center justify-content-center gap-2'>
                    <button onClick={() => handleDeleteColor(item._id)} className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                    <button onClick={() => handleEditColor(item._id, item.name)} className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className='text-center'>No colors available</td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredColors.length > rowsPerPage && (
          <Pagination
            total={filteredColors.length}
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
export default Colors;
