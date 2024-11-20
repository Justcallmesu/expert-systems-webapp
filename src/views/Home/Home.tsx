import {
	Container,
	Overlay,
	Center,
	Title,
	Button,
	Stack,
	Text,
} from "@mantine/core";
import FeatherIcon from "feather-icons-react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	return (
		<>
			<Container
				p={0}
				className={`bg-hero-image bg-center bg-cover relative  h-screen`}
				fluid>
				<Overlay
					color="#000"
					backgroundOpacity={0.65}
					zIndex={0}>
					<Center className="w-full h-full">
						<Stack className="text-white flex text-center max-w-[50%]">
							<Stack
								gap={0}
								className="text-center">
								<Title className="text-white m-0">
									Diagnosis <span className="text-secondary">Penyakit Mata</span> Anda
									Secara Gratis Sekarang!
								</Title>
							</Stack>
							<Text className="text-center">
								Pendamping cerdas Anda untuk diagnosis dini masalah mata. Deteksi
								potensi masalah secara instan dan jaga kesehatan penglihatan Anda—tanpa
								antrean di klinik, tanpa istilah medis rumit, hanya kejelasan.
							</Text>
							<Button
								radius={"md"}
								className="p-10"
								onClick={() => navigate("/diagnose")}
								leftSection={<FeatherIcon icon="clipboard" />}>
								Diagnosis Sekarang
							</Button>
						</Stack>
					</Center>
				</Overlay>
			</Container>
			<Container></Container>
		</>
	);
}

export default Home;
