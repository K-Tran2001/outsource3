import * as React from "react";
import * as Ci from "react-icons/ci";
import * as Ai from "react-icons/ai";

export default function ItemForm({
  field,
  handleDelete,
  handleEdit,
  setCurrentField,
  index,
  pageTranslate,
}) {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div>
      {field?.type == "file" ? (
        <div
          className="mb-4 border-gray-200 border-dashed border border-light-blue-500  p-8  bg-gray-50 bg-gray-50 rounded-lg hover:shadow-md"
          key={Math.random()}
          onClick={() => setCurrentField({ ...field, index: index })}
        >
          <div className="relative flex-1 translate-y-[-0.5rem] translate-x-[0.5rem]">
            <div className="flex justify-end space-x-4">
              <button
                className=" w-10 h-10 bg-indigo-100 flex justify-center items-center rounded-lg cursor-pointer"
                onClick={handleEdit}
              >
                <Ci.CiEdit className="w-5 h-5 text-indigo-500" />
              </button>
              <button
                className=" w-10 h-10 bg-red-100 flex justify-center items-center rounded-lg"
                onClick={handleDelete}
              >
                <Ai.AiOutlineDelete className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
          <div
            className="flex items-center justify-center w-full"
            key={Math.random()}
          >
            <label className="flex flex-col items-center justify-center w-full h-64 cursor-pointer   ">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 ">
                  <span className="font-semibold">
                    {pageTranslate.click_to_upload}
                  </span>{" "}
                  {pageTranslate.or_drag_and_drop}
                </p>
                <p className="text-xs text-gray-500 ">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input readOnly type="file" className="hidden" />
            </label>
          </div>
        </div>
      ) : field?.type == "heading" ? (
        <div
          className="mb-4  hover:border-gray-200 hover:border p-8   bg-gray-50 rounded-lg hover:shadow-md"
          key={Math.random()}
          onClick={() => setCurrentField({ ...field, index: index })}
        >
          <div className="relative flex-1  translate-y-[-0.5rem] translate-x-[0.5rem]">
            <div className="flex justify-end space-x-4">
              <button
                className=" w-10 h-10 bg-indigo-100 flex justify-center items-center rounded-lg cursor-pointer"
                onClick={handleEdit}
              >
                <Ci.CiEdit className="w-5 h-5 text-indigo-500" />
              </button>
              <button
                className=" w-10 h-10 bg-red-100 flex justify-center items-center rounded-lg"
                onClick={handleDelete}
              >
                <Ai.AiOutlineDelete className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>

          <h1
            id="password"
            className="text-center  text-gray-900 text-3xl  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 truncate"
            placeholder={field.placeholder}
          >
            {/* {pageTranslate.heading} */}
            {field.title}
          </h1>
          <h3
            id="password"
            className="text-gray-900 text-xl  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 truncate"
            placeholder={field.placeholder}
          >
            {/* {pageTranslate.heading} */}
            {field.discription}
          </h3>
        </div>
      ) : field?.type == "divider" ? (
        <div
          className="mb-4  hover:border-gray-200 hover:border p-8   bg-gray-50 rounded-lg hover:shadow-md"
          key={Math.random()}
          onClick={() => setCurrentField({ ...field, index: index })}
        >
          <div className="relative flex-1  translate-y-[-0.5rem] translate-x-[0.5rem]">
            <div className="flex justify-end space-x-4">
              <button
                className=" w-10 h-10 bg-indigo-100 flex justify-center items-center rounded-lg cursor-pointer"
                onClick={handleEdit}
              >
                <Ci.CiEdit className="w-5 h-5 text-indigo-500" />
              </button>
              <button
                className=" w-10 h-10 bg-red-100 flex justify-center items-center rounded-lg"
                onClick={handleDelete}
              >
                <Ai.AiOutlineDelete className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
          <hr className="border-2 px-4 w-[90%] m-[auto]"></hr>
        </div>
      ) : field?.type == "radio" || field?.type == "checkbox" ? (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="mb-4  hover:border-gray-200 hover:border p-8   bg-gray-50 rounded-lg hover:shadow-md"
          key={Math.random()}
          onClick={() => setCurrentField({ ...field, index: index })}
        >
          <div className="relative flex-1 translate-y-[-0.5rem] translate-x-[0.5rem]">
            <div className={`flex justify-end space-x-4 block `}>
              <button
                className=" w-10 h-10 bg-indigo-100 flex justify-center items-center rounded-lg cursor-pointer"
                onClick={handleEdit}
              >
                <Ci.CiEdit className="w-5 h-5 text-indigo-500" />
              </button>
              <button
                className=" w-10 h-10 bg-red-100 flex justify-center items-center rounded-lg"
                onClick={handleDelete}
              >
                <Ai.AiOutlineDelete className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <div className="flex items-center pl-3">
              <input
                readOnly
                checked={field?.type == "radio" || field?.type == "checkbox"}
                onChange={(e) =>
                  setCurrentField({
                    ...field,
                    index: index,
                  })
                }
                type={field.type}
                value={field.type}
                name="list-radio"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 mr-4"
              />
              <label className="w-full py-3 ml-2 text-md font-medium text-gray-900">
                {field.label}
              </label>
            </div>
          </div>
        </div>
      ) : field?.type == "dropdown" ? (
        <div
          className="mb-4  hover:border-gray-200 hover:border p-8   bg-gray-50 rounded-lg hover:shadow-md"
          key={Math.random()}
          onClick={() => setCurrentField({ ...field, index: index })}
        >
          <div className="relative flex-1 translate-y-[-0.5rem] translate-x-[0.5rem]">
            <div className="flex justify-end space-x-4">
              <button
                className=" w-10 h-10 bg-indigo-100 flex justify-center items-center rounded-lg cursor-pointer"
                onClick={handleEdit}
              >
                <Ci.CiEdit className="w-5 h-5 text-indigo-500" />
              </button>
              <button
                className=" w-10 h-10 bg-red-100 flex justify-center items-center rounded-lg"
                onClick={handleDelete}
              >
                <Ai.AiOutlineDelete className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
          <div className="z-0 w-full mb-6 group">
            <label className="text-lg text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 scale-75 -translate-y-6">
              {field.type == "date" ? "" : field.label}
            </label>
            <select
              disabled
              className={`border border-gray-300 rounded-lg
               bg-gray-50  text-gray-900 text-sm   block w-full p-2.5`}
            ></select>
          </div>
        </div>
      ) : (
        <div
          className="mb-4  hover:border-gray-200 hover:border p-8   bg-gray-50 rounded-lg hover:shadow-md"
          key={Math.random()}
          onClick={() => setCurrentField({ ...field, index: index })}
        >
          <div className="relative flex-1 translate-y-[-0.5rem] translate-x-[0.5rem]">
            <div className="flex justify-end space-x-4">
              <button
                className=" w-10 h-10 bg-indigo-100 flex justify-center items-center rounded-lg cursor-pointer"
                onClick={handleEdit}
              >
                <Ci.CiEdit className="w-5 h-5 text-indigo-500" />
              </button>
              <button
                className=" w-10 h-10 bg-red-100 flex justify-center items-center rounded-lg"
                onClick={handleDelete}
              >
                <Ai.AiOutlineDelete className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
          <div className="z-0 w-full mb-6 group">
            <label className="text-lg text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 scale-75 -translate-y-6">
              {field.type == "date" ? "" : field.label}
            </label>
            <input
              readOnly
              type={field.type}
              name="floating_email"
              className={`px-2 block w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer ${
                field.type == "date" ? "py-3" : ""
              }`}
              placeholder=" "
              required
            />
          </div>
        </div>
      )}
    </div>
  );
}
