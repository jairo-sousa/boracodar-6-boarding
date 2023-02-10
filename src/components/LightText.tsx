import { Text } from "@chakra-ui/react";
type LightTextProps = {
	text: String;
	color?: String;
	size?: String;
};
export function LightText(props: LightTextProps) {
	return (
		<Text
			fontWeight={400}
			color={`${props.color ? props.color : "#000000a3"}`}
			fontSize={`${props.size ? props.size : "1.4rem"}`}
		>
			{props.text}
		</Text>
	);
}
