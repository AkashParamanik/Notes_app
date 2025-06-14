import React from "react";

const EmptyCard = ({ isSearch }) => {
  return (
    <div className="flex items-center justify-center">
      {isSearch ? (
        <img
          className="w-40"
          src="https://img.freepik.com/premium-vector/black-white-picture-face-with-sad-face_640834-1517.jpg"
          alt=""
        />
      ) : (
        <img
          src="https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-document-icon-for-your-project-png-image_1561777.jpg"
          alt=""
        />
      )}
      {isSearch ? (
        <p className="font-bold text-red-500">
          OOPS! No Result <span>Found</span>
        </p>
      ) : (
        <p className="font-bold text-xl ">
          Add notes by clicking on the right-bottom{" "}
          <span className="text-blue-600">blue button</span>
        </p>
      )}
    </div>
  );
};

export default EmptyCard;
