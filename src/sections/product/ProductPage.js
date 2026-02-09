"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import "../../styles/productPage.css";

const ProductPage = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  return (
    <div className="product-page">
      {/* Main Image */}
      <div className="main-image">
        <Image
          src={selectedImage}
          alt={product.name}
          width={500}
          height={500}
          className="cursor-pointer"
          onClick={() => handleImageClick(selectedImage)}
        />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {product.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            width={100}
            height={100}
            className={`thumbnail ${img === selectedImage ? "active" : ""}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Modal for Image View */}
      {isModalOpen && (
        <div className="modal">
          <FaTimes className="close-icon" onClick={() => setIsModalOpen(false)} />
          <Image src={selectedImage} alt={product.name} width={800} height={800} />
        </div>
      )}

      {/* Product Info */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
      </div>
    </div>
  );
};

export default ProductPage;
