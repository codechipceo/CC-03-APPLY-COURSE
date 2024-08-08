import DataTable from "@/components/DataTable/DataTable";
import { HeaderBar, Wrapper } from "@/components/Wrapper";
import { useTools } from "@/hooks/useTools";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormComponent } from "../../components/FormComponent/FormWrapper";
import {
  apiPayloads,
  formDefinitions,
  tableColumns,
} from "../../constants/index";
import {
  addProgramOffering,
  getAllProgramOfferings,
  getAllSchools,
  updateProgramOffering,
} from "@/thunk/indexThunk";
import { selectProgram } from "@/slices/programSlice";
import { selectSchool } from "@/slices/schoolSlice";
import RichTextEditor from "@/components/RichTextEditor/RichTextEditor";

const { programOfferingForm } = formDefinitions;
const { programOfferingPayload } = apiPayloads;
const { programOfferingColumns } = tableColumns;
export const Program = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */

  const [paginationMode, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });
  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState("CREATE");
  const [pageData, setPageData] = useState({ ...programOfferingPayload });

  const [programInfo, setProgramInfo] = useState("");

  const { dispatch, useSelector } = useTools();

  const { programOfferings, count } = useSelector(selectProgram);
  const { schools } = useSelector(selectSchool);

  programOfferingForm[7].options = schools ?? [];

  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */

  const handleChange = (e) => {
    const { name, value } = e.target;

    const data = { ...pageData };
    if (e.target.files) {
      data[name] = e.target.files[0];
    } else {
      data[name] = value;
    }
    setPageData(data);
  };

  const handleEdit = (row) => {
    const data = { ...row };
    data.programId = data._id;
    data.schoolId = data.schoolId._id;

    setPageData(data);
    setProgramInfo(data?.programInfo);
    setStatus("EDIT");
    setForm(true);
  };

  const handleSubmit = () => {
    pageData.programInfo = programInfo;
    if (status === "CREATE") {
      dispatch(addProgramOffering(pageData));
    } else if (status === "EDIT") {
      dispatch(updateProgramOffering(pageData));
    }
  };

  const handleCancel = () => {
    setForm(false);
    setPageData(programOfferingPayload);
    setStatus("CREATE");
    setProgramInfo("");
  };

  /*
  ########################################################################
          USE EFFECT
  ########################################################################
 */

  useEffect(() => {
    dispatch(getAllSchools());
  }, []);
  useEffect(() => {
    dispatch(getAllProgramOfferings());
  }, []);

  return (
    <>
      <HeaderBar title={"PROGRAM"} />
      {isForm === false ? (
        <Wrapper>
          <Box mb={4}>
            <Button variant='contained' onClick={() => setForm(true)}>
              Add New Program +
            </Button>
          </Box>
          {programOfferings && programOfferings.length > 0 ? (
            <DataTable
              rows={programOfferings}
              handleEdit={handleEdit}
              columns={programOfferingColumns}
              totalCount={count}
              paginationModel={paginationMode}
              setPaginationModel={setPaginationModel}
            />
          ) : (
            <Box>
              <Typography>No Data Exist</Typography>
            </Box>
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          <FormComponent
            formDefinition={programOfferingForm}
            formPayload={pageData}
            status={status}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onCancel={handleCancel}
          >
            <Box>
              <Typography mb={2}>Program Info Detail:</Typography>
              <RichTextEditor
                value={programInfo}
                handleChange={setProgramInfo}
              />
            </Box>
          </FormComponent>
        </Wrapper>
      )}
    </>
  );
};
