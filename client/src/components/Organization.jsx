import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  Box,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" onClick={onToggle}>
        CLICK ME!
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px" color="white" bg="teal.500" rounded="md" shadow="md">
          {/* <Lorem count={1} /> */}
          Lorem Ipsum
        </Box>
      </Collapse>
    </>
  );
}
export default CollapseEx;
