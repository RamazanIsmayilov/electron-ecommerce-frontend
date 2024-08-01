import React from 'react';
import { ReactComponent as BestsellerIcon } from "../../../assets/icons/bestseller.svg";
import { ReactComponent as SaleIcon } from "../../../assets/icons/sale.svg";
import { ReactComponent as TrendingIcon } from "../../../assets/icons/trending.svg";
import { category } from '../../../data/category';
import { Checkbox, Select } from 'antd';
import { brand } from '../../../data/brand';
import { color } from '../../../data/color';
import { size } from '../../../data/size';
import { connectivity } from '../../../data/connectivity';
import { Option } from 'antd/es/mentions';

export const PriceFilter: React.FC = () => {
  return (
    <>
      <div className="price-filter p-4">
        <h6 className='fw-bold'>Filter by price</h6>
        <input type="range" className="form-range mt-3" id="min-range" />
        <div className="bottom d-flex align-items-center justify-content-between mt-2">
          <button className='text-uppercase text-white border-0 rounded-1'>Filter</button>
          <span className='fw-bold'>Price: $10</span>
        </div>
      </div>
    </>
  );
};

export const CategoryFilter: React.FC = () => {
  return (
    <>
      <div className="category-filter p-4">
        <h6 className='fw-bold'>Product Categories</h6>
        <div className="filter mt-3">
          {category.map(item => (
            <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
              <Checkbox />
              <span>{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const BrandFilter: React.FC = () => {
  return (
    <>
      <div className="brand-filter p-4">
        <h6 className='fw-bold'>Product Brands</h6>
        <div className="filter mt-3">
          {brand.map(item => (
            <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
              <Checkbox />
              <span>{item.brand}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const ColorFilter: React.FC = () => {
  return (
    <>
      <div className="color-filter p-4">
        <h6 className='fw-bold'>Filter by Color</h6>
        <div className="filter mt-3">
          {color.map(item => (
            <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
              <button key={item.id} className='p-2 border-0 rounded-1' style={{ backgroundColor: item.color.toLowerCase() }}></button>
              <span>{item.color}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const ConnectivityFilter: React.FC = () => {
  return (
    <>
      <div className="connectivity-filter p-4">
        <h6 className='fw-bold'>Filter by Connectivity</h6>
        <div className="filter mt-3">
          {connectivity.map(item => (
            <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
              <Checkbox />
              <span>{item.connectivity}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const SizeFilter: React.FC = () => {
  return (
    <>
      <div className="size-filter p-4">
        <h6 className='fw-bold'>Filter by Size</h6>
        <div className="filter mt-3">
          {size.map(item => (
            <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
              <Checkbox />
              <span>{item.size}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const BestsellerFilter: React.FC = () => {
  return (
    <button className='text-uppercase d-flex align-items-center rounded-3 gap-2'>
      <BestsellerIcon />
      Best sellers
    </button>
  );
};

export const NewFilter: React.FC = () => {
  return (
    <button className='text-uppercase d-flex align-items-center rounded-3 gap-2'>
      <BestsellerIcon />
      New
    </button>
  );
};

export const SaleFilter: React.FC = () => {
  return (
    <button className='text-uppercase d-flex align-items-center rounded-3 gap-2'>
      <SaleIcon />
      Sale
    </button>
  );
};

export const TrendingFilter: React.FC = () => {
  return (
    <button className='text-uppercase d-flex align-items-center rounded-3 gap-2'>
      <TrendingIcon />
      Trending
    </button>
  );
};

export const Sorting: React.FC = () => {
  return (
    <>
      <Select defaultValue='default'>
        <Option value='default'>Default sorting</Option>
        <Option value='1'>Sort by price: low to high</Option>
        <Option value='2'>Sort by price: high to low</Option>
        <Option value='3'>Sort by alphabet: A to Z</Option>
        <Option value='4'>Sort by alphabet: Z to A</Option>
      </Select>
    </>
  );
};
