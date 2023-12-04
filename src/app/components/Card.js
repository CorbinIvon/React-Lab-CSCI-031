'use client';
import { Flex } from '@radix-ui/themes';
import React, { useState } from 'react';

export default function Card({
  key = -1,
  title = 'Placeholder Title',
  contentShort = 'Placeholder Content',
  contentLong = 'Placeholder Content',
  coverImageUrl = '',
  publishTime = '1970-01-01',
  tags = ['placeholder', 'tag'],
}) {
  const [isContentVisible, setContentVisible] = useState(false);
  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };
  const timestampDate = new Date(publishTime);
  // Timestamp is 1 day behind for some reason after conversion.
  timestampDate.setDate(timestampDate.getDate() + 1);
  const timestampDisplay =
    'Published: ' + timestampDate.getMonth() + '/' + +timestampDate.getDate() + '/' + timestampDate.getFullYear();

  const hoverEffect =
    'bg-black px-2 py-2 rounded-lg mx-2 shadow-md hover:shadow-lg m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 max-w-sm max-h-sm cursor-pointer';
  const publishTimeDisplay = timestampDisplay ? (
    <span className="text-sm text-gray-500 p-1 px-2 m-1">{timestampDisplay}</span>
  ) : (
    ''
  );
  const tagsList = tags ? <div className="flex justify-center mt-4 flex-wrap"></div> : '';
  const cardKey = key ? 'CardKey' + key : 'CardKey';
  return (
    <>
      <div className={'CardComponent ' + hoverEffect} id={cardKey} onClick={toggleContentVisibility}>
        <div className="shadow-md rounded-lg px-10 py-6 text-center h-full">
          <Flex direction="column" justify="between" height="100%">
            <div>
              {publishTimeDisplay}
              <img src={coverImageUrl} alt={coverImageUrl} height={150} width={150} className="w-full" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-600">{title}</h2>
              <p className="text-m font-bold text-gray-600">{contentShort}</p>
            </div>
          </Flex>
        </div>
      </div>
      {isContentVisible && (
        <div
          className="absolute inset-0 bg-slate-900 bg-opacity-90 z-10"
          id={cardKey}
          onClick={toggleContentVisibility}
        >
          <div className="absolute inset-0 lg:m-12 sm:m-12 p-4 bg-slate-700 rounded-2xl" id={cardKey}>
            <div className="relative inset-0 flex flex-col lg:flex-row sm:flex-row rounded-2xl">
              <div className="flex flex-col w-full lg:w-1/2 sm:w-1/2">
                <div className="flex flex-col justify-center items-center lg:items-start sm:items-start">
                  <h1 className="text-5xl font-bold text-white mb-8">{title}</h1>
                  {timestampDisplay}
                  <p className="text-xl font-semibold text-white mb-8">{contentShort}</p>
                  <div className="flex flex-row justify-center lg:justify-start sm:justify-start">
                    <div className="flex flex-row items-center">
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-sm font-semibold text-white">{contentLong}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 sm:w-1/2">
                <img src={coverImageUrl} alt={coverImageUrl} className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
