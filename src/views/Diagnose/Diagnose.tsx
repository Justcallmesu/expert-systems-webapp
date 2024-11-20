import React from "react";
import DiagnoseController from "./DiagnoseController";
import {
	SimpleGrid,
	MultiSelect,
	Container,
	Button,
	TextInput,
	Stack,
	Center,
} from "@mantine/core";

function Diagnose() {
	const { diagnosesData, form, handleDiagnose, isFetching, refetch, symptoms } =
		DiagnoseController();

	return (
		<Container
			fluid
			className="h-[calc(100vh-10rem)]"
			py={"lg"}>
			<Center className="w-full h-full">
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
					<Button onClick={handleDiagnose}>Diagnosis</Button>
				</Stack>
			</Center>
		</Container>
	);
}

export default Diagnose;
