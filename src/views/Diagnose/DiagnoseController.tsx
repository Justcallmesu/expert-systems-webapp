import React, { ReactEventHandler, useEffect } from "react";
import DiagnoseModel from "./DiagnoseModel";
import { useForm } from "@mantine/form";

interface DiagnoseValues {
	symptoms: string[];
	diagnose?: string;
}

function DiagnoseController() {
	const { diagnosesData, isFetching, refetch, setDiagnoseQueryParams } =
		DiagnoseModel();

	const symptoms = [
		"burning",
		"foreign body sensation",
		"red lid margins",
		"lids often stuck together in a.m.",
		"possible loss of lashes",
		"lid tenderness",
		"pain",
		"swelling",
		"edema",
		"swollen",
		"red lids",
		"swollen red lids",
		"swollen red conjunctiva",
		"impaired ocular motility",
		"pain on eye movement",
		"proptosis",
		"persistent tearing",
		"persistent discharge",
		"redness",
		"dacryocystitis",
		"palpebral redness",
		"diffuse redness",
		"watery",
		"white, stringy mucus",
		"itching",
		"burning eyes",
		"lid edema",
		"purulent",
		"serous",
		"tender preauricular lymphadenopathy",
		"bright red eye",
		"no pain",
		"no malvision",
		"gritty sensation",
		"inflamed",
		"discomfort",
		"localized redness",
		"tearing",
		"photophobia",
		"decreased vision",
		"purulent discharge",
		"blood in the anterior chamber",
		"pus in the anterior chamber",
		"headaches",
		"nausea",
		"vomit",
		"perception of rainbow-colored halos around light",
		"blur vision",
		"circumcorneal injection",
		"ciliary flush",
		"constricted pupil",
		"normal to low iop",
		"loss of vision",
		"degradation of vision",
		"visual loss",
		"macular edema",
		"exudate deposition",
		"proliferative disease",
		"vitreous hemorrhage",
		"retinal detachment",
		"left reflex is obscured totally",
		"light reflex occupies most of the width of vessels",
		"nicking",
	];

	const form = useForm<DiagnoseValues>({
		mode: "uncontrolled",
		initialValues: {
			symptoms: [],
			diagnose: "",
		},
		validate: (values) => {
			const errors: Record<string, string> = {};

			if (values.symptoms.length === 0) {
				errors.symptoms = "Gejala penyakit tidak boleh kosong";
			}

			return errors;
		},
	});

	const handleDiagnose = () => {
		const queryParams = form.getValues();

		setDiagnoseQueryParams({
			symptoms: queryParams.symptoms.join(","),
		});
	};

	useEffect(() => {
		if (diagnosesData) {
			if (Array.isArray(diagnosesData?.data)) {
				form.setFieldValue(
					"diagnose",
					(diagnosesData?.data as Array<string>)?.join(", ")
				);
			} else {
				form.setFieldValue("diagnose", diagnosesData.message);
			}
		}
	}, [diagnosesData]);

	return {
		diagnosesData,
		isFetching,
		refetch,
		symptoms,
		form,
		handleDiagnose,
	};
}

export default DiagnoseController;
