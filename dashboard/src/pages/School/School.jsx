import DataTable from "@/components/DataTable/DataTable";
import { Wrapper } from "@/components/Wrapper";
import { useTools } from "@/hooks/useTools";
import { selectSchool } from "@/slices/schoolSlice";
import {
  addSchool,
  getAllLocation,
  getAllSchools,
  updateSchool,
} from "@/thunk/indexThunk";
import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormComponent } from "../../components/FormComponent/FormWrapper";
import {
  apiPayloads,
  formDefinitions,
  tableColumns,
} from "../../constants/index";

const { schoolForm } = formDefinitions;
const { schoolPayload } = apiPayloads;
const { schoolColumns } = tableColumns;
export const School = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */

  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState("CREATE");
  const [school, setSchool] = useState({ ...schoolPayload });
  const [paginationMode, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  const { dispatch, useSelector } = useTools();

  /*
  ########################################################################
          REDUX STATES
  ########################################################################
 */

  const schoolState = useSelector(selectSchool);



  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */

  const handleChange = (e) => {
    const { name, value } = e.target;

    const data = { ...school };
    if (e.target.files) {
      data[name] = e.target.files[0];
    } else {
      data[name] = value;
    }
    setSchool(data);
  };

  const handleEdit = (row) => {
    const data = { ...row };
    data.schoolId = data._id;
    data.location = data.location._id;
    setSchool(data);
    setStatus("EDIT");
    setForm(true);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("schoolName", school.schoolName);
    formData.append("schoolBanner", school.schoolBanner);
    formData.append("schoolLogo", school.schoolLogo);
    formData.append("location", school.location);
    if (status === "CREATE") {
      dispatch(addSchool(formData));
    } else if (status === "EDIT") {
      console.log(school);
      formData.append("schoolId", school._id);
      dispatch(updateSchool(formData));
    }
  };

  const handleCancel = () => {
    setForm(false);
    setSchool(schoolPayload);
    setStatus("CREATE");
  };

  /*
  ########################################################################
       USE EFFECT
  ########################################################################
 */

  useEffect(() => {
    dispatch(getAllLocation())
      .unwrap()
      .then((res) => {
        schoolForm[1].options = res?.data;
      });
  }, []);

  useEffect(() => {
    const payload = {
      limit: paginationMode.pageSize,
      skip: paginationMode.page,
    };
    dispatch(getAllSchools(payload));
  }, [paginationMode]);

  return (
    <>
      <Box bgcolor={"white"} py={2} boxShadow={2}>
        <Container>
          <Typography variant='h3' fontWeight={"bold"}>
            SCHOOLS
          </Typography>
        </Container>
      </Box>
      {isForm === false ? (
        <Wrapper>
          <Box mb={4}>
            <Button variant='contained' onClick={() => setForm(true)}>
              Add New +
            </Button>
          </Box>
          {schoolState.schools && schoolState?.schools.length > 0 ? (
            <DataTable
              rows={schoolState.schools}
              columns={schoolColumns}
              handleEdit={handleEdit}
              totalCount={schoolState?.count}
              paginationModel={paginationMode}
              setPaginationModel={setPaginationModel}
            />
          ) : (
            <Box>No data Exist</Box>
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          <FormComponent
            formDefinition={schoolForm}
            formPayload={school}
            status={status}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </Wrapper>
      )}
    </>
  );
};
