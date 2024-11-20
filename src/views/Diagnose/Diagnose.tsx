import {
  Button,
  Card,
  Container,
  Divider,
  MultiSelect,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import IllnessCard from "./Components/IllnessCard/IllnessCard";
import DiagnoseController from "./DiagnoseController";

function Diagnose() {
  const {
    diagnosesData,
    form,
    handleDiagnose,
    isFetching,
    refetch,
    symptoms,
    diagnosesArray,
  } = DiagnoseController();

  return (
    <Container
      fluid
      py={"lg"}
      className="min-h-[calc(100%-5rem)] h-fit w-full !pb-32"
    >
      <Title className="!mb-7">Diagnosis Penyakit</Title>
      <Stack className="w-full">
        <Stack className="w-full">
          <TextInput
            readOnly
            label="Diagnosis Penyakit"
            {...form.getInputProps("diagnose")}
            key={form.key("diagnose")}
          />
          <MultiSelect
            className="w-full"
            {...form.getInputProps("symptoms")}
            key={form.key("symptoms")}
            data={symptoms}
            searchable
            nothingFoundMessage="Gejala Tidak Ditemukan"
            label="Gejala Penyakit"
            placeholder="Pilih gejala penyakit"
            clearable
            hidePickedOptions
            onClear={() => {
              form.setFieldValue("symptoms", []);
              form.reset();
            }}
          />
          <div>
            <Button loading={isFetching} onClick={handleDiagnose}>
              Diagnosis
            </Button>
          </div>
        </Stack>
        <Divider />
        <Stack>
          {diagnosesArray?.length === 0 ? (
            <Card></Card>
          ) : (
            diagnosesArray?.map((diagnose) => (
              <IllnessCard illness={diagnose} />
            ))
          )}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Diagnose;
