import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Group,
  LoadingOverlay,
  MultiSelect,
  Stack,
  Text,
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
          {isFetching && (
            <LoadingOverlay
              visible={isFetching}
              zIndex={1000}
              overlayProps={{ radius: "sm", blur: 2 }}
            />
          )}
          {diagnosesArray?.length === 0 && !isFetching ? (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group mt="md" mb="xs">
                <Text fz={"h3"} fw={500}>
                  Silahkan Masukkan Gejala
                </Text>
                <Badge color="yellow">Belum ada gejala yang diinput</Badge>
              </Group>
            </Card>
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
