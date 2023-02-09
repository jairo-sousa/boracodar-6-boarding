import { Text } from "@chakra-ui/react";
type LightTextProps = {
	text: String;
};
export function LightText(props: LightTextProps) {
	return (
		<Text fontWeight={400} fontSize="1.4rem" color="#000000a3">
			{props.text}
		</Text>
	);
}
