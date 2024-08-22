import { FormComponent } from "@/components/FormComponent/FormWrapper";
import { QrCard } from "@/components/QrCard/QrCard";
import { Wrapper } from "@/components/Wrapper";
import { useTools } from "@/hooks/useTools";
import { serlectQr } from "@/slices/qrSlice";
import { addQR, deleteQr, getAllQr, updateQr } from "@/thunk/indexThunk";
import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { apiPayloads, formDefinitions } from "../../constants/index";
const { qrForm } = formDefinitions;
const { qrPayload } = apiPayloads;

export const QRcodes = () => {
  const { dispatch, useSelector } = useTools();
  const [pageData, setPageData] = useState({ ...qrPayload });
  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState("CREATE");
  const [deleteId, setDeleteId] = useState(null);

  const existingQrcodes = useSelector(serlectQr);

  //##########################################
  // HANDLER FUNCTIONS
  //#########################################
  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...pageData };
    data[name] = value;
    setPageData(data);
  };
  const handleSubmit = async () => {
    if (status === "CREATE") {
      const res = await dispatch(addQR(pageData)).unwrap();
      if (res.data._id) {
        handleCancel();
      }
    } else if (status === "EDIT") {
      const qrcodeId = pageData._id;
      const res = await dispatch(updateQr({ ...pageData, qrcodeId })).unwrap();
      if (res.data._id) {
        handleCancel();
      }
    }
  };

  const handleCancel = () => {
    setPageData(qrPayload);
    setForm(false);
    setStatus("CREATE");
  };

  const handleEdit = (data) => {
    const obj = { ...data };
    setPageData(obj);
    setForm(true);
    setStatus("EDIT");
  };

  const handleDelete = (id) => {
    dispatch(deleteQr({ qrcodeId: id }));
  };

  useEffect(() => {
    dispatch(getAllQr());
  }, []);

  const renderQr =
    existingQrcodes.length > 0
      ? existingQrcodes.map((eachQr) => {
          return (
            <Box width={"100%"} key={eachQr._id}>
              <QrCard
                data={eachQr}
                key={eachQr._id}
                handleEdit={() => handleEdit(eachQr)}
                handleDelete={(id) => handleDelete(id)}
              />
            </Box>
          );
        })
      : null;

  return (
    <div>
      {isForm ? (
        <Wrapper>
          <FormComponent
            formDefinition={qrForm}
            formPayload={pageData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onCancel={handleCancel}
            status={status}
          ></FormComponent>
        </Wrapper>
      ) : (
        <>
          <Wrapper>
            <Button
              onClick={() => {
                setPageData(qrPayload);
                setForm(true);
              }}
            >
              Add New
            </Button>
            <Box display={"flex"} flexWrap={"wrap"}>
              {renderQr}
            </Box>
          </Wrapper>
        </>
      )}
    </div>
  );
};
