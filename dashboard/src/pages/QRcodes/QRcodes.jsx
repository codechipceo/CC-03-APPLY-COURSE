import React from "react";
import { formDefinitions, apiPayloads } from "../../constants/index";
import { DynamicForm } from "@/components/FormComponent/DynamicForm";
import { useState } from "react";
import { FormComponent } from "@/components/FormComponent/FormWrapper";
import { Button, Grid } from "@mui/material";
import { useTools } from "@/hooks/useTools";
import { addQR, getAllQr, updateQr } from "@/thunk/indexThunk";
import { useEffect } from "react";
import { serlectQr } from "@/slices/qrSlice";
import { QrCard } from "@/components/QrCard/QrCard";
import { Wrapper } from "@/components/Wrapper";
const { qrForm } = formDefinitions;
const { qrPayload } = apiPayloads;

export const QRcodes = () => {
  const { dispatch, useSelector } = useTools();
  const [pageData, setPageData] = useState({ ...qrPayload });
  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState("CREATE");

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

  useEffect(() => {
    dispatch(getAllQr());
  }, []);

  const renderQr =
    existingQrcodes.length > 0
      ? existingQrcodes.map((eachQr) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={eachQr._id}>
              <QrCard
                data={eachQr}
                key={eachQr._id}
                handleEdit={() => handleEdit(eachQr)}
              />
            </Grid>
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
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
              {renderQr}
            </Grid>
          </Wrapper>
        </>
      )}
    </div>
  );
};
