import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Modal from '../../../components/common/Modal/Modal';
import { getCategories } from '../../../services/categoryService';
import { getBrands } from '../../../services/brandService';
import { getColors } from '../../../services/colorService';
import { getStorages } from '../../../services/storageService';
import { getSizes } from '../../../services/sizeService';
import { getConnectivities } from '../../../services/connectivityService';
import { Input, Pagination, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { addProduct, deleteProduct, getProducts, updateProduct } from '../../../services/productService';
import { NotificationContext } from '../../../context/NotificationContext';
import Notification from '../../../components/common/Notification/Notification';

const { Option } = Select;

const Products: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editProductId, setEditProductId] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(8);
  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [colors, setColors] = useState<any[]>([]);
  const [storages, setStorages] = useState<any[]>([]);
  const [sizes, setSizes] = useState<any[]>([]);
  const [connectivities, setConnectivities] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    description: '',
    category: '',
    brand: '',
    color: [] as string[],
    storage: '',
    size: '',
    connectivity: '',
    images: [] as File[]
  });
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);


  const handleModal = () => {
    setModal(!modal);
    setProductData({ ...productData, images: [] });
    setEditMode(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      setProductData({ ...productData, images: [...productData.images, ...newImages] });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { images, name, description, category, brand, color, price } = productData;

    if (!name || !images || !description || !category || !brand || !color || !price) {
      warningNotification('Please fill in the required inputs');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price.toString());
    formData.append('description', description);
    formData.append('category', category);
    formData.append('brand', brand);
    formData.append('color', JSON.stringify(color));
    formData.append('storage', productData.storage);
    formData.append('size', productData.size);
    formData.append('connectivity', productData.connectivity);

    productData.images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      if (editMode && editProductId) {
        await updateProduct(editProductId, formData);
        successNotification('Product updated successfully');
      } else {
        const addedProduct = await addProduct(formData);
        setProducts((prev) => [...prev, addedProduct]);
        successNotification('Product added successfully');
      }

      await fetchProduct();
      setProductData({
        name: '',
        price: 0,
        description: '',
        category: '',
        brand: '',
        color: [],
        storage: '',
        size: '',
        connectivity: '',
        images: [],
      });
      setModal(false);
    } catch (error) {
      errorNotification('An error occurred while handling the product.');
      console.error('Error:', error);
    }
  };


  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      successNotification('Product deleted successfully');
      fetchProduct();
    } catch (error) {
      errorNotification('Failed to delete product');
    }
  };

  const handleEditProduct = (product: any) => {
    setEditMode(true);
    setEditProductId(product._id);
    setProductData({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category._id,
      brand: product.brand._id,
      color: product.color.map((color: any) => color._id) || [],
      storage: product.storage?._id || '',
      size: product.size?._id || '',
      connectivity: product.connectivity?._id || '',
      images: product.images || []
    });
    setModal(true);
  };

  const fetchProduct = async () => {
    try {
      const [categories, brands, colors, storages, sizes, connectivities, products] = await Promise.all([
        getCategories(),
        getBrands(),
        getColors(),
        getStorages(),
        getSizes(),
        getConnectivities(),
        getProducts()
      ]);
      setCategories(categories);
      setBrands(brands);
      setColors(colors);
      setStorages(storages);
      setSizes(sizes);
      setConnectivities(connectivities);
      setFilteredProducts(products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage: number, pageSize: number) => {
    setPage(newPage);
  };

  const paginatedProducts = filteredProducts.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  useEffect(() => {
    fetchProduct()
  }, [products])


  return (
    <div className='products bg-light shadow py-3'>
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h2 className='text-2xl font-bold'>Products Overview</h2>
          <button onClick={handleModal} type="button" className="text-light rounded-circle p-3 fs-5">
            <FaPlus />
          </button>
        </div>
        {modal && (
          <Modal title={editMode ? 'Edit Product' : 'Add Product'} handleClose={handleModal} >
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Name<sup className='text-danger fs-6'>*</sup></label>
                <Input
                  size='large'
                  placeholder="Enter product name"
                  value={productData.name}
                  onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <label>Description<sup className='text-danger fs-6'>*</sup></label>
                <TextArea
                  rows={4}
                  placeholder="Enter product description"
                  value={productData.description}
                  onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <label>Price<sup className='text-danger fs-6'>*</sup></label>
                <Input
                  size='large'
                  placeholder="Enter product price"
                  type="number"
                  value={productData.price}
                  onChange={(e) => setProductData({ ...productData, price: Number(e.target.value) })}
                />
              </div>
              <div className="form-group mb-3">
                <label>Category<sup className='text-danger fs-6'>*</sup></label>
                <Select
                  id="category"
                  className="w-100"
                  placeholder="Select category"
                  value={productData.category}
                  onChange={(value) => setProductData({ ...productData, category: value })}
                >
                  {categories.map(item => (
                    <Option key={item._id} value={item._id}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className="form-group mb-3">
                <label>Brand<sup className='text-danger fs-6'>*</sup></label>
                <Select
                  id="brand"
                  className="w-100"
                  placeholder="Select brand"
                  value={productData.brand}
                  onChange={(value) => setProductData({ ...productData, brand: value })}
                >
                  {brands.map(item => (
                    <Option key={item._id} value={item._id}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className="form-group mb-3">
                <label>Color<sup className='text-danger fs-6'>*</sup></label>
                <Select
                  id="color"
                  className="w-100"
                  mode='multiple'
                  placeholder="Select color"
                  value={productData.color}
                  onChange={(value) => setProductData({ ...productData, color: value })}
                >
                  {colors.map(item => (
                    <Option key={item._id} value={item._id}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className="form-group mb-3">
                <label>Storage</label>
                <Select
                  id="storage"
                  className="w-100"
                  placeholder="Select storage"
                  value={productData.storage}
                  onChange={(value) => setProductData({ ...productData, storage: value })}
                >
                  {storages.map(item => (
                    <Option key={item._id} value={item._id}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className="form-group mb-3">
                <label>Size</label>
                <Select
                  id="size"
                  className="w-100"
                  placeholder="Select size"
                  value={productData.size}
                  onChange={(value) => setProductData({ ...productData, size: value })}
                >
                  {sizes.map(item => (
                    <Option key={item._id} value={item._id}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className="form-group mb-3">
                <label>Connectivity</label>
                <Select
                  id="connectivity"
                  className="w-100"
                  placeholder="Select connectivity"
                  value={productData.connectivity}
                  onChange={(value) => setProductData({ ...productData, connectivity: value })}
                >
                  {connectivities.map(item => (
                    <Option key={item._id} value={item._id}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className="upload-image">
                <div className="d-flex justify-content-center align-items-center w-100">
                  <label style={{ cursor: "pointer" }} htmlFor="dropzone-file" className="d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3 border border-secondary rounded cursor-pointer bg-light">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-4 pb-4">
                      <svg className="mb-3" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="text-secondary"><span className="fw-semibold">Click to upload</span> or drag and drop</p>
                    </div>
                    <input id="dropzone-file" type="file" className="d-none" onChange={handleImageChange} multiple />
                  </label>
                </div>
                <div className="image-preview">
                  <div className="row">
                    {productData.images.map((image, index) => {
                      const imageURL = typeof image === 'string' ? image : URL.createObjectURL(image);
                      return (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                          <div className="preview-image border p-2">
                            <img className="img-fluid" src={imageURL} alt={productData.name} width={150} height={150} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">{editMode ? 'Update Product' : 'Add Product'}</button>
              </div>
            </form>
          </Modal>
        )}
        <div className="products-list">
          <table className="custom-table mt-3">
            <thead>
              <tr className='text-center'>
                <th scope="col">Product Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
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
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((item, index) => (
                  <tr key={index} className='text-center align-middle'>
                    <td className="align-middle">{item._id}</td>
                    <td className="align-middle">
                      {item.images && item.images.length > 0 ? (
                        <img src={item.images[0]} alt={item.name} width={50} />
                      ) : 'No images'}
                    </td>
                    <td className="align-middle">{item.name?.slice(0, 10)}{item?.name?.length > 10 ? "..." : ""}</td>
                    <td className="align-middle">{item.description?.slice(0, 8)}{item.description?.length > 8 ? "..." : ""}</td>
                    <td className="align-middle">{item.category?.name.slice(0, 6)}{item.category?.name.length > 6 ? "..." : ""}</td>
                    <td className="align-middle">{item.brand?.name}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          className="color rounded-circle"
                          style={{ backgroundColor: `${item.color[0]?.name}`, width: '17px', height: '17px' }}
                        ></div>
                      </div>
                    </td>
                    <td className="align-middle">{item.storage ? item.storage.name : "Empty"}</td>
                    <td className="align-middle">{item.size ? item.size.name : "Empty"}</td>
                    <td className="align-middle">{item.connectivity ? (item.connectivity.name.length > 10
                      ? `${item.connectivity.name.slice(0, 10)}...`
                      : item.connectivity.name)
                      : "Empty"}
                    </td>
                    <td className="align-middle">${item.price}</td>
                    <td className="align-middle">
                      <div className='d-flex align-items-center justify-content-center'>
                        <button onClick={() => handleDeleteProduct(item._id)} className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                        <button onClick={() => handleEditProduct(item)} className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={12} className='text-center align-middle'>No products available</td>
                </tr>
              )}
            </tbody>
          </table>
          {filteredProducts.length > rowsPerPage && (
            <Pagination
              total={filteredProducts.length}
              current={page}
              onChange={handlePageChange}
              pageSize={rowsPerPage}
              className="mt-3 d-flex justify-content-center"
            />
          )}
        </div>
      </div>
      <Notification />
    </div>
  );
};

export default Products;
