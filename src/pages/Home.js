import React from 'react'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"Chè"} heading={"Chè"}/>
      <HorizontalCardProduct category={"watches"} heading={"Buốn bò"}/>
      <HorizontalCardProduct category={"Phở"} heading={"Phở"}/>
      <HorizontalCardProduct category={"Xôi"} heading={"Xôi"}/>
      <HorizontalCardProduct category={"Fast Food"} heading={"Fastfood"}/>
      <HorizontalCardProduct category={"Bánh Ướt"} heading={"Bánh ướt"}/>
      <HorizontalCardProduct category={"Bánh Mì"} heading={"Bánh mì"}/>
      <HorizontalCardProduct category={"Bánh Xèo"} heading={"Bánh Xèo"}/>
      <HorizontalCardProduct category={"Hủ Tiếu"} heading={"Hủ tiếu"}/>
    </div>
  )
}

export default Home