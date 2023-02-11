import { Flex } from "@chakra-ui/react";
import { TicketSegment } from "./TicketSegments/TicketSegment";
import { FlightInfo } from "./TicketSegments/FlightInfo";
import { PassangerInfo } from "./TicketSegments/PassangerInfo";
import { BoardingInfo } from "./TicketSegments/BoardingInfo";

export function Ticket() {
	return (
		<Flex direction="column">
			<TicketSegment top={true}>
				<FlightInfo />
			</TicketSegment>
			<TicketSegment>
				<PassangerInfo />
			</TicketSegment>
			<TicketSegment bottom={true}>
				<BoardingInfo />
			</TicketSegment>
		</Flex>
	);
}
