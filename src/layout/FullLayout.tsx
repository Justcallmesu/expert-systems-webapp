import {
	ActionIcon,
	Anchor,
	AppShell,
	Burger,
	Button,
	Group,
	MantineProvider,
	UnstyledButton,
	createTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ToggleableLink from "../components/ToggleableLink";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FeatherIcons from "feather-icons-react";

const theme = createTheme({});

function FullLayout() {
	const navigate = useNavigate();

	const navigationItems = [
		{
			link: "/",
			label: "Home",
		},
	].map((link) => (
		<Anchor
			key={link.label}
			href={link.link}
			color="black"
			underline="never"
			lh={1}
			fw={500}
			size="sm">
			<NavLink
				to={link.link}
				className={({ isActive }) => (isActive ? "text-primary" : "")}>
				{link.label}
			</NavLink>
		</Anchor>
	));

	const [opened, { toggle }] = useDisclosure();
	return (
		<MantineProvider theme={theme}>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: "sm",
					collapsed: { desktop: true, mobile: !opened },
				}}>
				<AppShell.Header className="rounded-b-md drop-shadow-lg">
					<Group
						h="100%"
						px="md">
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Group
							justify="space-between"
							style={{ flex: 1 }}>
							<h1 className="font-bold font-exo2 text-2xl">SightSense</h1>
							<Group visibleFrom="sm">
								<ToggleableLink to="/">{navigationItems}</ToggleableLink>
							</Group>
							<Group>
								<Button
									radius={20}
									onClick={() => navigate("/diagnose")}>
									Diagnose
								</Button>
							</Group>
						</Group>
					</Group>
				</AppShell.Header>

				<AppShell.Navbar
					py="md"
					px={4}>
					{navigationItems}
				</AppShell.Navbar>

				<AppShell.Main className="bg-[#FBFBFB] h-full">
					<Outlet />
					<footer className="border-t-[1px]">
						<div className="flex justify-between items-center md:flex-row flex-col p-8">
							<h1 className="font-bold font-exo2 text-2xl">SightSense</h1>
							<Group className="md:mt-0 md:mb-0 mt-5 mb-5">
								{navigationItems}{" "}
								<Anchor
									key={"diagnose"}
									href={"/diagnoes"}
									underline="never"
									lh={1}
									color="black"
									fw={500}
									size="sm">
									<NavLink
										to={"/diagnose"}
										className={({ isActive }) => (isActive ? "text-primary" : "")}>
										{"Diagnosis"}
									</NavLink>
								</Anchor>
							</Group>
							<Group
								gap="xs"
								justify="flex-end"
								wrap="nowrap">
								<ActionIcon
									size="lg"
									variant="subtle"
									radius="xl">
									<FeatherIcons
										icon="twitter"
										className="text-secondary"
									/>
								</ActionIcon>
								<ActionIcon
									size="lg"
									variant="subtle"
									className=""
									radius="xl">
									<FeatherIcons
										icon="instagram"
										className="text-secondary"
									/>
								</ActionIcon>
								<ActionIcon
									size="lg"
									variant="subtle"
									radius="xl">
									<FeatherIcons
										icon="facebook"
										className="text-secondary"
									/>
								</ActionIcon>
							</Group>
						</div>
						{/* <ActionIcon
								size="lg"
								variant="default"
								radius="xl">
								<IconBrandYoutube
									style={{ width: rem(18), height: rem(18) }}
									stroke={1.5}
								/>
							</ActionIcon>
							<ActionIcon
								size="lg"
								variant="default"
								radius="xl">
								<IconBrandInstagram
									style={{ width: rem(18), height: rem(18) }}
									stroke={1.5}
								/>
							</ActionIcon> */}
					</footer>
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	);
}

export default FullLayout;
