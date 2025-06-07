import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./addEditnotes";
import { IoIosSchool } from "react-icons/io";
import Modal from "react-modal";

const Home = () => {
  const [openEditModal, setOpenEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className=" grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Lorem ipsum dolor sit amet."
            content=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, temporibus culpa praesentium ex recusandae nihil tenetur dolore, laboriosam harum dolor inventore distinctio est dolorem et dignissimos, ducimus accusantium sint alias? Nihil pariatur repudiandae ex nostrum possimus quos, libero iure provident amet, autem perferendis. Deserunt, ipsum ullam fugit numquam totam dignissimos impedit consectetur mollitia. Ad error porro natus earum ut suscipit itaque labore, qui, dicta quaerat nam eius cumque rem facilis?"
            date="03.08.34"
            tags="#lorem"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl  bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10   "
        onClick={() => {
          setOpenEditModal({
            isShown: true,
            type: "add",
            data: null,
          });
        }}
      >
        <MdAdd className=" text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            background: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes />
      </Modal>
    </>
  );
};

export default Home;
