import React from "react";
import { Link } from "react-router-dom";

interface Props {
	to: string;
	children: React.ReactNode;
}

function ToggleableLink(props: Props) {
	const { children, to } = props;

	return <Link to={to}>{children}</Link>;
}

export default ToggleableLink;
