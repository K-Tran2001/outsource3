import * as React from "react";
import * as Bs from "react-icons/bs";
import { Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./components/strictmode";
import ItemForm from "../folders2/sharedControls/itemForm";
import NewFieldModal2 from "../folders2/modals/newfieldModal2";
import FormPreview from "../folders2/modals/formPreview";

export default function CenterPanel({
  type,
  fields,
  setFields,
  visibleModalNewField,
  setVisibleModalNewField,
  currentField,
  setCurrentField,
  setIsDragging,
  isEdit,
  setIsEdit,
  setDataEdit,
  pageTranslate,
  headingForm,
  setHeadingForm,
  addField,
  setAddField,
}) {
  const [mode, setMode] = React.useState("edit");
  const [visibleModal, setVisibleModal] = React.useState(false);
  const typeFormElements = ["heading", "divider", "file"];
  const appendAt = (list, index, data) => {
    const result = [...list];
    result.splice(index, 0, data);
    return result;
  };
  const remove = (list, index) => {
    const result = [...list];
    result.splice(index, 1);
    return result;
  };
  const removeField = (id, index) => {
    // const isFormElement = ["heading", "divider", "file"].includes(
    //   fields[type][index].type
    // );
    const srcItems = remove(fields[type], index);
    const destItems = true
      ? fields[
          typeFormElements.indexOf(fields[type][index].type) != -1
            ? "formElements"
            : "fields"
        ]
      : appendAt(
          fields[
            typeFormElements.indexOf(fields[type][index].type) != -1
              ? "formElements"
              : "fields"
          ],
          0,
          fields[type][index]
        );

    const tempFields = { ...fields };
    tempFields[type] = srcItems;
    tempFields[
      typeFormElements.indexOf(fields[type][index].type) != -1
        ? "formElements"
        : "fields"
    ] = destItems;
    setFields({ ...tempFields });
  };
  return (
    <div className="w-10/12 bg-white h-[calc(100vh-50px)] overflow-x-auto shadow-md has-scrollbar">
      {/*  */}
      <div className="absolute right-0 bottom-0 -translate-x-2 -translate-y-2	 p-2 rounded-lg border border-gray_300 space-y-4 ">
        <div
          className={`cursor-pointer px-4 py-2 text-medium ${
            mode === "edit" ? "text-white bg-primary rounded-md" : ""
          }`}
          onClick={() => setMode("edit")}
        >
          {pageTranslate?.edit}
        </div>
        <div
          className={`cursor-pointer px-4 py-2 text-medium ${
            mode === "preview" ? "text-white bg-primary rounded-md" : ""
          }`}
          onClick={() => {
            setMode("preview");
            setVisibleModal(true);
          }}
        >
          {pageTranslate?.preview}
        </div>
      </div>
      {/*  */}
      <div className="p-8 space-2">
        <div
          className="mt-8 px-32"
          onClick={() => {
            setCurrentField(headingForm);
            //setDataEdit(headingForm);
            setVisibleModalNewField(true);
            setIsEdit(true);
          }}
        >
          <div className="hover:shadow-lg rounded-lg px-8 py-2">
            <h1 className="text-titleForm font-medium text-gray_800 text-center truncate">
              {headingForm?.title}
            </h1>
            <h3 className="text-discriptionForm font-medium text-gray_800 truncate">
              {headingForm?.discription}
            </h3>
          </div>
        </div>
        <StrictModeDroppable droppableId={type}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div className=" rounded-lg px-32 py-4  min-h-[60vh]">
                {fields[type]?.map((field, index) => {
                  if (field.isShow)
                    return (
                      <Draggable
                        key={field?.id}
                        draggableId={field?.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ItemForm
                              field={field}
                              index={index}
                              setCurrentField={setCurrentField}
                              handleDelete={() => removeField(field?.id, index)}
                              handleEdit={() => {
                                setCurrentField(field);
                                //setDataEdit(field);
                                setIsEdit(true);
                                setVisibleModalNewField(true);
                              }}
                              pageTranslate={pageTranslate}
                              fields={fields}
                              currentField={currentField}
                              setFields={setFields}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                })}
                {provided.placeholder}
                {fields[type].length > 0 ? (
                  <div className="flex justify-center">
                    <button
                      className="w-6 h-6 bg-blue-100 flex justify-center items-center rounded-lg"
                      onClick={() => {
                        setIsEdit(false);
                        setCurrentField({ label: "", type: "text" });
                        setVisibleModalNewField(true);
                        setAddField(type);
                      }}
                    >
                      <Bs.BsPlusSquare className="w-4 h-4 text-blue-500" />
                    </button>
                  </div>
                ) : (
                  <div className="flex-1 p-6  border-dashed border border-gray-500 rounded-lg">
                    <h1 className="text-center text-gray-400 text-sm font-medium">
                      {pageTranslate?.drop_fields_here}
                    </h1>
                  </div>
                )}
              </div>
            </div>
          )}
        </StrictModeDroppable>
      </div>
      <NewFieldModal2
        addField={addField}
        visibleModalNewField={visibleModalNewField}
        setVisibleModalNewField={setVisibleModalNewField}
        fields={fields}
        setFields={setFields}
        data={currentField}
        setDataEdit={setCurrentField}
        isEdit={isEdit}
        pageTranslate={pageTranslate}
        setCurrentField={setCurrentField}
        headingForm={headingForm}
        setHeadingForm={setHeadingForm}
      />
      <FormPreview
        pageTranslate={pageTranslate}
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        fields={fields["fieldSelectedList"]}
        headingForm={headingForm}
        setMode={setMode}
      />
    </div>
  );
}
