import React from "react";
import ChatInCourse from "../components/coursepage/ChatInCourse";
import VideoPresent from "../components/coursepage/VideoPresent";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const LearningPage = () => {
  return (
    <div className=" bg-white pb-3 ">
      <div className="h-full flex flex-col justify-between">
      <div className="grid grid-cols-9 h-[700px]">
        <div className=" rounded-lg mr-3 col-span-7 bg-colorBackground">
          {/* <div className="p-2 w-full">
            <p className="text-center font-poppins font-semibold text-[20px] text-colorText">
              Theme Name
            </p>
            <div className="flex flex-col">
              <img src={Image} className="m-3" alt="img" />
            </div>
          </div> */}
          <VideoPresent />
        </div>

        <div className=" bg-colorBackground h-[700px] py-2 col-span-2 rounded-lg overflow-auto">
          <p className="text-center font-poppins font-semibold text-[20px] text-colorText">
            Questions
          </p>
          <div className="space-y-5 p-2">
          <ChatInCourse text="Question" type="question" />
          <ChatInCourse
            text="This is answered by Chat GPT: Lorem ipsumsdfsdf d ssdfds fs df
              dsfdsfdsgdgdsfsdf sdfsd fsd fdsfdsfdsfsdtdsgdfsdfsd"
            type="answer"
          />
          <ChatInCourse text="Question" type="question" />
          <ChatInCourse
            text="This is answered by Chat GPT: Lorem ipsumsdfsdf d ssdfds fs df
              dsfdsfdsgdgdsfsdf sdfsd fsd fdsfdsfdsfsdtdsgdfsdfsd"
            type="answer"
          />
          <ChatInCourse text="Question" type="question" />
          <ChatInCourse
            text="This is answered by Chat GPT: Lorem ipsumsdfsdf d ssdfds fs df
              dsfdsfdsgdgdsfsdf sdfsd fsd fdsfdsfdsfsdtdsgdfsdfsd"
            type="answer"
          />
          <ChatInCourse text="Question" type="question" />
          <ChatInCourse
            text="This is answered by Chat GPT: Lorem ipsumsdfsdf d ssdfds fs df
              dsfdsfdsgdgdsfsdf sdfsd fsd fdsfdsfdsfsdtdsgdfsdfsd"
            type="answer"
          />
          </div>
        </div>
      </div>

      <div className=" bg-colorBackground flex items-center mt-3 rounded-lg h-full">

      <AiOutlineQuestionCircle size={20} className="w-10 h-10 transition peer-hover:translate-x-3" />
        <input
          placeholder="Ask from AI"
          className=" bg-colorBackground outline-none rounded-lg w-full px-5 py-3 text-xl font-poppins font-semibold text-colorText shadow"
        />
      </div>

      </div>
    </div>
  );
};

export default LearningPage;
