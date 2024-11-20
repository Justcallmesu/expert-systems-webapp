import { useState } from "react";
import { axiosGetDiagnose } from "../../lib/axios/Diagnose";
import useGetAxios from "../../lib/hooks/UseGetAxios";
import { ServerMessage } from "../../lib/models/globals/Response";
import { diagnoseKeys } from "../../lib/ReactQueryKeys/Diagnose";

function DiagnoseModel() {
  const [diagnoseQueryParams, setDiagnoseQueryParams] = useState<{
    symptoms: string;
  }>();

  const {
    data: diagnosesData,
    isFetching,
    refetch,
  } = useGetAxios<ServerMessage>({
    config: axiosGetDiagnose(),
    queryKey: diagnoseKeys.lists(diagnoseQueryParams).queryKey,
    queryParams: diagnoseQueryParams,
    enabled: !!diagnoseQueryParams,
  });

  return {
    setDiagnoseQueryParams,
    diagnosesData,
    isFetching,
    refetch,
  };
}

export default DiagnoseModel;
