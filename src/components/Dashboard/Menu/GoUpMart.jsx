"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const GoUpMart = () => {
  const [items, setItems] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const fetchItems = async () => {
        try {
          const response = await fetch("/json/products.json");
          const data = await response.json();
          setItems(data);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      };

      fetchItems();
    }
  }, [isMounted]);

  const handleCardClick = (itemId) => {
    if (isMounted) {
      router.push(`/product/${itemId}`);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="font-sans">
      {/* Poin dan Voucher Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        {/* Poin Card */}
        <div className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium mb-1 md:text-lg">
              Poin Saya
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#629A1A]">
              2.500
            </h3>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              Ayo kumpulkan Poin mu!
            </p>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#629A1A]/10 flex items-center justify-center text-3xl md:text-4xl">
            🪙
          </div>
        </div>

        {/* Voucher Card */}
        <div className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium mb-1 md:text-lg">
              Voucher Saya
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#629A1A]">
              2
            </h3>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              Voucher belum digunakan
            </p>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#629A1A]/10 flex items-center justify-center text-3xl md:text-4xl">
            🎟️
          </div>
        </div>
      </div>

      {/* Item List Section */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="bg-white rounded-2xl p-3 md:p-5 shadow-sm border border-gray-100 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md group h-full"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Content Container */}
            <div className="flex flex-col flex-grow text-center">
              <h4 className="font-bold text-gray-900 text-sm md:text-lg line-clamp-2 mb-1">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-500 line-clamp-2 mb-3 md:mb-4 flex-grow">
                {item.description}
              </p>
              
              {/* Price Tag */}
              <div className="mt-auto bg-[#629A1A]/10 rounded-xl py-2 md:py-3 px-3 w-full inline-flex items-center justify-center">
                <span className="text-sm md:text-base font-bold text-[#629A1A]">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoUpMart;