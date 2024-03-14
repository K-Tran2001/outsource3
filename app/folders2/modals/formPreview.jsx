import * as React from "react";
import * as Ai from "react-icons/ai";
import TitleText from "../sharedControls/titleText";

export default function FormPreview({
  pageTranslate,
  visibleModal,
  setVisibleModal,
  fields,
  headingForm,
  setMode,
}) {
  const [error, setError] = React.useState([]);
  const [dataForm, setDataForm] = React.useState({});
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setIdentityImage(e.target.result);
        localStorage.setItem(
          "base64Img",
          e.target.result.replace("data:image/png;base64,", "")
        );
      };
      reader.readAsDataURL(file);
    }
  };
  const autoGenCode = (jsonData) => {
    const prefix = (jsonData?.prefix || 0) + "";
    const defaultValue = (jsonData?.defaultValue || 0) + "";
    const length = parseInt(jsonData?.length || 2);

    const zerosCount = Math.max(
      length - prefix.length - defaultValue.length,
      0
    );
    let generatedString = prefix + "0".repeat(zerosCount) + defaultValue;

    return generatedString;
  };
  const onValidate = () => {
    const ids = [];
    for (const key in dataForm) {
      if (dataForm.hasOwnProperty(key)) {
        if (
          dataForm[key].required === true &&
          (dataForm[key].value === "" || dataForm[key].value == null)
        ) {
          ids.push(key);
        }
      }
    }
    setError(ids);
    return ids.length == 0;
  };
  React.useEffect(() => {
    const transformedArray = fields.reduce((result, item) => {
      var condition =
        (item.type === "dropdown" || item.type === "contactList") &&
        item?.values?.length > 0;
      result[item.id] = { ...item, value: condition ? item?.values[0] : "" };
      return result;
    }, {});
    setDataForm(transformedArray);
  }, []);
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 ${
        visibleModal ? " bg-gray-100 bg-opacity-70" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full  flex justify-center items-center`}
    >
      <div className="w-full max-w-4xl max-h-full">
        <div className="relative bg-primary  rounded-t-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray_800 rounded-lg text-medium w-8 h-8 ml-auto inline-flex justify-center items-center"
            data-modal-hide="authentication-modal"
            onClick={() => {
              setVisibleModal(false);
              setMode("edit");
            }}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 lg:px-8">
            <TitleText
              title={pageTranslate?.preview_form}
              color={"text-white"}
            />
          </div>
        </div>
        <div className="bg-white rounded-b-lg py-4 px-8">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-black text-center pb-4">
              {headingForm.title}
            </h1>
            <h1 className="text-xl font-bold text-black  pb-4">
              {headingForm.discription}
            </h1>
          </div>
          {/* BODY */}
          {fields?.map((field) => {
            if (field.type != "file") {
              if (field.type == "heading") {
                return (
                  <div className="mb-4  rounded-lg " key={Math.random()}>
                    <h1 className="text-center text-black text-4xl rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
                      {field.title}
                    </h1>
                    <h1 className=" text-black text-xl rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
                      {field.discription}
                    </h1>
                  </div>
                );
              } else if (field.type == "divider") {
                return (
                  <div className="my-8  rounded-lg " key={Math.random()}>
                    <hr className="border-2 bg-gray-400"></hr>
                  </div>
                );
              } else if (field.type == "radio" || field.type == "checkbox") {
                return (
                  <div className="my-8  rounded-lg " key={Math.random()}>
                    <div className="flex items-center pl-3">
                      <input
                        id={field.id}
                        defaultChecked={dataForm[field.id]?.value}
                        onBlur={(e) => {
                          setDataForm({
                            ...dataForm,
                            [field?.id]: {
                              ...field,
                              value: e.target.checked,
                            },
                          });
                        }}
                        type={field.type}
                        name="list-radio"
                        className="w-4 h-4 text-primary bg-gray_100 border-gray_300"
                      />
                      <label
                        className="w-full py-3 ml-2 text-md text-gray_500"
                        htmlFor={field.id}
                      >
                        {`${field.label}`}
                      </label>
                    </div>
                  </div>
                );
              } else if (
                field.type == "dropdown" ||
                field.type == "contactList"
              ) {
                return (
                  <div className=" w-full my-6 group" key={Math.random()}>
                    <div className="w-full py-3  text-sm text-gray_500 flex">
                      {`${field.label} `}
                      <div className="text-danger px-2">{`${
                        field?.required == true ? "(*)" : ""
                      }`}</div>
                    </div>
                    <select
                      id={field.id}
                      className={`border border-gray_300
               bg-gray-50  text-gray_800 text-large rounded-lg  block w-full p-2.5`}
                      value={dataForm[field?.id]?.value}
                      multiple={false}
                      onChange={(e) => {
                        setDataForm({
                          ...dataForm,
                          [field?.id]: {
                            ...field,
                            value: e.target.value,
                          },
                        });
                      }}
                    >
                      {field.values?.map((item) => (
                        <option
                          key={Math.random()}
                          value={item}
                          className="text-md"
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              } else if (field.isShow === true) {
                return (
                  <div
                    className="relative z-0 w-full mb-6 group"
                    key={Math.random()}
                  >
                    <input
                      type={field.type === "autoNumber" ? "text" : field.type}
                      name="floating_email"
                      className={`px-2 block py-3 w-full text-large text-gray_800 bg-transparent border-0 border-b-2 border-gray_300 appearance-none focus:outline-none focus:ring-0 ${
                        error.includes(field.id)
                          ? "border-danger"
                          : "focus:border-primary"
                      } peer`}
                      placeholder=" "
                      readOnly={field.type === "autoNumber"}
                      defaultValue={
                        field.type === "autoNumber"
                          ? autoGenCode(field?.config)
                          : dataForm[field?.id]?.value
                      }
                      onBlur={(e) => {
                        setDataForm({
                          ...dataForm,
                          [field?.id]: {
                            ...field,
                            value: e.target.value,
                          },
                        });
                      }}
                    />
                    <div className="flex peer-focus:text-large absolute text-large text-gray_500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      {`${field.label} `}
                      <div className="text-danger px-2">{`${
                        field.required == true ? "(*)" : ""
                      }`}</div>
                    </div>
                  </div>
                );
              }
            } else {
              return (
                <div key={Math.random()}>
                  {!istakePhoto && (
                    <div key={Math.random()}>
                      <div
                        className="mb-4 flex items-center justify-center w-full"
                        key={Math.random()}
                      >
                        {identityImage.length > 0 && !istakePhoto ? (
                          <img
                            src={identityImage}
                            alt="Uploaded"
                            style={{
                              maxWidth: "100%",
                              maxHeight: "400px",
                            }}
                          />
                        ) : (
                          <div key={Math.random()} className="w-full">
                            <label
                              htmlFor={field.id}
                              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray_300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  className="w-8 h-8 mb-4 text-gray_500"
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
                                <p className="mb-2 text-sm text-gray_500">
                                  <span className="font-semibold">
                                    {dataTranslate.click_to_upload}
                                  </span>
                                  {dataTranslate.or_drag_and_drop}{" "}
                                </p>
                                <p className="text-xs text-gray_500">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id={field.id}
                                type="file"
                                className="hidden"
                                onChange={(e) => handleImageUpload(e)}
                              />
                            </label>
                          </div>
                        )}
                      </div>
                      {identityImage.length > 0 && (
                        <div className="flex justify-center">
                          <button
                            className="w-1/2 bg-primary text-white font-normal text-large py-2 px-0.5 rounded-xl flex justify-center mt-3"
                            onClick={() => {
                              setOpen(!open);
                              setIdentityImage("");
                            }}
                          >
                            <span className="mr-2">
                              {dataTranslate.take_a_photo_again}
                            </span>
                            <Ai.AiOutlineReload
                              style={{ marginTop: "5px" }}
                              color="white"
                            />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }
          })}
          {/*  */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="w-[100px] text-white bg-secondary hover:shadow-sm focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-medium px-5 py-2.5 text-center"
              onClick={(e) => {
                setVisibleModal(false);
                setMode("edit");
              }}
            >
              {pageTranslate?.cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
