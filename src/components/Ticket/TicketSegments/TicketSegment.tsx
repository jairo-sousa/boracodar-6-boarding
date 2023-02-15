import { Box, Flex } from "@chakra-ui/react";
import { Corner } from "./Corner";
type TicketSegmentProps = {
	top?: Boolean;
	bottom?: Boolean;
	children: React.ReactNode;
};
export function TicketSegment(props: TicketSegmentProps) {
	return (
		<Flex
			as="section"
			width="100%"
			h="100%"
			p="2.4rem 3.2rem"
			w="32.7rem"
			bg="#ffffff"
			direction="column"
			justify="space-between"
			borderRadius={`${props.top ? " 2.4rem 2.4rem" : "0 0"} ${
				props.bottom ? "2.4rem 2.4rem" : "0 0"
			}`}
			position="relative"
			overflow="hidden"
		>
			{props.children}

			{!props.top && (
				<>
					<Corner right={true} top={true} />
					<Corner left={true} top={true} />
				</>
			)}

			{!props.bottom && (
				<>
					<Corner right={true} bottom={true} />
					<Corner left={true} bottom={true} />

					<Box
						w="calc(100% + 3.2rem*2)"
						borderBottom="1px dashed rgba(0, 0, 0, 0.32)"
						position="absolute"
						bottom="0"
						left="0"
					/>
				</>
			)}
		</Flex>
	);
}
