import React, { useEffect, useState } from 'react';
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
import { Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { addProduct, getProducts } from '../../../services/productService';

const { Option } = Select;

const Products: React.FC = () => {
  const [modal, setModal] = useState(false);
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
    color: '',
    storage: '',
    size: '',
    connectivity: '',
    images: [] as File[]
  });
  const [images, setImages] = useState<File[]>([]);

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await getBrands();
        setBrands(response);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    const fetchColors = async () => {
      try {
        const response = await getColors();
        setColors(response);
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    };

    const fetchStorages = async () => {
      try {
        const response = await getStorages();
        setStorages(response);
      } catch (error) {
        console.error('Error fetching storages:', error);
      }
    };

    const fetchSizes = async () => {
      try {
        const response = await getSizes();
        setSizes(response);
      } catch (error) {
        console.error('Error fetching sizes:', error);
      }
    };

    const fetchConnectivities = async () => {
      try {
        const response = await getConnectivities();
        setConnectivities(response);
      } catch (error) {
        console.error('Error fetching connectivities:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
    fetchBrands();
    fetchColors();
    fetchStorages();
    fetchSizes();
    fetchConnectivities();
    fetchProducts();
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files));
      setProductData({ ...productData, images: Array.from(event.target.files) });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price.toString());
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('brand', productData.brand);
    formData.append('color', productData.color);
    formData.append('storage', productData.storage);
    formData.append('size', productData.size);
    formData.append('connectivity', productData.connectivity);

    for (let i = 0; i < productData.images.length; i++) {
      formData.append('images', productData.images[i]);
    }
    console.log(productData.images);
    

    try {
      const addedProduct = await addProduct(formData);
      setProducts((prev) => [...prev, addedProduct]);
      setProductData({
        name: '',
        price: 0,
        description: '',
        category: '',
        brand: '',
        color: '',
        storage: '',
        size: '',
        connectivity: '',
        images: [],
      });
      setModal(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

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
          <Modal title='Add Product' handleClose={handleModal}>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="productName">Name</label>
                <Input
                  size='large'
                  placeholder="Enter product name"
                  value={productData.name}
                  onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="productDescription">Description</label>
                <TextArea
                  rows={4}
                  placeholder="Enter product description"
                  value={productData.description}
                  onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <label>Price</label>
                <Input
                  size='large'
                  placeholder="Enter product price"
                  type="number"
                  value={productData.price}
                  onChange={(e) => setProductData({ ...productData, price: Number(e.target.value) })}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="category">Category</label>
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
                <label htmlFor="brand">Brand</label>
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
                <label htmlFor="color">Color</label>
                <Select
                  id="color"
                  className="w-100"
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
                <label htmlFor="storage">Storage</label>
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
                <label htmlFor="size">Size</label>
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
                <label htmlFor="connectivity">Connectivity</label>
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
              <div className="form-group mb-3">
                <label htmlFor="images">Images</label>
                <Input type="file" onChange={handleImageChange} multiple />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">Add Product</button>
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
              {products.length > 0 ? (
                products.map(item => (
                  <tr key={item._id} className='text-center'>
                    <td>{item._id}</td>
                    <td>
                      {images ?
                        <img src={item.images} alt={item.name} width={50} />
                        : 'No images'
                      }
                    </td>
                    <td>{item.name.slice(0, 16)}...</td>
                    <td>{item.description.slice(0, 16)}...</td>
                    <td>{item.category.name}</td>
                    <td>{item.brand.name}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <div
                          className="color rounded-circle"
                          style={{ backgroundColor: `${item.color.name}`, width: '17px', height: '17px' }}
                        ></div>
                      </div>
                    </td>
                    <td>{item.storage.name}</td>
                    <td>{item.size.name}</td>
                    <td>{item.connectivity.name}</td>
                    <td>${item.price}</td>
                    <td className='d-flex align-items-center justify-content-center gap-2'>
                      <button className='border-0 bg-transparent text-danger fs-5'><FaRegTrashCan /></button>
                      <button className='border-0 bg-transparent text-primary fs-5'><FaRegEdit /></button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={11} className='text-center'>No products available</td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
